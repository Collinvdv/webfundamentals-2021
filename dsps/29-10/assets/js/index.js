console.log(document);

// Function write -> which will html add the bottom of my body
// document.write("<p> Added by js, omg this is fun</p>");

// Make a reference html by tagname
var buttons = document.getElementsByTagName("button");

buttons[0].innerHTML = "Click me changed by JS";
buttons[1].innerHTML = "Click me changed by JS";
console.log(buttons); // <button></button> -> array


// Make a reference by ID
var button = document.getElementById("button-1");
button.innerHTML = "Again changed by JS, referenced the ID";
console.log(button);

// Make a referency by Class
var buttonsClass = document.getElementsByClassName("js-counter-button");
console.log(buttonsClass);

buttonsClass[0].innerHTML = "change by class reference";
buttonsClass[1].innerHTML = "change by class reference";

// Only 1 element reference
var buttonElement = document.querySelector("#button-1"); //<tagelement id="button-1"></tagelement>
var buttonElementByClass = document.querySelector(".js-counter-button"); // <tagelement class="js-counter-button"></tagelement>
var buttonElementByTagName = document.querySelector("button"); // <button></button>
console.log(buttonElement);
console.log(buttonElementByClass);

// Give me ALL element references 
var buttonElementsByClass = document.querySelectorAll(".js-counter-button"); // <tagelement class="js-counter-button"></tagelement>
var buttonElementsByTagname = document.querySelectorAll("button");