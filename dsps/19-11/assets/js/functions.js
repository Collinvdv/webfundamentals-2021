// // triangle 1 
// var triangle1 = areaOfTriangle(5, 20);
// console.log(triangle1);

// // triangle 2
// var triangle2 = areaOfTriangle(15, 20);
// console.log(triangle2);

// // triangle 3
// var triangle3 = areaOfTriangle(-15, 20);
// console.log(triangle3);

// function areaOfTriangle(height, width) {
//     if (height < 0 || width < 0) {
//         return "I don't do negative numbers";
//     }

//     var area = (height * width) / 2;
//     var result = area + "cm2";

//     return result;
// }

var persons = [
    "harry",
    "ron",
    "hermione"
];

// persons[0] = "harry potter";
// console.log(persons[0]);
// console.log(persons.length);


// ADD ITEMS
// persons.push("dombledore"); // .push() will add an item as last
// persons.unshift("dombledore"); // .unshit() will add an item as first item
// persons.splice(2, 0, "dombledore");

// REMOVE ITEMS 
// persons.pop(); // .pop() will remove the last item
// persons.shift(); // .shift() will remove the first item
// persons.splice(1, 2); //.splice(startNumber, countItems)


// FOR
for (var index = 0; index < persons.length; index++) {
    console.log(persons[index]);
}

// // FOR IN 
// for (var index in persons) {
//     console.log(persons[index]);
// }

// // foreach ES6
// persons.forEach(function(person) {
//     console.log(person);
// })

// persons.forEach((person) => console.log(person));

// console.log(persons.join(","));

// var personsString = "collin,youssef,lisa";
// console.log(personsString.split(",")[0]);

var user = {
    firstname: "Collin",
    familyname: "Van der Vorst",
    isAwesome: true,
    age: 30,
    partner: {
        firstname: "Lisa",
        familyname: "Private"
    },
    animals: [
        {
            name: "pepper",
            type: "cat"
        },
        {
            name: "kamiel",
            type: "cat"
        }
    ],
    getFullname: function() {
        console.log(user);
        return this.firstname + " " + this.familyname;
    }
};

console.log(this);

// document.querySelector();
console.log(user.getFullname());
// user.firstname = "Colin";
// console.log(user.age);
// console.l0g(user.partner.firstname)
// console.log(user.animals); //["pepper","kamiel"]
// console.log(user.animals[0]); // pepper

// console.log(user.animals[0].type); //cat