var buttonElement = document.querySelector("#timer-button");
var outputElement = document.querySelector("#timer-output");
var counter = 0;

buttonElement.addEventListener("click", function() {
    var timer = setInterval(function() {
        counter++;

        if (counter <= 10) {
            outputElement.innerHTML = counter;
        } else {
            clearInterval(timer);
        }
    }, 1000);
});

setTimeout(function() {
    alert("I WAITED 5 SECONDS");
}, 5000);