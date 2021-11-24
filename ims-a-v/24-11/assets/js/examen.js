var characters = [
    "ron",
    "harry",
    "hermione",
    "voldemort"
];

var cards = [];

// creating the cards
for (var index = 0; index < characters.length; index++) {
    cards.push(characters[index]);
    cards.push(characters[index]);
}

// adding the cards to our game
var gameElement = document.querySelector("#game");

for (var index = 0; index < cards.length; index ++) {
    // creating seperate card element
    var cardElement = document.createElement("div"); // <div></div>
    cardElement.classList.add("card"); // <div class="card"></div>
    cardElement.innerHTML = cards[index]; // <div class="card">Harry</div>
    cardElement.dataset.person = cards[index]; //<div class="card" data-person="harry">harry</div>
    // add to the game
    gameElement.append(cardElement);
}

// click event syncen met een card
var cardElements = document.querySelectorAll(".card"); // [element1, element2]
var selectedCards = [];
var failedElement = document.querySelector("#failed-attempts");
var failedAttempts = 0;

for (var index = 0; index < cardElements.length; index++) {
    cardElements[index].addEventListener("click", function() {
        //  Kijk of er 2 kaarten inzitten, wanneer dit niet geval is draai ze en voeg ze toe in de array
        if (selectedCards.length < 2) {
            // check if card is not already a success
            if (this.classList.contains("succes") == false) {
                this.classList.add("visible");
                selectedCards.push(this);
            }
        }

        if (selectedCards.length == 2) {
            // ik wil checken of het dezelfde zijn
            if (selectedCards[0].dataset.person == selectedCards[1].dataset.person) {
                selectedCards[0].classList.add("succes");
                selectedCards[1].classList.add("succes");

                selectedCards = [];
            } else {
                // kaart onzichtbaar maken en selectedCards leeg maken
                setTimeout(function() {
                    selectedCards[0].classList.remove("visible");
                    selectedCards[1].classList.remove("visible");

                    selectedCards = [];
                }, 2000);

                failedAttempts++;
                failedElement.innerHTML = failedAttempts;

            }
        }
    });
}