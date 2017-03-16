import { Cats } from '/lib/cats.js';

if (Cats.find().count() === 0) {
  const cats = [
    {
      "id": "58b445f7f904c3122231d837",
      "name": "Nicole",
      "color": [
        "red"
      ],
      "price": 49502,
      "age": 3,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f701f2caf3e9ae3271",
      "name": "Dorthy",
      "color": [
        "gray"
      ],
      "price": 13672,
      "age": 2,
      "furDensity": "high",
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f7488fd6e69d0698d8",
      "name": "Johnnie",
      "color": [
        "red"
      ],
      "price": 36981,
      "age": 6,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats4.jpg"
    },
    {
      "id": "58b445f769df6739cbdb7ce5",
      "name": "Alison",
      "color": [
        "white"
      ],
      "price": 45183,
      "age": 8,
      "furDensity": "medium",
      "size": "medium",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f740208637e240b45a",
      "name": "Hannah",
      "color": [
        "white",
        "black"
      ],
      "price": 49204,
      "age": 7,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats3.jpg"
    },
    {
      "id": "58b445f713600dd2fe48f77c",
      "name": "Latonya",
      "color": [
        "white"
      ],
      "price": 25046,
      "age": 11,
      "furDensity": "high",
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f77c38ac99320d1a06",
      "name": "Delgado",
      "color": [
        "red"
      ],
      "price": 38155,
      "age": 6,
      "furDensity": "medium",
      "size": "small",
      "image": "/images/cats5.jpg"
    },
    {
      "id": "58b445f755d10d69e46c7f23",
      "name": "Payne",
      "color": [
        "gray"
      ],
      "price": 33991,
      "age": 7,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats9.jpg"
    },
    {
      "id": "58b445f7399a35d2a947745f",
      "name": "Queen",
      "color": [
        "red"
      ],
      "price": 40044,
      "age": 12,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f77ad237c2ce6d01c4",
      "name": "Ethel",
      "color": [
        "red"
      ],
      "price": 14852,
      "age": 1,
      "furDensity": "high",
      "size": "large",
      "image": "/images/cats3.jpg"
    },
    {
      "id": "58b445f782bf6a5bddcfb1c3",
      "name": "Delaney",
      "color": [
        "gray"
      ],
      "price": 36657,
      "age": 8,
      "furDensity": "high",
      "size": "medium",
      "image": "/images/cats9.jpg"
    },
    {
      "id": "58b445f7c57f1ff3a2bfa88f",
      "name": "Ingram",
      "color": [
        "gray"
      ],
      "price": 7211,
      "age": 4,
      "furDensity": "medium",
      "size": "large",
      "image": "/images/cats9.jpg"
    },
    {
      "id": "58b445f7ded10ce3e7ee0a06",
      "name": "Hollie",
      "color": [
        "white",
        "black"
      ],
      "price": 38420,
      "age": 4,
      "furDensity": "low",
      "size": "small",
      "image": "/images/cats4.jpg"
    },
    {
      "id": "58b445f7820eb67c5d57abee",
      "name": "Sonya",
      "color": [
        "red"
      ],
      "price": 5023,
      "age": 12,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f711e598774016b16a",
      "name": "Amalia",
      "color": [
        "gray"
      ],
      "price": 1033,
      "age": 12,
      "furDensity": "medium",
      "size": "medium",
      "image": "/images/cats9.jpg"
    },
    {
      "id": "58b445f74af50996676ee092",
      "name": "Moody",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 4588,
      "age": 8,
      "furDensity": "low",
      "size": "small",
      "image": "/images/cats1.jpg"
    },
    {
      "id": "58b445f746ed7c19bb3261b7",
      "name": "Alta",
      "color": [
        "white"
      ],
      "price": 41243,
      "age": 4,
      "furDensity": "medium",
      "size": "small",
      "image": "/images/cats9.jpg"
    },
    {
      "id": "58b445f7ccadccbab1c3e1c6",
      "name": "Harriett",
      "color": [
        "white"
      ],
      "price": 26945,
      "age": 4,
      "furDensity": "medium",
      "size": "medium",
      "image": "/images/cats9.jpg"
    },
    {
      "id": "58b445f776fb6b2623d4a219",
      "name": "Kimberley",
      "color": [
        "gray"
      ],
      "price": 45027,
      "age": 10,
      "furDensity": "high",
      "size": "medium",
      "image": "/images/cats6.jpg"
    },
    {
      "id": "58b445f741bd0279401f2f60",
      "name": "Terri",
      "color": [
        "white"
      ],
      "price": 23362,
      "age": 5,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f7657fb0508bd3ed6f",
      "name": "Greene",
      "color": [
        "white"
      ],
      "price": 42837,
      "age": 11,
      "furDensity": "high",
      "size": "small",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f71dfaa382e7e30df2",
      "name": "Leach",
      "color": [
        "white"
      ],
      "price": 48982,
      "age": 12,
      "furDensity": "high",
      "size": "medium",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f761510fffae4fb637",
      "name": "Vasquez",
      "color": [
        "red"
      ],
      "price": 22893,
      "age": 9,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f7413a62d896f31af0",
      "name": "Alejandra",
      "color": [
        "white"
      ],
      "price": 48529,
      "age": 5,
      "furDensity": "medium",
      "size": "medium",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f7887b562b64c7feb5",
      "name": "Sosa",
      "color": [
        "black"
      ],
      "price": 1354,
      "age": 8,
      "furDensity": "high",
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f7eb2967f4ab2af971",
      "name": "Johanna",
      "color": [
        "white",
        "black"
      ],
      "price": 42575,
      "age": 2,
      "furDensity": "low",
      "size": "small",
      "image": "/images/cats6.jpg"
    },
    {
      "id": "58b445f720df501982ce9fac",
      "name": "Marjorie",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 26035,
      "age": 4,
      "furDensity": "high",
      "size": "small",
      "image": "/images/cats4.jpg"
    },
    {
      "id": "58b445f7a945d1c78063c8d6",
      "name": "Gina",
      "color": [
        "white"
      ],
      "price": 14243,
      "age": 11,
      "furDensity": "high",
      "size": "medium",
      "image": "/images/cats1.jpg"
    },
    {
      "id": "58b445f7a0c29d78faa0ff03",
      "name": "Cantrell",
      "color": [
        "white"
      ],
      "price": 4095,
      "age": 1,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats6.jpg"
    },
    {
      "id": "58b445f7d1e24934f19d0135",
      "name": "Florence",
      "color": [
        "black"
      ],
      "price": 40576,
      "age": 11,
      "furDensity": "medium",
      "size": "medium",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f79b0464d983208557",
      "name": "Huber",
      "color": [
        "gray"
      ],
      "price": 14087,
      "age": 10,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats3.jpg"
    },
    {
      "id": "58b445f7e9b7b346fdccfaaa",
      "name": "Vinson",
      "color": [
        "red"
      ],
      "price": 30587,
      "age": 12,
      "furDensity": "high",
      "size": "small",
      "image": "/images/cats4.jpg"
    },
    {
      "id": "58b445f7162d7b778f893719",
      "name": "Stella",
      "color": [
        "red"
      ],
      "price": 34953,
      "age": 1,
      "furDensity": "high",
      "size": "small",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f7e230a53347630e3d",
      "name": "Gladys",
      "color": [
        "red"
      ],
      "price": 32737,
      "age": 4,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats5.jpg"
    },
    {
      "id": "58b445f7714161c6765db820",
      "name": "Mcconnell",
      "color": [
        "white"
      ],
      "price": 28560,
      "age": 8,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f7ea3837b207591b58",
      "name": "Estrada",
      "color": [
        "black"
      ],
      "price": 27745,
      "age": 6,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats4.jpg"
    },
    {
      "id": "58b445f7988b4be35da95305",
      "name": "Lucas",
      "color": [
        "black"
      ],
      "price": 7183,
      "age": 10,
      "furDensity": "high",
      "size": "large",
      "image": "/images/cats1.jpg"
    },
    {
      "id": "58b445f701f7d2ea2e0815ff",
      "name": "Maynard",
      "color": [
        "red"
      ],
      "price": 44080,
      "age": 12,
      "furDensity": "medium",
      "size": "large",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f7c78ad9afdc66612d",
      "name": "Alice",
      "color": [
        "gray"
      ],
      "price": 23624,
      "age": 5,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats4.jpg"
    },
    {
      "id": "58b445f74da3ff0adef58575",
      "name": "Edwards",
      "color": [
        "white",
        "black"
      ],
      "price": 20375,
      "age": 6,
      "furDensity": "high",
      "size": "large",
      "image": "/images/cats3.jpg"
    },
    {
      "id": "58b445f768743b7137e14973",
      "name": "Bell",
      "color": [
        "white"
      ],
      "price": 38842,
      "age": 11,
      "furDensity": "medium",
      "size": "small",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f712e93d99ea25ccc9",
      "name": "Lucinda",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 10482,
      "age": 1,
      "furDensity": "medium",
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "id": "58b445f7cd881f76698bb786",
      "name": "Terry",
      "color": [
        "black"
      ],
      "price": 26211,
      "age": 7,
      "furDensity": "low",
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "id": "58b445f77141f5ba3a59c1f9",
      "name": "Melba",
      "color": [
        "white",
        "black"
      ],
      "price": 33728,
      "age": 6,
      "furDensity": "medium",
      "size": "medium",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f720da84ac760dba45",
      "name": "Mathis",
      "color": [
        "red"
      ],
      "price": 5391,
      "age": 9,
      "furDensity": "medium",
      "size": "medium",
      "image": "/images/cats2.jpg"
    },
    {
      "id": "58b445f7a3e47e51bedbeebb",
      "name": "Hoffman",
      "color": [
        "red"
      ],
      "price": 12597,
      "age": 3,
      "furDensity": "medium",
      "size": "small",
      "image": "/images/cats4.jpg"
    },
    {
      "id": "58b445f7fe7bde55512bc2ac",
      "name": "Ashley",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 20561,
      "age": 7,
      "furDensity": "medium",
      "size": "large",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f7e897b7b984e71b79",
      "name": "Gale",
      "color": [
        "white"
      ],
      "price": 13690,
      "age": 6,
      "furDensity": "medium",
      "size": "small",
      "image": "/images/cats1.jpg"
    },
    {
      "id": "58b445f732ffd03e7097a8b6",
      "name": "Sampson",
      "color": [
        "red"
      ],
      "price": 285,
      "age": 11,
      "furDensity": "high",
      "size": "large",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f733e4e31957f0b834",
      "name": "Lucile",
      "color": [
        "white",
        "black"
      ],
      "price": 8041,
      "age": 1,
      "furDensity": "high",
      "size": "small",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f7edc8b1d90ce51e84",
      "name": "Georgina",
      "color": [
        "white",
        "black"
      ],
      "price": 6044,
      "age": 9,
      "furDensity": "medium",
      "size": "medium",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f732f73f0a72804fd4",
      "name": "Bobbi",
      "color": [
        "gray"
      ],
      "price": 41247,
      "age": 6,
      "furDensity": "low",
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "id": "58b445f7deda4a66e39c4417",
      "name": "Mcknight",
      "color": [
        "white",
        "black"
      ],
      "price": 28587,
      "age": 11,
      "furDensity": "high",
      "size": "medium",
      "image": "/images/cats1.jpg"
    },
    {
      "id": "58b445f73008ba90d3731dcf",
      "name": "Blankenship",
      "color": [
        "white"
      ],
      "price": 44637,
      "age": 9,
      "furDensity": "high",
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f722fe3f7a840d9362",
      "name": "Katina",
      "color": [
        "red"
      ],
      "price": 12556,
      "age": 6,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats6.jpg"
    },
    {
      "id": "58b445f7ce351d1fc427ab2d",
      "name": "Andrea",
      "color": [
        "gray"
      ],
      "price": 33054,
      "age": 8,
      "furDensity": "high",
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "id": "58b445f77904ec855a28a63e",
      "name": "Beverly",
      "color": [
        "black"
      ],
      "price": 13971,
      "age": 10,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats3.jpg"
    },
    {
      "id": "58b445f7bc9e2093a7abcb4b",
      "name": "Celina",
      "color": [
        "white",
        "black"
      ],
      "price": 34652,
      "age": 9,
      "furDensity": "medium",
      "size": "large",
      "image": "/images/cats4.jpg"
    },
    {
      "id": "58b445f725add04a165145f7",
      "name": "Sharron",
      "color": [
        "gray"
      ],
      "price": 17044,
      "age": 9,
      "furDensity": "high",
      "size": "small",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f7ced4a1ba7a8798da",
      "name": "Morin",
      "color": [
        "gray"
      ],
      "price": 14542,
      "age": 7,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats5.jpg"
    },
    {
      "id": "58b445f7e6753ac9cad3f33b",
      "name": "Naomi",
      "color": [
        "black"
      ],
      "price": 15933,
      "age": 1,
      "furDensity": "high",
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "id": "58b445f714f011b5ba58571e",
      "name": "Knapp",
      "color": [
        "gray"
      ],
      "price": 1464,
      "age": 6,
      "furDensity": "medium",
      "size": "large",
      "image": "/images/cats6.jpg"
    },
    {
      "id": "58b445f7b3de347d3b0e5a56",
      "name": "Clark",
      "color": [
        "black"
      ],
      "price": 10823,
      "age": 11,
      "furDensity": "medium",
      "size": "medium",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f79ece5bf8573df038",
      "name": "Dale",
      "color": [
        "white",
        "black"
      ],
      "price": 24780,
      "age": 9,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats4.jpg"
    },
    {
      "id": "58b445f715ebd5fafbdb18eb",
      "name": "Stacy",
      "color": [
        "red"
      ],
      "price": 21112,
      "age": 7,
      "furDensity": "high",
      "size": "small",
      "image": "/images/cats6.jpg"
    },
    {
      "id": "58b445f79ace0caffc1823ad",
      "name": "Gonzales",
      "color": [
        "white",
        "black"
      ],
      "price": 36533,
      "age": 8,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats6.jpg"
    },
    {
      "id": "58b445f73e828144983def6f",
      "name": "Mcgowan",
      "color": [
        "gray"
      ],
      "price": 24919,
      "age": 5,
      "furDensity": "high",
      "size": "medium",
      "image": "/images/cats5.jpg"
    },
    {
      "id": "58b445f7d60ab11d0acb1c58",
      "name": "Mai",
      "color": [
        "black"
      ],
      "price": 13230,
      "age": 3,
      "furDensity": "medium",
      "size": "medium",
      "image": "/images/cats2.jpg"
    },
    {
      "id": "58b445f74eaef6d39371b02e",
      "name": "Angelina",
      "color": [
        "white",
        "black"
      ],
      "price": 16831,
      "age": 10,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats5.jpg"
    },
    {
      "id": "58b445f7592785cc38ec52cc",
      "name": "Alexander",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 39074,
      "age": 2,
      "furDensity": "high",
      "size": "small",
      "image": "/images/cats3.jpg"
    },
    {
      "id": "58b445f719e6520276681090",
      "name": "Katharine",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 19538,
      "age": 1,
      "furDensity": "medium",
      "size": "medium",
      "image": "/images/cats5.jpg"
    },
    {
      "id": "58b445f774f0bd2a0b3d3615",
      "name": "Hartman",
      "color": [
        "white"
      ],
      "price": 41564,
      "age": 9,
      "furDensity": "medium",
      "size": "small",
      "image": "/images/cats6.jpg"
    },
    {
      "id": "58b445f7839df50e591fcbe6",
      "name": "Gardner",
      "color": [
        "white",
        "black"
      ],
      "price": 40384,
      "age": 5,
      "furDensity": "low",
      "size": "small",
      "image": "/images/cats6.jpg"
    },
    {
      "id": "58b445f74f48538cada53983",
      "name": "Aguilar",
      "color": [
        "white"
      ],
      "price": 10974,
      "age": 11,
      "furDensity": "low",
      "size": "small",
      "image": "/images/cats6.jpg"
    },
    {
      "id": "58b445f720fbd483dcfac78d",
      "name": "Nola",
      "color": [
        "red"
      ],
      "price": 41969,
      "age": 10,
      "furDensity": "high",
      "size": "medium",
      "image": "/images/cats1.jpg"
    },
    {
      "id": "58b445f7de622578de56aa31",
      "name": "Buck",
      "color": [
        "gray"
      ],
      "price": 6868,
      "age": 7,
      "furDensity": "high",
      "size": "large",
      "image": "/images/cats2.jpg"
    },
    {
      "id": "58b445f77f9506b67f95f88a",
      "name": "Suzanne",
      "color": [
        "red"
      ],
      "price": 24934,
      "age": 12,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats3.jpg"
    },
    {
      "id": "58b445f70ebe74d1a3b99d39",
      "name": "Geraldine",
      "color": [
        "red"
      ],
      "price": 12038,
      "age": 7,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats6.jpg"
    },
    {
      "id": "58b445f7aabf83be2c7bc514",
      "name": "Merritt",
      "color": [
        "black"
      ],
      "price": 34193,
      "age": 10,
      "furDensity": "high",
      "size": "large",
      "image": "/images/cats3.jpg"
    },
    {
      "id": "58b445f75746ba685dab861a",
      "name": "Angeline",
      "color": [
        "black"
      ],
      "price": 29639,
      "age": 2,
      "furDensity": "high",
      "size": "medium",
      "image": "/images/cats1.jpg"
    },
    {
      "id": "58b445f7c5cfc945fdf31815",
      "name": "Lilia",
      "color": [
        "white"
      ],
      "price": 42543,
      "age": 3,
      "furDensity": "high",
      "size": "medium",
      "image": "/images/cats4.jpg"
    },
    {
      "id": "58b445f7a434fbc366debfe4",
      "name": "Ochoa",
      "color": [
        "gray"
      ],
      "price": 9635,
      "age": 6,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f7c493ff08cfafb13a",
      "name": "Harris",
      "color": [
        "white",
        "black",
        "red"
      ],
      "price": 36984,
      "age": 10,
      "furDensity": "low",
      "size": "small",
      "image": "/images/cats6.jpg"
    },
    {
      "id": "58b445f7f8cd2f833a2a8c30",
      "name": "Deann",
      "color": [
        "red"
      ],
      "price": 14365,
      "age": 11,
      "furDensity": "high",
      "size": "small",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f76af43f1ce671e463",
      "name": "Marks",
      "color": [
        "gray"
      ],
      "price": 49994,
      "age": 11,
      "furDensity": "medium",
      "size": "medium",
      "image": "/images/cats9.jpg"
    },
    {
      "id": "58b445f7374eaaa79e59cd09",
      "name": "Ruiz",
      "color": [
        "red"
      ],
      "price": 43781,
      "age": 5,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats8.jpg"
    },
    {
      "id": "58b445f75a4d7fa53cb6dbc2",
      "name": "Raymond",
      "color": [
        "white"
      ],
      "price": 386,
      "age": 11,
      "furDensity": "low",
      "size": "small",
      "image": "/images/cats9.jpg"
    },
    {
      "id": "58b445f7e757f50495aee05e",
      "name": "Charlene",
      "color": [
        "black"
      ],
      "price": 36725,
      "age": 11,
      "furDensity": "medium",
      "size": "small",
      "image": "/images/cats3.jpg"
    },
    {
      "id": "58b445f75c9507af9624f102",
      "name": "Glover",
      "color": [
        "gray"
      ],
      "price": 10856,
      "age": 9,
      "furDensity": "medium",
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f7e4cb225bf93049bb",
      "name": "Sharlene",
      "color": [
        "white"
      ],
      "price": 17243,
      "age": 6,
      "furDensity": "high",
      "size": "medium",
      "image": "/images/cats5.jpg"
    },
    {
      "id": "58b445f7526f2ce3d0f038a6",
      "name": "Christi",
      "color": [
        "red"
      ],
      "price": 9588,
      "age": 7,
      "furDensity": "low",
      "size": "small",
      "image": "/images/cats9.jpg"
    },
    {
      "id": "58b445f7161009c19ffd70b6",
      "name": "Coffey",
      "color": [
        "white",
        "black"
      ],
      "price": 6292,
      "age": 11,
      "furDensity": "high",
      "size": "medium",
      "image": "/images/cats9.jpg"
    },
    {
      "id": "58b445f76548106f9a04edea",
      "name": "Mayo",
      "color": [
        "white",
        "black"
      ],
      "price": 537,
      "age": 3,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats1.jpg"
    },
    {
      "id": "58b445f705e1c18a3fbf9690",
      "name": "Steele",
      "color": [
        "black"
      ],
      "price": 6764,
      "age": 6,
      "furDensity": "high",
      "size": "large",
      "image": "/images/cats7.jpg"
    },
    {
      "id": "58b445f7965cc5464909cec2",
      "name": "Lenore",
      "color": [
        "white",
        "black"
      ],
      "price": 37904,
      "age": 7,
      "furDensity": "low",
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "id": "58b445f71e721ec9b7b36daf",
      "name": "Huffman",
      "color": [
        "white"
      ],
      "price": 45438,
      "age": 1,
      "furDensity": "medium",
      "size": "small",
      "image": "/images/cats5.jpg"
    },
    {
      "id": "58b445f7d3eb94c49511486a",
      "name": "Laurel",
      "color": [
        "black"
      ],
      "price": 18793,
      "age": 4,
      "furDensity": "low",
      "size": "medium",
      "image": "/images/cats3.jpg"
    },
    {
      "id": "58b445f78fff8b3e59efebd1",
      "name": "Cohen",
      "color": [
        "white"
      ],
      "price": 48319,
      "age": 5,
      "furDensity": "low",
      "size": "small",
      "image": "/images/cats2.jpg"
    },
    {
      "id": "58b445f71756425df41ae3be",
      "name": "Melisa",
      "color": [
        "white"
      ],
      "price": 28311,
      "age": 6,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats2.jpg"
    },
    {
      "id": "58b445f7e35aef9623edeb26",
      "name": "Dorothea",
      "color": [
        "white"
      ],
      "price": 20840,
      "age": 12,
      "furDensity": "low",
      "size": "large",
      "image": "/images/cats8.jpg"
    }
  ];

  cats.forEach((cat) => Cats.insert(cat));
}