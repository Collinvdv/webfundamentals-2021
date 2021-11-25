var firstname = "Collin";
var familyname = "Van der Vorst";
var fullname = firstname + " \"The strict one\" " + familyname;
// output: Collin "The Strict One" Van der Vorst
console.log(fullname);

var number1 = 5;
var number2 = 10.5;

console.log("Number1 heeft het type " + typeof(number1));
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 / number2);
console.log(number1 * number2);
console.log(number1 % number2);

number1++; // number1 = number + 1;
++number1; // number1 = number + 1;
number1 += 1; // number1 = number + 1;

number1--;
--number1;
number1 -= 1;

number1 *= 2; // number1 = number1 * 2;
number1 /= 2; // number1 = number1 / 2;

var isAuthenticated = false; // true

var students = ["Tom", "Jan", "Mohammed"];

console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

var student = {
    firstname: "Tom",
    lastname: "Janssens",
    age: 19,
    city: "Mechelen",
    friends: [
        {
            firstname: "John",
            age: 55
        },
        {
            firstname: "Isabella",
            age: 19
        },
        {
            firstname: "Mo",
            age: 19
        }
    ],
    father: {
        firstname: "John",
        lastname: "Janssens",
        age: 55
    }
};

console.log(student); // {}
console.log(student.age); //19
console.log(student.friends); //[]
console.log(student.father.age);
console.log(student.friends[2].age);

if (student.father.age > 65) {
    console.log("We zitten me ne gepensioneerde in de zaal");
} else if(student.father.age > 50) {
    console.log("Dat is ne vijftiger");
} else {
    console.log("Damn die was jong");
}

var number1 = 5;
var number2 = "5";

if (number1 == number2) {
    console.log("gelijk aan elkaar");
}

if (number1 === number2) {
    console.log("gelijk aan elkaar");
}

var fruit = "orange";

switch (fruit) {
    case "orange":
        console.log("Sinaasappel");
        break;
    case "apple":
        console.log("appel");
        break;
    default:
        console.log("Ik kennet niet");
        break;
}