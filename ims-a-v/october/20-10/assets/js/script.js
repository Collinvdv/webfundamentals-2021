/*
    Adding text to each other, concatenation 
*/
var firstName = "Collin"; 
var familyName = 'Van der Vorst';
var fullName = firstName + " \"Js-wizard\" " + familyName;

console.log(fullName);

/*
    Adding numbers to each others
*/
var number1 = 5.5;
var number2 = 10;
var sum = number1 + number2;

console.log(sum);

var isLong = false;

/*
    Arrays
*/
var characters = ["Harry Potter", "Ron Weasly", "Hermione Gringer", "Voldemort"];

var characters = [
    {
        firstName: "Harry",
        familyName: "Potter"
    },
    {
        firstName: "Ron",
        familyName: "Weasly"
    },
    {
        firstName: "Hermione Gringer",
        familyName: "Weasly"
    }
];


console.log(characters);

console.log(characters[2]);

var grades = [
    10,
    15,
    0,
    30
];

/*
    Object
*/
var firstName = "collin";
var familyName = "van der vorst";
var age = 30;
var isMarried = false;

var user = {
    firstName: "Collin",
    familyName: "Van der Vorst",
    age: 30,
    isMarried: false,
    animals: [
        "goats",
        "chicken",
        "sheep"
    ]
};

var fullname = user.firstName + " " + user.familyName;

console.log(typeof(fullname));
console.log(typeof(user));
console.log(typeof(grades));


/*
    Tomorrowland

    Wie mag er binnen?
    Vrouwen dat ouder of gelijk zijn dan 18 en jonger zijn dan 30
    Wanneer je mij 100euro geeft mag je ook binnen
*/
var age = 30;
var isFemale = false;
var bribeMoney = 100;

if (
    (age >= 18 && age < 30 && isFemale == true) || bribeMoney >= 100
) {
    console.log("Chance, ge moogt binnen");
} else {
    console.log("Sorry maatje, andere keer");
}

var number1 = 5;
var number2 = 10;

if (number1 === number2) {
    console.log("De waarde is dezelfde EN de type van de variabele is dezelfde ");
} else if(number1 == number2 ) {
    console.log("De waarde is dezelfde");
} else {
    console.log("De waarde is niet dezelfde");
}

/*
    Operators
*/ 
var number1 = 10;
var number2 = 5;

var sum = number1 + number2;
var min = number1 - number2;
var multiply = number1 * number2;
var division = number1 / number2;
var remainder = number1 % number2;

number1 = number1 + 1; 
number1++;
number1+=10;



var fruit = "druif";

if (fruit == "appel") {
    console.log("De appel valt niet ver van de boom");
} else if (fruit == "peer") {
    console.log("De peer is nog niet rijp");
} else if (fruit == "druif") {
    console.log("Dat is een druif uit zijn mond");
} else {
    console.log("Sorry, ik ken geen zegswijze met dat stuk fruit");
}

switch (fruit) {
    case "appel":
        console.log("De appel valt niet ver van de boom");
        break;
    case "peer":
        console.log("De peer is nog niet rijp");
        break;
    case "druif":
        console.log("Dat is een druif uit zijn mond");
        break;
    default:
        console.log("Sorry, ik ken geen zegswijze met dat stuk fruit");
        break;
}