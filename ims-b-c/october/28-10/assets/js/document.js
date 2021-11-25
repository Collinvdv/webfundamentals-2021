// // referentie met button
// var buttonElement = document.querySelector("#counterButton");
// var counterElements = document.querySelectorAll(".counter");
// var counter = 0;

// console.log(counterElements[0]);

// // button moet luisteren en functie uitvoeren van zodra het event gebeurt
// buttonElement.addEventListener("click", function() {
//     counter++;

//     for (var index = 0; index < counterElements.length; index++) {
//         counterElements[index].innerHTML = counter;
//     }
// });






// import { Person } from "./classes/person";
// import { Teacher } from "./classes/person";

// const person1 = new Person("Collin");
// const person2 = new Person("Lisa");
// const teacher1 = new Teacher("Collin the teacher");

// person1.talk();
// person2.talk();
// teacher1.talk();
// teacher1.teach();

// ES6
const firstname = "Collin";
const lastname = "Van der Vorst";
const fullname = `${firstname} "the nutty professor" ${lastname}`;
console.log(fullname);