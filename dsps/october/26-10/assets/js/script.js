// First loop: the for loop
// for (var index = 1; index <= 10; index++) {
//     console.log(index);
// }

// give me the even numbers from 0 -> 100 by using a for loop
// for (var index = 0; index <= 100; index+=2) {
//     console.log(index);
// }

// for (var index = 0; index <= 100; index++) {
//     var isEven = index % 2 === 0 ;

//     if (isEven) {
//         console.log(index);
//     }
// }

// var firstname = prompt("Give me your name");
// var age = parseInt(prompt("Give me your age"));
// console.log(age);
// console.log(typeof(age));


// ES6 code (or ecmascript 6)
const systemName = "studentPlatform";
let systemsName2 = "collin";



var students = ["Brad", "Julia", "Jesus", "Maria", "Lisa", "Elke"];

// students.push(firstname);


// for (var index = 0; index < students.length; index++) {
//     console.log(students[index]);
// }

// for (var index in students) { index = 0
//     // console.log(students[index]);
// }


// var user = {
//     firstname: "Collin",
//     familyname: "Van der Vorst",
//     age: 30
// };

// console.log(user);
// console.log(students);
// console.log(typeof(user));
// console.log(typeof(students));

// console.log(user.firstname);
// console.log(user["firstname"]);

// for (var attributeName in user) {
//     console.log(attributeName + " = " + user[attributeName]);
// }



// CHECK IF THE USER INPUT IS EQUAL TO USERNAME AND PASSWORD
var user = {
    username : "collinvdv",
    password : "password1234"
}


// check if they are authenticated
// var username = prompt("Give me yah usah");
// var password = prompt("Give me yah password");
// var isAuthenticated = password != user.password || username != user.username;

// while (isAuthenticated) {
//     username = prompt("Give me yah usah");
//     password = prompt("Give me yah password");

//     isAuthenticated = password != user.password || username != user.username;
// }

// do while
var username = "";
var password = "";
var isAuthenticated = false;

do {
    username = prompt("Give me yah usah");
    password = prompt("Give me yah password");

    isAuthenticated = password != user.password || username != user.username;
} while (isAuthenticated)

// Output when they are authenticated 
if (isAuthenticated) {
    console.log("YOU ARE AUTHENTICATED");
}