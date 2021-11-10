var moestuinElement = document.querySelector(".moestuin");
// var buttonTomatoElement = document.querySelector(".button-tomato");
// var buttonPaprikaElement = document.querySelector(".button-paprika");
// var buttonSlaElement = document.querySelector(".button-sla");

// buttonTomatoElement.addEventListener("click", function() {
//     addToMoestuin("tomaat");
// });

// buttonPaprikaElement.addEventListener("click", function() {
//     addToMoestuin("paprika");
// });

// buttonSlaElement.addEventListener("click", function() {
//     addToMoestuin("sla");
// });

// dit is voor de voorgedefinieerde groenten
var buttons = document.querySelectorAll(".button-add-groente");

for (var index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function() {
        addToMoestuin(this.innerHTML);
    });
}

// custom groente
var customGroenteButton = document.querySelector(".button-custom-groente");

customGroenteButton.addEventListener("click", function() {
    var customGroente = document.querySelector("#custom-groente").value;
    addToMoestuin(customGroente);
});

function addToMoestuin(groente) {
    var listItem = document.createElement("li");
    listItem.innerHTML= groente;
    // <li>tomaat</li>

    moestuinElement.append(listItem);
}




// var kwadraat25 = kwadraat(25);
// console.log(kwadraat25);
// console.log(kwadraat(50));

// function kwadraat(number) {
//     return number * number;
// }