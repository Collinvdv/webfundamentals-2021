// Reference to the buttons
var buttonTomatoElement = document.querySelector(".js-button-tomato");
var buttonPaprikaElement = document.querySelector(".js-button-paprika");
var buttonPotatoElement = document.querySelector(".js-button-potato");

// Reference to the garden
var gardenElement = document.querySelector(".js-garden");

// Click on the tomato button
buttonTomatoElement.addEventListener("click", function() {
    addToGarden("tomato");
});

// Click on the paprika button
buttonPaprikaElement.addEventListener("click", function() {
    addToGarden("paprika");
});

// Click on the potato button
buttonPotatoElement.addEventListener("click", function() {
    addToGarden("potato");
});

function addToGarden(vegetable) {
    var vegetableElement = document.createElement("div"); //<div></div>
    vegetableElement.classList.add(vegetable); //<div class="tomato"></div>

    gardenElement.append(vegetableElement); // add an element inside garden
}




var squareOf100 = square(100);
var squareOf2 = square(2);
console.log(square(-10));
console.log(square(10));

function square(number) {

    if (number < 0) {
        return "Sorry negative number";
    }

    var result = number * number

    return result;
}

// number
// number * number 