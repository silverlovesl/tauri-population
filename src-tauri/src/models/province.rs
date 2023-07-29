use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Province {
    pub id: i32,
    pub country_id: i32,
    pub name: String,
}
