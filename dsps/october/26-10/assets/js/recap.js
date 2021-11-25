var firstname = "Collin";
var familyname = 'Van der Vorst';
var fullname = firstname + " \"The strict one\" " + familyname; // Output: Collin "The strict one" Van der Vorst
var isMarried = false;
var age = 30;
var length = 1.94;

console.log(firstname + " in 25 years will be: " + (age + 25) + " years old");

console.log(firstname);
console.log("variable firstname is acting like a " + typeof(firstname));

var number1 = 5;
var number2 = 6;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);

number1++; // +
number1--; // -1
number1 = number1 + 1; // +1
number1 = number1 - 1; // -1
number1 += 10; //number1 = number1 + 10;
number1 *= 10;

console.log(16 + 4 + " is not equal to " + 16 + 4);



var grades = [3, 4, 5, 0, 2, 5];
console.log(grades[4]);

var students = ["Ivan", "Jesus", "Collin", ];

var user = {
    "username" : "collinvdv",
    "password" : "password123",
    "age" : 30,
    "isAuthenticated": false,
    "friends" : [
        {
            "name" : "ivan",
            "age" : 12
        },
        {
            "name" : "tom",
            "age" : 30
        },
        {
            "name" : "jan",
            "age" : 40
        },
    ],
    "city" : {
        "name" : "Dendermonde",
        "zipcode" : 9200
    }
};

console.log(user.username);
console.log(user.age);
console.log(user.friends[0].name);

// {
//     "name" : "ivan",
//     "age" : 12
// }