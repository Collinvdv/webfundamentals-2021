// fake data
var user = {
    username: "collinvdv",
    password: "test123"
};

// references to my html-document
var buttonElement = document.querySelector(".login-button");
var inputUsernameElement = document.querySelector("#input-username");
var inputPasswordElement = document.querySelector("#input-password");
var bodyElement = document.querySelector("body");

var mistakesCounter = 0;

buttonElement.addEventListener("click", function() {
    var givenUsername = inputUsernameElement.value;
    var givenPassword = inputPasswordElement.value;

    if (
        givenUsername == user.username &&
        givenPassword == user.password
    ) {
        mistakesCounter = 0;

        changeBodyClass("authenticated");
    } else {
        // let people know how much they are not authenticated
        mistakesCounter++;

        var mistakeElement = document.createElement("p"); // <p></p>
        mistakeElement.innerHTML = "Count of mistakes is " + mistakesCounter; //<p>Count of mistakes is 1</p>

        bodyElement.append(mistakeElement);

        changeBodyClass("not-authenticated");
    }
});

function changeBodyClass(className) { // className = "not-authenticated";
    bodyElement.setAttribute("class", className);
}

document.querySelectoAll("body")[0].removeChild(document.querySelector("h1"));
