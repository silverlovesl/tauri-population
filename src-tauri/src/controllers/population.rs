use crate::models::population::Population;
use calamine::{open_workbook, Reader, Xlsx};

#[tauri::command]
pub fn read_excel_data(path: String) -> String {
    const SHEET_NAME: &str = "Data";
    let mut workbook: Xlsx<_> = open_workbook(path).expect("Cannot open file");
    let mut populations: Vec<Population> = vec![];
    if let Some(Ok(range)) = workbook.worksheet_range(SHEET_NAME) {
        let mut row_index = 0;
        for row in range.rows() {
            if row_index == 0 {
                row_index += 1;
                continue;
            }
            let col_code = row.get(0);
            let col_year = row.get(1);
            let col_total = row.get(2);
            let col_male_count = row.get(3);
            let col_female_count = row.get(4);
            let col_rate = row.get(5);

            let population = Population {
                code: col_code.unwrap().to_string(),
                year: col_year.unwrap().to_string().parse::<i32>().unwrap(),
                male: col_male_count.unwrap().to_string().parse::<i32>().unwrap(),
                female: col_female_count
                    .unwrap()
                    .to_string()
                    .parse::<i32>()
                    .unwrap(),
                total: col_total.unwrap().to_string().parse::<i32>().unwrap(),
                rate: col_rate.unwrap().to_string().parse::<f64>().unwrap(),
            };

            populations.push(population);
            row_index += 1;
        }
    }
    // print!("{:?}", populations);
    let serialized_population = serde_json::to_string(&populations).unwrap();
    println!("{:?}", serialized_population);
    serialized_population
}
