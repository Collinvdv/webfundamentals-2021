var buttonUp = document.querySelector("#js-count-up");
var buttonDown = document.querySelector("#js-count-down");
var counterElement = document.querySelector("#js-count-value");
var counter = 0;

buttonDown.parentElement.innerHTML = "<p> you removed the buttons</p>";

buttonUp.addEventListener("click", function() {
    counter++;
    counterElement.innerHTML = counter;
});

buttonDown.addEventListener("click", function() {
    counter--;
    counterElement.innerHTML = counter;
});