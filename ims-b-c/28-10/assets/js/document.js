// referentie met button
var buttonElement = document.querySelector("#counterButton");
var counterElements = document.querySelectorAll(".counter");
var counter = 0;

console.log(counterElements[0]);

// button moet luisteren en functie uitvoeren van zodra het event gebeurt
buttonElement.addEventListener("click", function() {
    counter++;

    for (var index = 0; index < counterElements.length; index++) {
        counterElements[index].innerHTML = counter;
    }
});