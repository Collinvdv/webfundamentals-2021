//dataset
var characters = [
    {
        name: "Gringer",
        image: "gringer.png"
    },
    {
        name: "Hermione",
        image: "hermione.png"
    },
    {
        name: "Sneep",
        image: "sneep.png"
    },
    {
        name: "Voldemort",
        image: "voldemort.png"
    },
];

// references with html element
var characterNameEl = document.querySelector("#character-name");
var characterImageEl = document.querySelector("#character-image");
var buttonElements = document.querySelectorAll(".button");

var activeIndex = 0;
var likes = [];
var dislikes = [];

// load first character
changeCharacter();

// events
for (var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener("click", function() {
        like(this.dataset.like);
    });
}

// functions
function like(isLiked) {
    // add character to an array
    var activeCharacter = characters[activeIndex];
    if (isLiked == "true") {
        likes.push(activeCharacter.name);
    } else {
        dislikes.push(activeCharacter.name);
    }

    // go to next person
    activeIndex++;

    // change the html to the next person
    if (activeIndex == characters.length) {
        hideGame();
    } else {
        changeCharacter();
    }
}

function hideGame() {
    // tinder hiden
    document.querySelector("#tinder").classList.add("hide");

    // results toevoegen 
    var likeElement = document.createElement("p"); // <p></p>
    likeElement.innerHTML = "Likes: " + likes.toString(); //<p>gringer,hermione</p>

    var dislikeElement = document.createElement("p"); // <p></p>
    dislikeElement.innerHTML = "Dislikes: " + dislikes.toString(); //<p>sneep,voldemort</p>

    document.querySelector("#result").append(likeElement);
    document.querySelector("#result").append(dislikeElement);
}

function changeCharacter() {
    var activeCharacter = characters[activeIndex]; // {name: "gringer", image: "gringer.png"}

    characterNameEl.innerHTML = activeCharacter.name;
    characterImageEl.setAttribute("src", "assets/images/" + activeCharacter.image);
}