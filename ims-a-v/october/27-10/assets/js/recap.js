console.log("Pagina is geladen");

var firstname = "collin";
var familyname = "van der vorst";
var fullname = firstname + " " + familyname;

console.log("16" + "4" + "volvo" + (16 + 4));
console.log("volvo" + 16 + 4);

var number1 = 5.5;
var number2 = 10;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);

++number1;
number1++; // number1 = number1 + 1;
number1--; // number1 = number1 - 1;

number1 += 10; // number1 = number1 + 10;

console.log(typeof(number1));

var nickname = "the strict one";
console.log(typeof(nickname));


var students = ["", "Brad", "Julie", "Harry", "Ron"];
var grades = [3, 5, 2, 4];
console.log("---array");
console.log(students);
console.log(students[3]);

var user = {
    username: "collinvdv",
    password: "password123",
    isBlocked: false,
    age: 30,
    friends: [
        {
            name: "budha",
            age : "oud"
        },
        {
            name: "jesus",
            age : "oud"
        },
        {
            name: "allah",
            age : "oud"
        }
    ],
    father: {
        name: "marc",
        familyname: "van der vorst"
    }
};

console.log(user.password);
console.log(user.friends[0].name);


if (user.password == "password123") {
    console.log("Zijn password is geldig");
} else if (user.username == "collinvdv"){
    console.log("password is niet geldig");
} else {

}


var number1 = 5.0;
var number2 = 5; 

if (number1 === number2) {
    console.log("nummer gelijk")
}

var fruit = "orange";

switch (fruit) {
    case "orange":
        console.log("lekker!");
        break;
    case "apple":
        console.log("ook lekker!");
        break;
    default:
        console.log("kennek nie");
        break;
}