var buttonTomato = document.querySelector(".js-button-tomato");
var buttonPaprika = document.querySelector(".js-button-paprika");
var moestuinElement = document.querySelector(".js-moestuin");

console.log(moestuinElement);

buttonTomato.addEventListener("click", function() {
    var tomato = document.createElement("div");
    tomato.classList.add("tomato");

    moestuinElement.append(tomato);
});

buttonPaprika.addEventListener("click", function() {
    var paprika = document.createElement("div"); //<div></div>
    paprika.classList.add("paprika"); //<div class="paprika"></div>

    moestuinElement.append(paprika); // toevoegen op het van het element
});