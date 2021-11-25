var buttonElement = document.querySelector("#button-date");
var inputElement = document.querySelector("#input-date");

buttonElement.addEventListener("click", function() {
    calculateDayOfTheWeek(inputElement.value);
});

function calculateDayOfTheWeek(inputDate) { // date = inputElement.value ("1991-04-16")
    var now = new Date(); // nu
    var birthdate = new Date(inputDate);
    var daysofweek = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];
    
    // OUTPUT
    // 1991: tuesday
    // getDay() => dag van de week
    var birthdateYear = birthdate.getFullYear(); //1991
    var nowYear = now.getFullYear(); //2021
    
    for (var year = birthdateYear; year <= nowYear; year++) {
        var nextDate = new Date(year, birthdate.getMonth(), birthdate.getDate());
        console.log(nextDate.getFullYear() + ": " + daysofweek[nextDate.getDay()]);
    }
}
