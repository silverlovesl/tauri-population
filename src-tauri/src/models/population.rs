use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Population {
    pub code: String,
    pub year: i32,
    pub male: i32,
    pub female: i32,
    pub total: i32,
    pub rate: f64,
}
