var buttonElement = document.querySelector(".button");
var counterElements = document.querySelectorAll(".counter");

console.log(counterElements);

var counter = 0;

buttonElement.addEventListener("click", function() {
    counter++;

    for (var index = 0; index < counterElements.length; index++) {
        counterElements[index].innerHTML = counter;
    }
});