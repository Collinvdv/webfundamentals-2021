// Fake user to check the authentication
var user = {
    username: "collinvdv",
    password: "test123"
};

// console.log(user.username); // "collinvdv"
// console.log(user.password); // "test123"

// Referenties
var buttonElement = document.querySelector(".button-login");
var inputUsernameElement = document.querySelector("#input-username");
var inputPasswordElement = document.querySelector("#input-password");
var bodyElement = document.querySelector("body");
var countFailedLogins = 0;

// Check if input is equal to user
buttonElement.addEventListener("click", function() {
    // get data from input field
    var givenUsername = inputUsernameElement.value;
    var givenPassword = inputPasswordElement.value;

    // check if username + password is equal to object
    if (
        givenUsername == user.username &&
        givenPassword == user.password
    ) {
        changeBodyAuthentication(true);

        countFailedLogins = 0;
    } else {
        changeBodyAuthentication(false);

        countFailedLogins++;

        // new element maken 
        var failedLoginElement = document.createElement("p"); //<p></p>
        failedLoginElement.innerHTML = "Aantal keer gefaald: " + countFailedLogins; //<p>Aantal keer gefaald: 1</p>

        // Element is klaar, ergens aan toevoegen
        bodyElement.append(failedLoginElement);
    }
});

function changeBodyAuthentication(isAuthenticated) { // isAuthenticated = false;
    if (isAuthenticated == true) {
        // bodyElement.style.backgroundColor = "green"; // background-color: green;
        bodyElement.classList.remove("not-authenticated");
        bodyElement.classList.add("authenticated");
    } else {
        // bodyElement.style.backgroundColor = "red";
        bodyElement.classList.remove("authenticated");
        bodyElement.classList.add("not-authenticated");
    }
}