/* 
    String 
*/
var firstname = "Collin";
var familyname = "Van der Vorst";
var fullname = firstname + " \"the wizard\" " + familyname;
var age = 30;

// console.log(firstname + age);
// console.log(firstname);
// console.log(familyname);
// console.log(fullname);

/*
    Numbers
*/
var number1 = 10.5;
var number2 = 20;

// console.log(number1 + number2);
// console.log(number1 - number2);
// console.log(number1 * number2);
// console.log(number1 / number2);
// console.log(number1 % number2);

++number1;
number1++;
number1 = number1 + 1;
number1 += 1;

number1 = 10;

number1--;

// console.log(number1 + number2);
// console.log(typeof(number1));
// console.log(typeof(number2));

/*
    Boolean
*/
var isTalented = true;

// console.log(isTalented);
// console.log(typeof(isTalented));

/*
    Array
*/
var emptyArray = [];
var cars = ["bmw", "audi", "jeep", "citroen"];
var characters = [
    "Harry Potter",
    "Hermione Gringer",
    "Ron Weasly"
];
// console.log(cars);
// console.log(cars[5]);

/*
    object
*/
var user = {
    username: "collinxoxo",
    age: 30,
    password: "passwoord123",
    animals: [
        "goats",
        "cheep",
        "chicken"
    ],
    isMarried: false
};

var characters = [
    {
        firstname: "harry",
        lastname: "potter",
        father: {
            firstname: "john",
            lastname: "potter"
        }
    },
    {
        firstname: "ron",
        lastname: "weasly"
    }
];

// console.log(characters[0].firstname);


/*
    Tomorrowland ze geven een fuif. 
    Buitenwippers zijn ziek, ze willen robot. 
    Onze software vraagt 2 dingen: geslacht en leeftijd 

    Alle vrouwen moeten ouder zijn of gelijk dan 18 en jonger dan 30
    of 
    ze geven mij 100 euro
*/
var age = 25;
var isFemale = true;
var bribeMoney = 50;

if (
    (age >= 18 && age < 30 && isFemale == true)
    ||
    bribeMoney >= 100
) {
    console.log("Kom ma binnen");
} else {
    console.log("Bollet af");
}


var number1 = 5;
var number2 = "5";

if (number1 === number2) {
    console.log("zelfde getal");
} else {
    console.log("niet zelfd getal");
}