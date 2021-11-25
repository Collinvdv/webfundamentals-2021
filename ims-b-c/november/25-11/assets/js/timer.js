var timerElement = document.querySelector("#timer");
var seconds = 0;

// 5 seconden wachten
setTimeout(function() {
    // elke second de h1 aanpassen tot 10 seconden
    var timer = setInterval(function() {
        seconds++;

        timerElement.innerHTML = seconds;

        if (seconds >= 10) {
            clearInterval(timer);
        }
    }, 1000);
}, 5000);