// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod controllers;
mod models;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            controllers::population_controller::read_excel_data,
            controllers::country_controller::fetch_countries,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
