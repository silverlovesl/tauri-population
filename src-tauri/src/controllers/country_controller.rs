use crate::helpers::db_helper;
use crate::models::country::Country;
use crate::models::province::Province;

#[tauri::command]
pub fn fetch_countries(app: tauri::AppHandle) -> String {
    let query = "SELECT * FROM countries";
    let conn = db_helper::get_connection(app);
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

    let serialized_result = serde_json::to_string(&countries).unwrap();
    serialized_result
}

#[tauri::command]
pub fn fetch_provinces(app: tauri::AppHandle, country_id: i32) -> String {
    println!("country_id=====>{}", country_id);
    let query = "SELECT * FROM provinces where country_id = :country_id;";
    let conn = db_helper::get_connection(app);
    let mut stmt = conn.prepare(query).unwrap();
    let maped_rows = stmt
        .query_map(&[(":country_id", country_id.to_string().as_str())], |row| {
            let province = Province {
                id: row.get::<_, i32>(0).unwrap(),
                country_id: row.get::<_, i32>(1).unwrap(),
                name: row.get::<_, String>(2).unwrap(),
            };
            Ok(province)
        })
        .unwrap();

    let mut provinces: Vec<Province> = vec![];
    for row in maped_rows {
        provinces.push(row.unwrap());
    }

    let serialized_result = serde_json::to_string(&provinces).unwrap();
    serialized_result
}
