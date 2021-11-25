// var user = {
//     firstname: "Collin", // properties
//     lastname: "Van der Vorst", //properties
//     getFullname: function() {
//         console.log(this.firstname + " " + this.lastname)
//     }
// }

// user.getFullname();
// var now = new Date();

// var birthdate = new Date(1991, 3, 16, 6, 6, 6);
// var birthdateAsString = new Date("1991-04-16"); // 16-04-1991
// console.log(birthdate);
// console.log(birthdateAsString);


// console.log(birthdate.getDate()); // 16
// console.log(birthdate.getMonth()); // 3 -> April
// console.log(birthdate.getFullYear()); // 1991
// console.log(birthdate.getDay()); // 2, sunday = 0, monday = 1, tuesday = 2

// Get the user his/her birthday
var inputDate = document.querySelector("#date-of-birth");
var buttonDate = document.querySelector(".button-date");

buttonDate.addEventListener("click", function() {
    var dob = new Date(inputDate.value); // new Date("1991-04-16")

    calculateDaysOfTheWeek(dob);
});

function calculateDaysOfTheWeek(birthdate) {
    var now = new Date();

    var birthdateYear = birthdate.getFullYear(); // 1991
    var nowYear = now.getFullYear(); // 2021

    // output:
    // 1991: tuesday
    // 1992: thursday
    // ..
    // 2021: thursday
    var daysOfWeek = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ]

    for (var year = birthdateYear; year <= nowYear; year++) {
        var date = new Date(year, birthdate.getMonth(), birthdate.getDate());

        console.log(date.getFullYear() + ": " + daysOfWeek[date.getDay()]);
    }
}
