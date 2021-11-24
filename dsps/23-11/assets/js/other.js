// link to element
var birthdateElement = document.querySelector("#birthdate");
var birthdateButtonElement = document.querySelector("#birtdate_button");

// Click event on birthdate button
birthdateButtonElement.addEventListener("click", function() {
    var givenDate = birthdateElement.value;
    calculateDayPerYear(givenDate); // 1991-04-16
})

function calculateDayPerYear(givenDate) {
    // DATES
    var birthdate = new Date(givenDate); // 1991-04-16
    var now = new Date();  // 2021-11-23
    var birthdateYear = birthdate.getFullYear(); //1991
    var nowYear = now.getFullYear(); // 2021
    var days = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday"
    ];

    // let us loop from 1991 -> 2021
    for (var year = birthdateYear; year <= nowYear; year++ ) {
        var birthdayOfNewYear= new Date(year, birthdate.getMonth(), birthdate.getDate()); //1991-04-16, 1992-04-16

        console.log(year + " : " + days[birthdayOfNewYear.getDay()]);
    }
}