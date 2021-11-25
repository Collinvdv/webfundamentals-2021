// user definieren and hardcoded credentials meegeven
var user = {
    username: "collinvdv",
    password: "test123"
};

// console.log(user.username); // collinvdv
// console.log(user.password); // test123

// referenties
var buttonElement = document.querySelector(".button-login");
var inputUsernameElement = document.querySelector("#input-username");
var inputPasswordElement = document.querySelector("#input-password");
var bodyElement = document.querySelector("body"); //tag met body

var amountOfMistakes = 0;

changeBodyAuthentication(false);

// event listener
buttonElement.addEventListener("click", function() {
    var givenUsername = inputUsernameElement.value;
    var givenPassword = inputPasswordElement.value;

    if (givenUsername == user.username && givenPassword == user.password) {
        changeBodyAuthentication(true);

        amountOfMistakes = 0;
    } else {
        changeBodyAuthentication(false);

        // amount of mistakes
        amountOfMistakes++;
        var errorElement = document.createElement("p"); //<p></p>
        errorElement.innerHTML = "The amount of mistakes is : " + amountOfMistakes;

        bodyElement.append(errorElement);
    }
});

function changeBodyAuthentication(isAuthenticated) {
    if (isAuthenticated) {
        // bodyElement.style.backgroundColor = "green";
        bodyElement.classList.remove("not-authenticated");
        bodyElement.classList.add("authenticated");
    } else {
        // bodyElement.style.backgroundColor = "red";
        bodyElement.classList.remove("authenticated");
        bodyElement.classList.add("not-authenticated");
    }
}