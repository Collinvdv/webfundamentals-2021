var buttonElement = document.querySelector(".js-counter-button");
var counterElements = document.querySelectorAll(".js-counter-text");
var counter = 0;

buttonElement.addEventListener("click", function() {
    // executed code
    counter++;

    // Change all the counter elements
    for (var index = 0; index < counterElements.length; index++) {
        var counterElement = counterElements[index];

        counterElement.innerHTML = counter;
    }
});