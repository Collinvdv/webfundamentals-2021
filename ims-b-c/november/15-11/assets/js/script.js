var buttonTomaat = document.querySelector(".js-button-tomaat");
var buttonPaprika = document.querySelector(".js-button-paprika");
var buttonPatat = document.querySelector(".js-button-patat");
var moestuinElement = document.querySelector(".moestuin");

buttonTomaat.addEventListener("click", function() {
    addToMoestuin("tomaat");
});

buttonPaprika.addEventListener("click", function() {
    addToMoestuin("paprika");
});

buttonPatat.addEventListener("click", function() {
    addToMoestuin("patat");
});

function addToMoestuin(groente) { // groente = "tomaat";
    // LEEG HTML ELEMENTJE MAKEN MET CLASS TOMAAT
    var newGroente = document.createElement("div");  // <div></div>
    newGroente.classList.add(groente); //<div class="groente"></div>

    // ELEMENT TOEVOEGEN IN MIJNE MOESTUIN
    moestuinElement.append(newGroente);
}