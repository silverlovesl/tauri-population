use crate::models::constant::DATABASE_NAME;
use crate::models::country::Country;
use rusqlite::Connection;

#[tauri::command]
pub fn fetch_countries() -> String {
    let db_path = format!(
        "/Users/silver/Downloads/tauri-population/src-tauri/database/{}",
        DATABASE_NAME
    );

    let query = "SELECT * FROM countries";
    let conn = Connection::open(db_path).unwrap();
    let mut stmt = conn.prepare(query).unwrap();
    let maped_rows = stmt
        .query_map([], |row| {
            let c = Country {
                id: row.get::<_, i32>(0).unwrap(),
                name: row.get::<_, String>(1).unwrap(),
                en_name: row.get::<_, String>(2).unwrap(),
                country_code: row.get::<_, String>(3).unwrap(),
                language_code: row.get::<_, String>(4).unwrap(),
            };
            Ok(c)
        })
        .unwrap();

    let mut countries: Vec<Country> = vec![];
    for row in maped_rows {
        countries.push(row.unwrap());
    }

    let serialized_countries = serde_json::to_string(&countries).unwrap();
    println!("{:?}", serialized_countries);
    serialized_countries
}
