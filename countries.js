const countries = [
  {
    "id": 1,
    "country_code": "AF",
    "country_name": "Afghanistan"
  },
  {
    "id": 2,
    "country_code": "AX",
    "country_name": "Aland Islands"
  },
  {
    "id": 3,
    "country_code": "AL",
    "country_name": "Albania"
  },
  {
    "id": 4,
    "country_code": "DZ",
    "country_name": "Algeria"
  },
  {
    "id": 5,
    "country_code": "AS",
    "country_name": "American Samoa"
  },
  {
    "id": 6,
    "country_code": "AD",
    "country_name": "Andorra"
  },
  {
    "id": 7,
    "country_code": "AO",
    "country_name": "Angola"
  },
  {
    "id": 8,
    "country_code": "AI",
    "country_name": "Anguilla"
  },
  {
    "id": 9,
    "country_code": "AQ",
    "country_name": "Antarctica"
  },
  {
    "id": 10,
    "country_code": "AG",
    "country_name": "Antigua and Barbuda"
  },
  {
    "id": 11,
    "country_code": "AR",
    "country_name": "Argentina"
  },
  {
    "id": 12,
    "country_code": "AM",
    "country_name": "Armenia"
  },
  {
    "id": 13,
    "country_code": "AW",
    "country_name": "Aruba"
  },
  {
    "id": 14,
    "country_code": "AU",
    "country_name": "Australia"
  },
  {
    "id": 15,
    "country_code": "AT",
    "country_name": "Austria"
  },
  {
    "id": 16,
    "country_code": "AZ",
    "country_name": "Azerbaijan"
  },
  {
    "id": 17,
    "country_code": "ST",
    "country_name": "Sao Tome and Principe"
  },
  {
    "id": 18,
    "country_code": "BS",
    "country_name": "Bahamas"
  },
  {
    "id": 19,
    "country_code": "BH",
    "country_name": "Bahrain"
  },
  {
    "id": 20,
    "country_code": "BD",
    "country_name": "Bangladesh"
  },
  {
    "id": 21,
    "country_code": "BB",
    "country_name": "Barbados"
  },
  {
    "id": 22,
    "country_code": "BY",
    "country_name": "Belarus"
  },
  {
    "id": 23,
    "country_code": "BE",
    "country_name": "Belgium"
  },
  {
    "id": 24,
    "country_code": "BZ",
    "country_name": "Belize"
  },
  {
    "id": 25,
    "country_code": "BJ",
    "country_name": "Benin"
  },
  {
    "id": 26,
    "country_code": "BT",
    "country_name": "Bhutan"
  },
  {
    "id": 27,
    "country_code": "BO",
    "country_name": "Bolivia"
  },
  {
    "id": 28,
    "country_code": "BA",
    "country_name": "Bosnia and Herzegovina"
  },
  {
    "id": 29,
    "country_code": "BW",
    "country_name": "Botswana"
  },
  {
    "id": 30,
    "country_code": "BV",
    "country_name": "Bouvet Island"
  },
  {
    "id": 31,
    "country_code": "BR",
    "country_name": "Brazil"
  },
  {
    "id": 32,
    "country_code": "VG",
    "country_name": "British Virgin Islands"
  },
  {
    "id": 33,
    "country_code": "IO",
    "country_name": "British Indian Ocean Territory"
  },
  {
    "id": 34,
    "country_code": "BN",
    "country_name": "Brunei Darussalam"
  },
  {
    "id": 35,
    "country_code": "BG",
    "country_name": "Bulgaria"
  },
  {
    "id": 36,
    "country_code": "BF",
    "country_name": "Burkina Faso"
  },
  {
    "id": 37,
    "country_code": "BI",
    "country_name": "Burundi"
  },
  {
    "id": 38,
    "country_code": "KH",
    "country_name": "Cambodia"
  },
  {
    "id": 39,
    "country_code": "CM",
    "country_name": "Cameroon"
  },
  {
    "id": 40,
    "country_code": "CA",
    "country_name": "Canada"
  },
  {
    "id": 41,
    "country_code": "CV",
    "country_name": "Cape Verde"
  },
  {
    "id": 42,
    "country_code": "KY",
    "country_name": "Cayman Islands"
  },
  {
    "id": 43,
    "country_code": "CF",
    "country_name": "Central African Republic"
  },
  {
    "id": 44,
    "country_code": "TD",
    "country_name": "Chad"
  },
  {
    "id": 45,
    "country_code": "CL",
    "country_name": "Chile"
  },
  {
    "id": 46,
    "country_code": "CN",
    "country_name": "China"
  },
  {
    "id": 47,
    "country_code": "HK",
    "country_name": "Hong Kong, SAR China"
  },
  {
    "id": 48,
    "country_code": "CR",
    "country_name": "Costa Rica"
  },
  {
    "id": 49,
    "country_code": "MO",
    "country_name": "Macao, SAR China"
  },
  {
    "id": 50,
    "country_code": "CX",
    "country_name": "Christmas Island"
  },
  {
    "id": 51,
    "country_code": "CC",
    "country_name": "Cocos (Keeling) Islands"
  },
  {
    "id": 52,
    "country_code": "CO",
    "country_name": "Colombia"
  },
  {
    "id": 53,
    "country_code": "KM",
    "country_name": "Comoros"
  },
  {
    "id": 54,
    "country_code": "CD",
    "country_name": "Congo, (Kinshasa)"
  },
  {
    "id": 55,
    "country_code": "CK",
    "country_name": "Cook Islands"
  },
  {
    "id": 56,
    "country_code": "CI",
    "country_name": "Côte d'Ivoire"
  },
  {
    "id": 57,
    "country_code": "HR",
    "country_name": "Croatia"
  },
  {
    "id": 58,
    "country_code": "CU",
    "country_name": "Cuba"
  },
  {
    "id": 59,
    "country_code": "CY",
    "country_name": "Cyprus"
  },
  {
    "id": 60,
    "country_code": "CZ",
    "country_name": "Czech Republic"
  },
  {
    "id": 61,
    "country_code": "DK",
    "country_name": "Denmark"
  },
  {
    "id": 62,
    "country_code": "DJ",
    "country_name": "Djibouti"
  },
  {
    "id": 63,
    "country_code": "DM",
    "country_name": "Dominica"
  },
  {
    "id": 64,
    "country_code": "DO",
    "country_name": "Dominican Republic"
  },
  {
    "id": 65,
    "country_code": "EC",
    "country_name": "Ecuador"
  },
  {
    "id": 66,
    "country_code": "EG",
    "country_name": "Egypt"
  },
  {
    "id": 67,
    "country_code": "SV",
    "country_name": "El Salvador"
  },
  {
    "id": 68,
    "country_code": "GQ",
    "country_name": "Equatorial Guinea"
  },
  {
    "id": 69,
    "country_code": "ER",
    "country_name": "Eritrea"
  },
  {
    "id": 70,
    "country_code": "EE",
    "country_name": "Estonia"
  },
  {
    "id": 71,
    "country_code": "ET",
    "country_name": "Ethiopia"
  },
  {
    "id": 72,
    "country_code": "FK",
    "country_name": "Falkland Islands (Malvinas)"
  },
  {
    "id": 73,
    "country_code": "FO",
    "country_name": "Faroe Islands"
  },
  {
    "id": 74,
    "country_code": "FJ",
    "country_name": "Fiji"
  },
  {
    "id": 75,
    "country_code": "FI",
    "country_name": "Finland"
  },
  {
    "id": 76,
    "country_code": "FR",
    "country_name": "France"
  },
  {
    "id": 77,
    "country_code": "GF",
    "country_name": "French Guiana"
  },
  {
    "id": 78,
    "country_code": "PF",
    "country_name": "French Polynesia"
  },
  {
    "id": 79,
    "country_code": "TF",
    "country_name": "French Southern Territories"
  },
  {
    "id": 80,
    "country_code": "GA",
    "country_name": "Gabon"
  },
  {
    "id": 81,
    "country_code": "GM",
    "country_name": "Gambia"
  },
  {
    "id": 82,
    "country_code": "GE",
    "country_name": "Georgia"
  },
  {
    "id": 83,
    "country_code": "DE",
    "country_name": "Germany"
  },
  {
    "id": 84,
    "country_code": "GH",
    "country_name": "Ghana"
  },
  {
    "id": 85,
    "country_code": "GI",
    "country_name": "Gibraltar"
  },
  {
    "id": 86,
    "country_code": "GR",
    "country_name": "Greece"
  },
  {
    "id": 87,
    "country_code": "GL",
    "country_name": "Greenland"
  },
  {
    "id": 88,
    "country_code": "GD",
    "country_name": "Grenada"
  },
  {
    "id": 89,
    "country_code": "GP",
    "country_name": "Guadeloupe"
  },
  {
    "id": 90,
    "country_code": "GU",
    "country_name": "Guam"
  },
  {
    "id": 91,
    "country_code": "GT",
    "country_name": "Guatemala"
  },
  {
    "id": 92,
    "country_code": "GG",
    "country_name": "Guernsey"
  },
  {
    "id": 93,
    "country_code": "GN",
    "country_name": "Guinea"
  },
  {
    "id": 94,
    "country_code": "GW",
    "country_name": "Guinea-Bissau"
  },
  {
    "id": 95,
    "country_code": "GY",
    "country_name": "Guyana"
  },
  {
    "id": 96,
    "country_code": "HT",
    "country_name": "Haiti"
  },
  {
    "id": 97,
    "country_code": "HM",
    "country_name": "Heard and Mcdonald Islands"
  },
  {
    "id": 98,
    "country_code": "VA",
    "country_name": "Holy See (Vatican City State)"
  },
  {
    "id": 99,
    "country_code": "HN",
    "country_name": "Honduras"
  },
  {
    "id": 100,
    "country_code": "HU",
    "country_name": "Hungary"
  },
  {
    "id": 101,
    "country_code": "IS",
    "country_name": "Iceland"
  },
  {
    "id": 102,
    "country_code": "FM",
    "country_name": "Micronesia, Federated States of"
  },
  {
    "id": 103,
    "country_code": "RE",
    "country_name": "Réunion"
  },
  {
    "id": 104,
    "country_code": "ID",
    "country_name": "Indonesia"
  },
  {
    "id": 105,
    "country_code": "IR",
    "country_name": "Iran, Islamic Republic of"
  },
  {
    "id": 106,
    "country_code": "IQ",
    "country_name": "Iraq"
  },
  {
    "id": 107,
    "country_code": "IE",
    "country_name": "Ireland"
  },
  {
    "id": 108,
    "country_code": "IM",
    "country_name": "Isle of Man"
  },
  {
    "id": 109,
    "country_code": "IL",
    "country_name": "Israel"
  },
  {
    "id": 110,
    "country_code": "IT",
    "country_name": "Italy"
  },
  {
    "id": 111,
    "country_code": "JM",
    "country_name": "Jamaica"
  },
  {
    "id": 112,
    "country_code": "JP",
    "country_name": "Japan"
  },
  {
    "id": 113,
    "country_code": "JE",
    "country_name": "Jersey"
  },
  {
    "id": 114,
    "country_code": "JO",
    "country_name": "Jordan"
  },
  {
    "id": 115,
    "country_code": "MD",
    "country_name": "Moldova"
  },
  {
    "id": 116,
    "country_code": "KZ",
    "country_name": "Kazakhstan"
  },
  {
    "id": 117,
    "country_code": "KE",
    "country_name": "Kenya"
  },
  {
    "id": 118,
    "country_code": "KI",
    "country_name": "Kiribati"
  },
  {
    "id": 119,
    "country_code": "KP",
    "country_name": "Korea (North)"
  },
  {
    "id": 120,
    "country_code": "KR",
    "country_name": "Korea (South)"
  },
  {
    "id": 121,
    "country_code": "KW",
    "country_name": "Kuwait"
  },
  {
    "id": 122,
    "country_code": "KG",
    "country_name": "Kyrgyzstan"
  },
  {
    "id": 123,
    "country_code": "LA",
    "country_name": "Lao PDR"
  },
  {
    "id": 124,
    "country_code": "LV",
    "country_name": "Latvia"
  },
  {
    "id": 125,
    "country_code": "LB",
    "country_name": "Lebanon"
  },
  {
    "id": 126,
    "country_code": "LS",
    "country_name": "Lesotho"
  },
  {
    "id": 127,
    "country_code": "LR",
    "country_name": "Liberia"
  },
  {
    "id": 128,
    "country_code": "LY",
    "country_name": "Libya"
  },
  {
    "id": 129,
    "country_code": "LI",
    "country_name": "Liechtenstein"
  },
  {
    "id": 130,
    "country_code": "LT",
    "country_name": "Lithuania"
  },
  {
    "id": 131,
    "country_code": "LU",
    "country_name": "Luxembourg"
  },
  {
    "id": 132,
    "country_code": "MK",
    "country_name": "Macedonia, Republic of"
  },
  {
    "id": 133,
    "country_code": "MG",
    "country_name": "Madagascar"
  },
  {
    "id": 134,
    "country_code": "MW",
    "country_name": "Malawi"
  },
  {
    "id": 135,
    "country_code": "MY",
    "country_name": "Malaysia"
  },
  {
    "id": 136,
    "country_code": "MV",
    "country_name": "Maldives"
  },
  {
    "id": 137,
    "country_code": "BM",
    "country_name": "Bermuda"
  },
  {
    "id": 138,
    "country_code": "ML",
    "country_name": "Mali"
  },
  {
    "id": 139,
    "country_code": "MT",
    "country_name": "Malta"
  },
  {
    "id": 140,
    "country_code": "MH",
    "country_name": "Marshall Islands"
  },
  {
    "id": 141,
    "country_code": "MQ",
    "country_name": "Martinique"
  },
  {
    "id": 142,
    "country_code": "MR",
    "country_name": "Mauritania"
  },
  {
    "id": 143,
    "country_code": "MU",
    "country_name": "Mauritius"
  },
  {
    "id": 144,
    "country_code": "YT",
    "country_name": "Mayotte"
  },
  {
    "id": 145,
    "country_code": "MX",
    "country_name": "Mexico"
  },
  {
    "id": 146,
    "country_code": "MC",
    "country_name": "Monaco"
  },
  {
    "id": 147,
    "country_code": "MN",
    "country_name": "Mongolia"
  },
  {
    "id": 148,
    "country_code": "ME",
    "country_name": "Montenegro"
  },
  {
    "id": 149,
    "country_code": "MS",
    "country_name": "Montserrat"
  },
  {
    "id": 150,
    "country_code": "MA",
    "country_name": "Morocco"
  },
  {
    "id": 151,
    "country_code": "MZ",
    "country_name": "Mozambique"
  },
  {
    "id": 152,
    "country_code": "MM",
    "country_name": "Myanmar"
  },
  {
    "id": 153,
    "country_code": "NA",
    "country_name": "Namibia"
  },
  {
    "id": 154,
    "country_code": "NR",
    "country_name": "Nauru"
  },
  {
    "id": 155,
    "country_code": "NP",
    "country_name": "Nepal"
  },
  {
    "id": 156,
    "country_code": "NL",
    "country_name": "Netherlands"
  },
  {
    "id": 157,
    "country_code": "AN",
    "country_name": "Netherlands Antilles"
  },
  {
    "id": 158,
    "country_code": "NC",
    "country_name": "New Caledonia"
  },
  {
    "id": 159,
    "country_code": "NZ",
    "country_name": "New Zealand"
  },
  {
    "id": 160,
    "country_code": "NI",
    "country_name": "Nicaragua"
  },
  {
    "id": 161,
    "country_code": "NE",
    "country_name": "Niger"
  },
  {
    "id": 162,
    "country_code": "NG",
    "country_name": "Nigeria"
  },
  {
    "id": 163,
    "country_code": "NU",
    "country_name": "Niue"
  },
  {
    "id": 164,
    "country_code": "NF",
    "country_name": "Norfolk Island"
  },
  {
    "id": 165,
    "country_code": "MP",
    "country_name": "Northern Mariana Islands"
  },
  {
    "id": 166,
    "country_code": "NO",
    "country_name": "Norway"
  },
  {
    "id": 167,
    "country_code": "OM",
    "country_name": "Oman"
  },
  {
    "id": 168,
    "country_code": "PK",
    "country_name": "Pakistan"
  },
  {
    "id": 169,
    "country_code": "PW",
    "country_name": "Palau"
  },
  {
    "id": 170,
    "country_code": "PS",
    "country_name": "Palestinian Territory"
  },
  {
    "id": 171,
    "country_code": "PA",
    "country_name": "Panama"
  },
  {
    "id": 172,
    "country_code": "PG",
    "country_name": "Papua New Guinea"
  },
  {
    "id": 173,
    "country_code": "PY",
    "country_name": "Paraguay"
  },
  {
    "id": 174,
    "country_code": "PE",
    "country_name": "Peru"
  },
  {
    "id": 175,
    "country_code": "PH",
    "country_name": "Philippines"
  },
  {
    "id": 176,
    "country_code": "PN",
    "country_name": "Pitcairn"
  },
  {
    "id": 177,
    "country_code": "PT",
    "country_name": "Portugal"
  },
  {
    "id": 178,
    "country_code": "PR",
    "country_name": "Puerto Rico"
  },
  {
    "id": 179,
    "country_code": "QA",
    "country_name": "Qatar"
  },
  {
    "id": 180,
    "country_code": "RO",
    "country_name": "Romania"
  },
  {
    "id": 181,
    "country_code": "RU",
    "country_name": "Russian Federation"
  },
  {
    "id": 182,
    "country_code": "RW",
    "country_name": "Rwanda"
  },
  {
    "id": 183,
    "country_code": "BL",
    "country_name": "Saint-Barthélemy"
  },
  {
    "id": 184,
    "country_code": "SH",
    "country_name": "Saint Helena"
  },
  {
    "id": 185,
    "country_code": "KN",
    "country_name": "Saint Kitts and Nevis"
  },
  {
    "id": 186,
    "country_code": "LC",
    "country_name": "Saint Lucia"
  },
  {
    "id": 187,
    "country_code": "MF",
    "country_name": "Saint-Martin (French part)"
  },
  {
    "id": 188,
    "country_code": "PM",
    "country_name": "Saint Pierre and Miquelon"
  },
  {
    "id": 189,
    "country_code": "VC",
    "country_name": "Saint Vincent and Grenadines"
  },
  {
    "id": 190,
    "country_code": "WS",
    "country_name": "Samoa"
  },
  {
    "id": 191,
    "country_code": "SM",
    "country_name": "San Marino"
  },
  {
    "id": 192,
    "country_code": "SA",
    "country_name": "Saudi Arabia"
  },
  {
    "id": 193,
    "country_code": "SN",
    "country_name": "Senegal"
  },
  {
    "id": 194,
    "country_code": "RS",
    "country_name": "Serbia"
  },
  {
    "id": 195,
    "country_code": "SC",
    "country_name": "Seychelles"
  },
  {
    "id": 196,
    "country_code": "SL",
    "country_name": "Sierra Leone"
  },
  {
    "id": 197,
    "country_code": "SG",
    "country_name": "Singapore"
  },
  {
    "id": 198,
    "country_code": "SK",
    "country_name": "Slovakia"
  },
  {
    "id": 199,
    "country_code": "SI",
    "country_name": "Slovenia"
  },
  {
    "id": 200,
    "country_code": "SB",
    "country_name": "Solomon Islands"
  },
  {
    "id": 201,
    "country_code": "SO",
    "country_name": "Somalia"
  },
  {
    "id": 202,
    "country_code": "ZA",
    "country_name": "South Africa"
  },
  {
    "id": 203,
    "country_code": "GS",
    "country_name": "South Georgia and the South Sandwich Islands"
  },
  {
    "id": 204,
    "country_code": "SS",
    "country_name": "South Sudan"
  },
  {
    "id": 205,
    "country_code": "ES",
    "country_name": "Spain"
  },
  {
    "id": 206,
    "country_code": "LK",
    "country_name": "Sri Lanka"
  },
  {
    "id": 207,
    "country_code": "SD",
    "country_name": "Sudan"
  },
  {
    "id": 208,
    "country_code": "SR",
    "country_name": "Suriname"
  },
  {
    "id": 209,
    "country_code": "SJ",
    "country_name": "Svalbard and Jan Mayen Islands"
  },
  {
    "id": 210,
    "country_code": "SZ",
    "country_name": "Swaziland"
  },
  {
    "id": 211,
    "country_code": "SE",
    "country_name": "Sweden"
  },
  {
    "id": 212,
    "country_code": "CH",
    "country_name": "Switzerland"
  },
  {
    "id": 213,
    "country_code": "SY",
    "country_name": "Syrian Arab Republic (Syria)"
  },
  {
    "id": 214,
    "country_code": "TW",
    "country_name": "Taiwan, Republic of China"
  },
  {
    "id": 215,
    "country_code": "TJ",
    "country_name": "Tajikistan"
  },
  {
    "id": 216,
    "country_code": "TZ",
    "country_name": "Tanzania, United Republic of"
  },
  {
    "id": 217,
    "country_code": "TH",
    "country_name": "Thailand"
  },
  {
    "id": 218,
    "country_code": "IN",
    "country_name": "India"
  },
  {
    "id": 219,
    "country_code": "CG",
    "country_name": "Congo (Brazzaville)"
  },
  {
    "id": 220,
    "country_code": "PL",
    "country_name": "Poland"
  },
  {
    "id": 221,
    "country_code": "TL",
    "country_name": "Timor-Leste"
  },
  {
    "id": 222,
    "country_code": "TG",
    "country_name": "Togo"
  },
  {
    "id": 223,
    "country_code": "TK",
    "country_name": "Tokelau"
  },
  {
    "id": 224,
    "country_code": "TO",
    "country_name": "Tonga"
  },
  {
    "id": 225,
    "country_code": "TT",
    "country_name": "Trinidad and Tobago"
  },
  {
    "id": 226,
    "country_code": "TN",
    "country_name": "Tunisia"
  },
  {
    "id": 227,
    "country_code": "TR",
    "country_name": "Turkey"
  },
  {
    "id": 228,
    "country_code": "TM",
    "country_name": "Turkmenistan"
  },
  {
    "id": 229,
    "country_code": "TC",
    "country_name": "Turks and Caicos Islands"
  },
  {
    "id": 230,
    "country_code": "TV",
    "country_name": "Tuvalu"
  },
  {
    "id": 231,
    "country_code": "UG",
    "country_name": "Uganda"
  },
  {
    "id": 232,
    "country_code": "UA",
    "country_name": "Ukraine"
  },
  {
    "id": 233,
    "country_code": "AE",
    "country_name": "United Arab Emirates"
  },
  {
    "id": 234,
    "country_code": "GB",
    "country_name": "United Kingdom"
  },
  {
    "id": 235,
    "country_code": "US",
    "country_name": "United States of America"
  },
  {
    "id": 236,
    "country_code": "UM",
    "country_name": "US Minor Outlying Islands"
  },
  {
    "id": 237,
    "country_code": "UY",
    "country_name": "Uruguay"
  },
  {
    "id": 238,
    "country_code": "UZ",
    "country_name": "Uzbekistan"
  },
  {
    "id": 239,
    "country_code": "VU",
    "country_name": "Vanuatu"
  },
  {
    "id": 240,
    "country_code": "VE",
    "country_name": "Venezuela (Bolivarian Republic)"
  },
  {
    "id": 241,
    "country_code": "VN",
    "country_name": "Viet Nam"
  },
  {
    "id": 242,
    "country_code": "VI",
    "country_name": "Virgin Islands, US"
  },
  {
    "id": 243,
    "country_code": "WF",
    "country_name": "Wallis and Futuna Islands"
  },
  {
    "id": 244,
    "country_code": "EH",
    "country_name": "Western Sahara"
  },
  {
    "id": 245,
    "country_code": "YE",
    "country_name": "Yemen"
  },
  {
    "id": 246,
    "country_code": "ZM",
    "country_name": "Zambia"
  },
  {
    "id": 247,
    "country_code": "ZW",
    "country_name": "Zimbabwe"
  }
];

export default countries;