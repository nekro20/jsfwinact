import { Cats } from '/lib/cats.js';

if (Cats.find().count() === 0) {
  const cats = [
    {
      "name": "Nicole",
      "color": [
        "red", "grey"
      ],
      "price": 49502,
      "age": 3,
      "furDensity": "low",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Dorthy",
      "color": [
        "grey"
      ],
      "price": 13672,
      "age": 2,
      "furDensity": "high",
      "sterile": true,
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Johnnie",
      "color": [
        "red"
      ],
      "price": 36981,
      "age": 6,
      "furDensity": "low",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats4.jpg"
    },
    {
      "name": "Alison",
      "color": [
        "white"
      ],
      "price": 45183,
      "age": 8,
      "furDensity": "medium",
      "sterile": false,
      "size": "medium",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Hannah",
      "color": [
        "white",
        "black"
      ],
      "price": 49204,
      "age": 7,
      "furDensity": "low",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats3.jpg"
    },
    {
      "name": "Latonya",
      "color": [
        "white"
      ],
      "price": 25046,
      "age": 11,
      "furDensity": "high",
      "sterile": false,
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Delgado",
      "color": [
        "red"
      ],
      "price": 38155,
      "age": 6,
      "furDensity": "medium",
      "sterile": true,
      "size": "small",
      "image": "/images/cats5.jpg"
    },
    {
      "name": "Payne",
      "color": [
        "grey"
      ],
      "price": 33991,
      "age": 7,
      "furDensity": "low",
      "sterile": false,
      "size": "large",
      "image": "/images/cats9.jpg"
    },
    {
      "name": "Queen",
      "color": [
        "red"
      ],
      "price": 40044,
      "age": 12,
      "furDensity": "low",
      "sterile": true,
      "size": "large",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Ethel",
      "color": [
        "red"
      ],
      "price": 14852,
      "age": 1,
      "furDensity": "high",
      "sterile": true,
      "size": "large",
      "image": "/images/cats3.jpg"
    },
    {
      "name": "Delaney",
      "color": [
        "grey"
      ],
      "price": 36657,
      "age": 8,
      "furDensity": "high",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats9.jpg"
    },
    {
      "name": "Ingram",
      "color": [
        "grey"
      ],
      "price": 7211,
      "age": 4,
      "furDensity": "medium",
      "sterile": false,
      "size": "large",
      "image": "/images/cats9.jpg"
    },
    {
      "name": "Hollie",
      "color": [
        "white",
        "black"
      ],
      "price": 38420,
      "age": 4,
      "furDensity": "low",
      "sterile": true,
      "size": "small",
      "image": "/images/cats4.jpg"
    },
    {
      "name": "Sonya",
      "color": [
        "red"
      ],
      "price": 5023,
      "age": 12,
      "furDensity": "low",
      "sterile": true,
      "size": "large",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Amalia",
      "color": [
        "grey"
      ],
      "price": 1033,
      "age": 12,
      "furDensity": "medium",
      "sterile": false,
      "size": "medium",
      "image": "/images/cats9.jpg"
    },
    {
      "name": "Moody",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 4588,
      "age": 8,
      "furDensity": "low",
      "sterile": true,
      "size": "small",
      "image": "/images/cats1.jpg"
    },
    {
      "name": "Alta",
      "color": [
        "white"
      ],
      "price": 41243,
      "age": 4,
      "furDensity": "medium",
      "sterile": false,
      "size": "small",
      "image": "/images/cats9.jpg"
    },
    {
      "name": "Harriett",
      "color": [
        "white"
      ],
      "price": 26945,
      "age": 4,
      "furDensity": "medium",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats9.jpg"
    },
    {
      "name": "Kimberley",
      "color": [
        "grey"
      ],
      "price": 45027,
      "age": 10,
      "furDensity": "high",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats6.jpg"
    },
    {
      "name": "Terri",
      "color": [
        "white"
      ],
      "price": 23362,
      "age": 5,
      "furDensity": "low",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Greene",
      "color": [
        "white"
      ],
      "price": 42837,
      "age": 11,
      "furDensity": "high",
      "sterile": true,
      "size": "small",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Leach",
      "color": [
        "white"
      ],
      "price": 48982,
      "age": 12,
      "furDensity": "high",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Vasquez",
      "color": [
        "red"
      ],
      "price": 22893,
      "age": 9,
      "furDensity": "low",
      "sterile": false,
      "size": "medium",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Alejandra",
      "color": [
        "white"
      ],
      "price": 48529,
      "age": 5,
      "furDensity": "medium",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Sosa",
      "color": [
        "black"
      ],
      "price": 1354,
      "age": 8,
      "furDensity": "high",
      "sterile": true,
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Johanna",
      "color": [
        "white",
        "black"
      ],
      "price": 42575,
      "age": 2,
      "furDensity": "low",
      "sterile": false,
      "size": "small",
      "image": "/images/cats6.jpg"
    },
    {
      "name": "Marjorie",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 26035,
      "age": 4,
      "furDensity": "high",
      "sterile": true,
      "size": "small",
      "image": "/images/cats4.jpg"
    },
    {
      "name": "Gina",
      "color": [
        "white"
      ],
      "price": 14243,
      "age": 11,
      "furDensity": "high",
      "sterile": false,
      "size": "medium",
      "image": "/images/cats1.jpg"
    },
    {
      "name": "Cantrell",
      "color": [
        "white"
      ],
      "price": 4095,
      "age": 1,
      "furDensity": "low",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats6.jpg"
    },
    {
      "name": "Florence",
      "color": [
        "black"
      ],
      "price": 40576,
      "age": 11,
      "furDensity": "medium",
      "sterile": false,
      "size": "medium",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Huber",
      "color": [
        "grey"
      ],
      "price": 14087,
      "age": 10,
      "furDensity": "low",
      "sterile": false,
      "size": "medium",
      "image": "/images/cats3.jpg"
    },
    {
      "name": "Vinson",
      "color": [
        "red"
      ],
      "price": 30587,
      "age": 12,
      "furDensity": "high",
      "sterile": true,
      "size": "small",
      "image": "/images/cats4.jpg"
    },
    {
      "name": "Stella",
      "color": [
        "red"
      ],
      "price": 34953,
      "age": 1,
      "furDensity": "high",
      "sterile": true,
      "size": "small",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Gladys",
      "color": [
        "red"
      ],
      "price": 32737,
      "age": 4,
      "furDensity": "low",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats5.jpg"
    },
    {
      "name": "Mcconnell",
      "color": [
        "white"
      ],
      "price": 28560,
      "age": 8,
      "furDensity": "low",
      "sterile": false,
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Estrada",
      "color": [
        "black"
      ],
      "price": 27745,
      "age": 6,
      "furDensity": "low",
      "sterile": true,
      "size": "large",
      "image": "/images/cats4.jpg"
    },
    {
      "name": "Lucas",
      "color": [
        "black"
      ],
      "price": 7183,
      "age": 10,
      "furDensity": "high",
      "sterile": true,
      "size": "large",
      "image": "/images/cats1.jpg"
    },
    {
      "name": "Maynard",
      "color": [
        "red"
      ],
      "price": 44080,
      "age": 12,
      "furDensity": "medium",
      "sterile": false,
      "size": "large",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Alice",
      "color": [
        "grey"
      ],
      "price": 23624,
      "age": 5,
      "furDensity": "low",
      "sterile": true,
      "size": "large",
      "image": "/images/cats4.jpg"
    },
    {
      "name": "Edwards",
      "color": [
        "white",
        "black"
      ],
      "price": 20375,
      "age": 6,
      "furDensity": "high",
      "sterile": false,
      "size": "large",
      "image": "/images/cats3.jpg"
    },
    {
      "name": "Bell",
      "color": [
        "white"
      ],
      "price": 38842,
      "age": 11,
      "furDensity": "medium",
      "sterile": true,
      "size": "small",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Lucinda",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 10482,
      "age": 1,
      "furDensity": "medium",
      "sterile": false,
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "name": "Terry",
      "color": [
        "black"
      ],
      "price": 26211,
      "age": 7,
      "furDensity": "low",
      "sterile": true,
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "name": "Melba",
      "color": [
        "white",
        "black"
      ],
      "price": 33728,
      "age": 6,
      "furDensity": "medium",
      "sterile": false,
      "size": "medium",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Mathis",
      "color": [
        "red"
      ],
      "price": 5391,
      "age": 9,
      "furDensity": "medium",
      "sterile": false,
      "size": "medium",
      "image": "/images/cats2.jpg"
    },
    {
      "name": "Hoffman",
      "color": [
        "red"
      ],
      "price": 12597,
      "age": 3,
      "furDensity": "medium",
      "sterile": true,
      "size": "small",
      "image": "/images/cats4.jpg"
    },
    {
      "name": "Ashley",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 20561,
      "age": 7,
      "furDensity": "medium",
      "sterile": false,
      "size": "large",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Gale",
      "color": [
        "white"
      ],
      "price": 13690,
      "age": 6,
      "furDensity": "medium",
      "sterile": true,
      "size": "small",
      "image": "/images/cats1.jpg"
    },
    {
      "name": "Sampson",
      "color": [
        "red"
      ],
      "price": 285,
      "age": 11,
      "furDensity": "high",
      "sterile": true,
      "size": "large",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Lucile",
      "color": [
        "white",
        "black"
      ],
      "price": 8041,
      "age": 1,
      "furDensity": "high",
      "sterile": true,
      "size": "small",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Georgina",
      "color": [
        "white",
        "black"
      ],
      "price": 6044,
      "age": 9,
      "furDensity": "medium",
      "sterile": false,
      "size": "medium",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Bobbi",
      "color": [
        "grey"
      ],
      "price": 41247,
      "age": 6,
      "furDensity": "low",
      "sterile": true,
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "name": "Mcknight",
      "color": [
        "white",
        "black"
      ],
      "price": 28587,
      "age": 11,
      "furDensity": "high",
      "sterile": false,
      "size": "medium",
      "image": "/images/cats1.jpg"
    },
    {
      "name": "Blankenship",
      "color": [
        "white"
      ],
      "price": 44637,
      "age": 9,
      "furDensity": "high",
      "sterile": true,
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Katina",
      "color": [
        "red"
      ],
      "price": 12556,
      "age": 6,
      "furDensity": "low",
      "sterile": false,
      "size": "large",
      "image": "/images/cats6.jpg"
    },
    {
      "name": "Andrea",
      "color": [
        "grey"
      ],
      "price": 33054,
      "age": 8,
      "furDensity": "high",
      "sterile": true,
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "name": "Beverly",
      "color": [
        "black"
      ],
      "price": 13971,
      "age": 10,
      "furDensity": "low",
      "sterile": false,
      "size": "large",
      "image": "/images/cats3.jpg"
    },
    {
      "name": "Celina",
      "color": [
        "white",
        "black"
      ],
      "price": 34652,
      "age": 9,
      "furDensity": "medium",
      "sterile": true,
      "size": "large",
      "image": "/images/cats4.jpg"
    },
    {
      "name": "Sharron",
      "color": [
        "grey"
      ],
      "price": 17044,
      "age": 9,
      "furDensity": "high",
      "sterile": true,
      "size": "small",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Morin",
      "color": [
        "grey"
      ],
      "price": 14542,
      "age": 7,
      "furDensity": "low",
      "sterile": true,
      "size": "large",
      "image": "/images/cats5.jpg"
    },
    {
      "name": "Naomi",
      "color": [
        "black"
      ],
      "price": 15933,
      "age": 1,
      "furDensity": "high",
      "sterile": true,
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "name": "Knapp",
      "color": [
        "grey"
      ],
      "price": 1464,
      "age": 6,
      "furDensity": "medium",
      "sterile": true,
      "size": "large",
      "image": "/images/cats6.jpg"
    },
    {
      "name": "Clark",
      "color": [
        "black"
      ],
      "price": 10823,
      "age": 11,
      "furDensity": "medium",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Dale",
      "color": [
        "white",
        "black"
      ],
      "price": 24780,
      "age": 9,
      "furDensity": "low",
      "sterile": true,
      "size": "large",
      "image": "/images/cats4.jpg"
    },
    {
      "name": "Stacy",
      "color": [
        "red"
      ],
      "price": 21112,
      "age": 7,
      "furDensity": "high",
      "sterile": true,
      "size": "small",
      "image": "/images/cats6.jpg"
    },
    {
      "name": "Gonzales",
      "color": [
        "white",
        "black"
      ],
      "price": 36533,
      "age": 8,
      "furDensity": "low",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats6.jpg"
    },
    {
      "name": "Mcgowan",
      "color": [
        "grey"
      ],
      "price": 24919,
      "age": 5,
      "furDensity": "high",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats5.jpg"
    },
    {
      "name": "Mai",
      "color": [
        "black"
      ],
      "price": 13230,
      "age": 3,
      "furDensity": "medium",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats2.jpg"
    },
    {
      "name": "Angelina",
      "color": [
        "white",
        "black"
      ],
      "price": 16831,
      "age": 10,
      "furDensity": "low",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats5.jpg"
    },
    {
      "name": "Alexander",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 39074,
      "age": 2,
      "furDensity": "high",
      "sterile": true,
      "size": "small",
      "image": "/images/cats3.jpg"
    },
    {
      "name": "Katharine",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 19538,
      "age": 1,
      "furDensity": "medium",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats5.jpg"
    },
    {
      "name": "Hartman",
      "color": [
        "white"
      ],
      "price": 41564,
      "age": 9,
      "furDensity": "medium",
      "sterile": true,
      "size": "small",
      "image": "/images/cats6.jpg"
    },
    {
      "name": "Gardner",
      "color": [
        "white",
        "black"
      ],
      "price": 40384,
      "age": 5,
      "furDensity": "low",
      "sterile": true,
      "size": "small",
      "image": "/images/cats6.jpg"
    },
    {
      "name": "Aguilar",
      "color": [
        "white"
      ],
      "price": 10974,
      "age": 11,
      "furDensity": "low",
      "sterile": true,
      "size": "small",
      "image": "/images/cats6.jpg"
    },
    {
      "name": "Nola",
      "color": [
        "red"
      ],
      "price": 41969,
      "age": 10,
      "furDensity": "high",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats1.jpg"
    },
    {
      "name": "Buck",
      "color": [
        "grey"
      ],
      "price": 6868,
      "age": 7,
      "furDensity": "high",
      "sterile": true,
      "size": "large",
      "image": "/images/cats2.jpg"
    },
    {
      "name": "Suzanne",
      "color": [
        "red"
      ],
      "price": 24934,
      "age": 12,
      "furDensity": "low",
      "sterile": true,
      "size": "large",
      "image": "/images/cats3.jpg"
    },
    {
      "name": "Geraldine",
      "color": [
        "red"
      ],
      "price": 12038,
      "age": 7,
      "furDensity": "low",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats6.jpg"
    },
    {
      "name": "Merritt",
      "color": [
        "black"
      ],
      "price": 34193,
      "age": 10,
      "furDensity": "high",
      "sterile": true,
      "size": "large",
      "image": "/images/cats3.jpg"
    },
    {
      "name": "Angeline",
      "color": [
        "black"
      ],
      "price": 29639,
      "age": 2,
      "furDensity": "high",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats1.jpg"
    },
    {
      "name": "Lilia",
      "color": [
        "white"
      ],
      "price": 42543,
      "age": 3,
      "furDensity": "high",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats4.jpg"
    },
    {
      "name": "Ochoa",
      "color": [
        "grey"
      ],
      "price": 9635,
      "age": 6,
      "furDensity": "low",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Harris",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 36984,
      "age": 10,
      "furDensity": "low",
      "sterile": true,
      "size": "small",
      "image": "/images/cats6.jpg"
    },
    {
      "name": "Deann",
      "color": [
        "red"
      ],
      "price": 14365,
      "age": 11,
      "furDensity": "high",
      "sterile": true,
      "size": "small",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Marks",
      "color": [
        "grey"
      ],
      "price": 49994,
      "age": 11,
      "furDensity": "medium",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats9.jpg"
    },
    {
      "name": "Ruiz",
      "color": [
        "red"
      ],
      "price": 43781,
      "age": 5,
      "furDensity": "low",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats8.jpg"
    },
    {
      "name": "Raymond",
      "color": [
        "white"
      ],
      "price": 386,
      "age": 11,
      "furDensity": "low",
      "sterile": true,
      "size": "small",
      "image": "/images/cats9.jpg"
    },
    {
      "name": "Charlene",
      "color": [
        "black"
      ],
      "price": 36725,
      "age": 11,
      "furDensity": "medium",
      "sterile": true,
      "size": "small",
      "image": "/images/cats3.jpg"
    },
    {
      "name": "Glover",
      "color": [
        "grey"
      ],
      "price": 10856,
      "age": 9,
      "furDensity": "medium",
      "sterile": true,
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Sharlene",
      "color": [
        "white"
      ],
      "price": 17243,
      "age": 6,
      "furDensity": "high",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats5.jpg"
    },
    {
      "name": "Christi",
      "color": [
        "red"
      ],
      "price": 9588,
      "age": 7,
      "furDensity": "low",
      "sterile": true,
      "size": "small",
      "image": "/images/cats9.jpg"
    },
    {
      "name": "Coffey",
      "color": [
        "white",
        "black"
      ],
      "price": 6292,
      "age": 11,
      "furDensity": "high",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats9.jpg"
    },
    {
      "name": "Mayo",
      "color": [
        "white",
        "black"
      ],
      "price": 537,
      "age": 3,
      "furDensity": "low",
      "sterile": true,
      "size": "large",
      "image": "/images/cats1.jpg"
    },
    {
      "name": "Steele",
      "color": [
        "black"
      ],
      "price": 6764,
      "age": 6,
      "furDensity": "high",
      "sterile": true,
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "name": "Lenore",
      "color": [
        "white",
        "black"
      ],
      "price": 37904,
      "age": 7,
      "furDensity": "low",
      "sterile": true,
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "name": "Huffman",
      "color": [
        "white"
      ],
      "price": 45438,
      "age": 1,
      "furDensity": "medium",
      "sterile": true,
      "size": "small",
      "image": "/images/cats5.jpg"
    },
    {
      "name": "Laurel",
      "color": [
        "black"
      ],
      "price": 18793,
      "age": 4,
      "furDensity": "low",
      "sterile": true,
      "size": "medium",
      "image": "/images/cats3.jpg"
    },
    {
      "name": "Cohen",
      "color": [
        "white"
      ],
      "price": 48319,
      "age": 5,
      "furDensity": "low",
      "sterile": true,
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "name": "Melisa",
      "color": [
        "white"
      ],
      "price": 28311,
      "age": 6,
      "furDensity": "low",
      "sterile": true,
      "size": "large",
      "image": "/images/cats2.jpg"
    },
    {
      "name": "Dorothea",
      "color": [
        "white"
      ],
      "price": 20840,
      "age": 12,
      "furDensity": "low",
      "sterile": true,
      "size": "large",
      "image": "/images/cats8.jpg"
    }
  ];

  cats.forEach((cat) => Cats.insert(cat));
}