var users = [
    "ibrahim",
    "tom",
    "john",
    "lisa"
];

// Eerste manier om te loopen over een array
for (var index = 0; index < users.length; index++) {
    console.log(users[index]);
}

// for in
for (var index in users) { 
    console.log(users[index]);
}

// Convert string in to array
var characters = "harry,ron,hermione";
console.log(characters.split(","));
// console.log(characters[5]);

// Convert array to string
console.log(users.join("-"));

// adding items to array
// users.push("obama"); // add item to the end of the array
// users.unshift("obama"); // add item to the beginne of the array
users.splice(2, 0, "obama"); // add item after 2
console.log(users);

// removing items from array
// users.pop(); // removes last item
// users.shift(); // removes the first item
users.splice(2, 3); // removes the first 3 items
console.log(users);