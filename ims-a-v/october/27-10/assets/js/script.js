// tellen van 1 tot 100
// for (var number = 1; number <= 100; number++ ) {
//     console.log(number);
// }

// geef mij alle even getallen van 0 tot 100
// for (var number = 0; number <= 100; number++) {
//     if (number % 2 == 0) {
//         console.log(number);
//     }
// }

// for (var number = 0; number <= 100; number+=2) {
//     console.log(number);
// }


// while loop
// wachtwoord password123
var user = {
    username: "collinvdv",
    password: "password123"
};
// var password = prompt("Give ma yah password");
// console.log(password);

// // Check of het gegeven wachtwoord gelijk is aan mijn user wachtwoord
// while (password != user.password) {
//     console.log("t is niet gelijk geef mij een nieuw wachtwoord");

//     password = prompt("Give ma yah password"); 
// }
var password = "";

do {
    password = prompt("Give ma yah password");
} while (password != user.password);

// Welkom gebruiker
console.log("welkom!");