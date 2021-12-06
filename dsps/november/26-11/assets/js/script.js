// array of characters 
var characters = [
    "harry",
    "ron",
    "hermione",
    "voldemort",
];

// create cards array
var cards = [];

for (var index in characters) {
    // push the first character in cards
    cards.push(characters[index]);

    // push the second character in cards
    cards.push(characters[index]);
}

// LETS SHUFFLE
var shuffledArray = [];

while (cards.length != 0) {
    // create a random index
    var randomIndex = Math.floor(Math.random() * cards.length);

    // take the item of the randomindex push in the new array
    shuffledArray.push(cards[randomIndex]);

    // remove it from the old one
    cards.splice(randomIndex, 1);
}

// overwrite the cards with the shuffled one
cards = shuffledArray;

// create cards elements
var gameElement = document.querySelector("#game");

for (var index = 0; index < cards.length; index++) {
    // create a card with specific settings
    var cardElement = document.createElement("div"); // <div></div>
    cardElement.innerHTML = cards[index]; //<div>harry</div>
    cardElement.classList.add("card"); //<div class="card">harry</div>
    cardElement.dataset.person = cards[index]; // <div class="card" data-person="harry">harry</div>
    cardElement.dataset.id = index; //  <div class="card" data-person="harry" data-id="0">harry</div>

    // we add the cardElement as element inside of game
    gameElement.append(cardElement);
}

// add eventlistener and add the real logic
var cardElements = document.querySelectorAll(".card");
var activeCards = [];
var failedAttempts = 0;

for (var index = 0; index < cardElements.length; index++ ) {
    cardElements[index].addEventListener("click", function() {
        // make the card visible
        if (activeCards.length == 0) {
            this.classList.add("visible");
            activeCards.push(this);
        }

        // check if the card that you clicked is different then the card which is already in activeCards
        if (activeCards.length == 1) {
            if(activeCards[0].dataset.id != this.dataset.id) {
                this.classList.add("visible");
                activeCards.push(this);
            }
        }

        // check if they are the same 
        if (activeCards.length == 2) {
            if (activeCards[0].dataset.person == activeCards[1].dataset.person) {
                // turn it freen
                activeCards[0].classList.add("guessed");
                activeCards[1].classList.add("guessed");

                // make the active cards empty again
                activeCards = [];
            } else {
                // change failed attempts
                failedAttempts++;
                document.querySelector("#failed-attempts").innerHTML = failedAttempts;

                // wait 1 seconds change the class visible
                setTimeout(function() {
                    // turn it freen
                    activeCards[0].classList.remove("visible");
                    activeCards[1].classList.remove("visible");

                    // make the active cards empty again
                    activeCards = [];
                }, 1000);
            }
        }
    });
}