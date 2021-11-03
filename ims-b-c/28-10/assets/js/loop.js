// 0 -> 100
for (var number1 = 0; number1 <= 100; number1++ ) {
    console.log(number1);
}

// GEEF MIJ ALLE EVEN GETALLEN VAN 0 TOT 100
for (var number1 = 0; number1 <= 100; number1++ ) {
    if (number1 % 2 == 0) {
        console.log(number1);
    }
}

for (var number1 = 0; number1 <= 100; number1+=2 ) {
    console.log(number1);
}

var students = [
    {
        firstname: "Collin",
        age: 30
    },
    {
        firstname: "Sara",
        age: 20
    },
    {
        firstname: "Ian",
        age: 19
    },
    {
        firstname: "Warre",
        age: 18
    }
];

console.log(students.length);

// OPDRACHT: geef mij alle studenten die jonger zijn dan 25
for (var index = 0; index < students.length; index++) {
    var student = students[index];

    // Jonger dan 25
    if (student.age < 25) {
        console.log(student.firstname + " is " + student.age + " jaar oud");
    }
}

// Gemiddelde leeftijd
var totalAge = 0;

for (var index = 0; index < students.length; index++) {
    totalAge += students[index].age;
}

console.log("Gemiddelde leeftijd is: " + (totalAge/students.length));


for (var index in students) {
    console.log(students[index]);
}

//es6 
students.forEach(function(student) {
    console.log(student);
});

//  while 
var user = {
    username: "collinvdv",
    password: "password123"
};

var password = prompt("Give me yah password");

while (password != user.password) {
    password = prompt("Give me yah password");
}

console.log("Welcome to my system");


// do while 
var user = {
    username: "collinvdv",
    password: "password123"
};

var password = "";

do {
    password = prompt("Give me yah password");
} while (password != user.password);