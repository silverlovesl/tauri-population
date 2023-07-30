use crate::models::constant::{DATABASE_NAME, DATABASE_PATH};
use rusqlite::Connection;

pub fn get_connection(app: tauri::AppHandle) -> rusqlite::Connection {
    let db_path = format!("{}/{}", DATABASE_PATH, DATABASE_NAME);
    let connection_str = app.path_resolver().resolve_resource(db_path).unwrap();
    println!("Connection string ========> {:?}", connection_str);
    let result = match Connection::open(&connection_str) {
        Ok(conn) => {
            println!("Connected");
            conn
        }
        Err(err) => {
            let err_msg = format!(
                "Failed to connect db, {:?}\n database path:{:?}",
                err, connection_str,
            );
            panic!("{}", err_msg)
        }
    };
    result
}
