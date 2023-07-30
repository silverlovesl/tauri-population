use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Province {
    #[serde(rename = "id")]
    pub id: i32,
    #[serde(rename = "countryId")]
    pub country_id: i32,
    #[serde(rename = "name")]
    pub name: String,
}
