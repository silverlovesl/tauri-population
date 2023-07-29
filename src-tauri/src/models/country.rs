use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Country {
    #[serde(rename = "id")]
    pub id: i32,
    #[serde(rename = "name")]
    pub name: String,
    #[serde(rename = "enName")]
    pub en_name: String,
    #[serde(rename = "countryCode")]
    pub country_code: String,
    #[serde(rename = "languageCode")]
    pub language_code: String,
}

impl Default for Country {
    fn default() -> Self {
        Country {
            id: 0,
            name: String::new(),
            en_name: String::new(),
            country_code: String::new(),
            language_code: String::new(),
        }
    }
}
