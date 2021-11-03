// iedereen jonger dan 25
// Collin, Cedric, Thibo, Robert
var persons = [
    {
        name: "Collin",
        age: 30
    },
    {
        name: "Cedric",
        age: 18
    },
    {
        name: "Thibo",
        age: 19
    },
    {
        name: "Robert",
        age: 19
    }
];

var totalAge = 0;

// for (var index = 0; index <= persons.length; index++) {
//     totalAge += persons[index].age;
// }

for (var index in persons) {
    totalAge += persons[index].age;
}

var average = totalAge / persons.length;
console.log("De gemiddelde leeftijd is: " + average);




var user = {
    name: "Robert",
    age: 19,
    city: "Boom"
};

var aAttributeName = "city";
console.log(user.age);
console.log(user[aAttributeName]);

for (var attributeName in user) {
    // console.log(attributeName); // "name", "age", "city"
    console.log(attributeName + " is " +user[attributeName]);
}
