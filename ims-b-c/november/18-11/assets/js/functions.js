// // console.log(5 * 5);
// // console.log(25 * 25);
// // console.log(125 * 125);

// // var kwadraat5 = kwadraat(5);  //kwadraat5 = 25
// // var kwadraat25 = kwadraat(25);
// // var kwadraat125 = kwadraat(125);
// // console.log(kwadraat(-5));
// // console.log(kwadraat5 + kwadraat25 + kwadraat125);

// // function kwadraat(getal) {
// //     // Checken of getal negatief is, als dat zo is return "enkele positieve getallen"
// //     if (getal < 0) {
// //         return "Enkel positieve getallen, aub";
// //     }

// //     // kwadraat berekenen
// //     var result = getal * getal;

// //     // kwadraat outputten
// //     return result;
// // }



// // ARRAYS
// var users = [
//     "Collin",
//     "Youssef",
//     "Lisa"
// ];

// // aanpassen van 1 item en vervangen door nieuwe value
// users[0] = "Colin";

// console.log(users.join(" - "));

// console.log(users[0]); // collin
// console.log(users.length); // 3

// // loop
// for (var i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// // loop for in 
// for (var i in users) {
//     // i = 0
//     console.log(users[i]);
// }

// // forEach
// users.forEach(function(user) {
//     console.log(user);
// });

// // forEach ES6
// users.forEach((user) => console.log(user));

// var characters = "harry,ron,hermoine";
// var charactersItems = characters.split(",");
// console.log(charactersItems[0]);

// // ADD ITEMS
// // charactersItems.push("voldemort"); // add item as last element
// charactersItems.unshift("voldemort"); // add item as first element
// charactersItems.splice(2, 0, "hagrid");

// // DELETE ITEMS
// // charactersItems.pop(); // remove last item
// //charactersItems.shift(); // remove first item
// console.log(charactersItems);
// // charactersItems.splice(0, 2); // splice(startIndex, itemsCount);

// console.log(charactersItems);


var person = {
    firstname: "Colin",
    lastname: "Van der Vorst",
    age: 30,
    isAwesome: true,
    animals: [
        "pepper",
        "kamiel"
    ],
    partner: {
        firstname: "Lisa",
        lastname: "Doeterniettoe",
        age: 45
    },
    getFullName: function() {
        return this.firstname + " " + this.lastname;
    }
};

var fullname = person.getFullName();
console.log(fullname);

// als ge de key al weet
console.log(person.firstname);
console.log(person.lastname);

var keyName = "firstname";
console.log(person[keyName]);

console.log(person.animals[0]); // ["pepper", "kamiel"] => "pepper"
console.log(person.partner.firstname); // {firstname: "Lisa", Lastname ..} => "Lisa"