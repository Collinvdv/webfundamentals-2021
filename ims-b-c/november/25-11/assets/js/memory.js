// hoeveel personages
var characters = [
    "harry",
    "ron",
    "hermione",
    "voldemort"
];

// maak het aantal kaarten 
var cards = [];

for (var index = 0; index < characters.length; index++) {
    // eerste kaart
    cards.push(characters[index]);

    // tweede kaart
    cards.push(characters[index]);
}

// cards = cards.sort(() => Math.random() - 0.5); SHUFFLE ES 6 
var shuffleCards = [];

while (cards.length > 0) {
    // willekeurig item kiezen
    var randomIndex = Math.floor(Math.random() * (cards.length - 1)); // 0 tot de lengte van de cards

    // toevoegen aan shuffleCards 
    shuffleCards.push(cards[randomIndex]);

    // item verwijderen van cards
    cards.splice(randomIndex, 1);
}

cards = shuffleCards;

// cards overschrijven met de shuffled

// voeg cards toe aan game
var gameElement = document.querySelector("#game");

for (var index = 0; index < cards.length; index++) {
    // hier maken we de kaartjes met de content van cards[index]
    var cardElement = document.createElement("div"); // <div></div>
    cardElement.innerHTML = cards[index]; // <div>harry</div>
    cardElement.classList.add("card"); //<div class="card">harry</div>
    cardElement.dataset.person = cards[index]; //<div class="card" data-person="harry">harry</div>
    cardElement.dataset.id = index; //<div class="card" data-person="harry" data-id="0">harry</div>
   
    // kaart toevoegen aan het spelletje
    gameElement.append(cardElement);
}

// card moeten luisten naar klik
var cardElements = document.querySelectorAll(".card"); // [element1, element2, .., element8]
var activeCards = [];
var amountOfFailed = 0;

for (var index = 0; index < cardElements.length; index ++) {
    cardElements[index].addEventListener("click", function() {
        // active card is unique SOISO toevoegen aan de active cards
        if (activeCards.length == 0) {
            activeCards.push(this); // geselecteerde kaart toevoegen aan een array
            this.classList.add("visible");
        }

        //
        if (activeCards.length == 1 ) {
            if (activeCards[0].dataset.id != this.dataset.id) {
                activeCards.push(this); // geselecteerde kaart toevoegen aan een array
                this.classList.add("visible");
            }
        }

        if (activeCards.length == 2) {
            // checken of ze dezelfde zijn
            if (activeCards[0].dataset.person == activeCards[1].dataset.person) {
                // We hebben een match kaart 1 en kaart 2 mogen actief blijven
                activeCards[0].classList.add("guessed");
                activeCards[1].classList.add("guessed");

                // geen active kaartjes meer
                activeCards = [];
            } else {
                // ze zijn blijkbaar fout amount + 1 en aanpassen in mijn html
                amountOfFailed++;
                document.querySelector("#failed-attempts").innerHTML = amountOfFailed;

                // wacht ressekes en draait ze om
                setTimeout(function() {
                    // Draai kaart om door visible te verwijderen
                    activeCards[0].classList.remove("visible");
                    activeCards[1].classList.remove("visible");

                    // geen active kaartjes meer
                    activeCards = [];
                }, 1000)
            }
        }
    });
}