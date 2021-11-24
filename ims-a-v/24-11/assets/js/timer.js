console.log("timer is loaded");

var seconds = 0;

var chronometer = setInterval(function() {
    seconds++;

    if (seconds > 10) {
        clearInterval(chronometer);
    } else {
        document.querySelector(".js-timer").innerHTML = seconds;
    }
}, 1000);


setTimeout(function() {
    console.log("Ik heb 5 seconden gewacht, en ik execute nu");
}, 5000);