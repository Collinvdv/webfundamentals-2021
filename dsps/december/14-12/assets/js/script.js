// initial state of the program
var characters = [
    {
        name: "Hermione",
        asset: "hermione.png"
    },
    {
        name: "Gringer",
        asset: "gringer.png"
    },
    {
        name: "Sneep",
        asset: "sneep.png"
    },
    {
        name: "Voldemort",
        asset: "voldemort.png"
    },
];

var titleCharacterElement = document.querySelector("#title-character-name");
var imageCharacterElement = document.querySelector("#tinder-image");
var buttonLike = document.querySelector("#button-like");
var buttonDislike = document.querySelector("#button-dislike");
var tinderElement = document.querySelector("#tinder");
var resultsElement = document.querySelector("#results");

var activeIndex = 0;

var dislikes = [];
var likes = [];

// load the first character
changeCharacter();

// Event listeners
buttonLike.addEventListener("click", function() {
    like(true);
});

buttonDislike.addEventListener("click", function() {
    like(false);
});

// Functions
function like(hasLiked) {
    // get the current character
    var character = characters[activeIndex];

    // push to array
    if (hasLiked) {
        likes.push(character.name);
    } else {
        dislikes.push(character.name);
    }

    // go to next character 
    activeIndex ++;

    // change the character
    if (activeIndex == characters.length) {
        showTheEnd();
    } else {
        changeCharacter();
    }
}

function showTheEnd() {
    // hide tinder
    tinderElement.classList.add("hide");

    // show the end results
    var resultsLike = document.createElement("p");
    resultsLike.innerHTML = "Likes: " + likes.toString();
    resultsElement.appendChild(resultsLike);

    var resultsDislike = document.createElement("p");
    resultsDislike.innerHTML = "Dislikes: " + dislikes.toString();
    resultsElement.appendChild(resultsDislike);
}

function changeCharacter() {
    // fetch the correct character
    var character = characters[activeIndex];

    // change some html
    titleCharacterElement.innerHTML = character.name;
    imageCharacterElement.setAttribute("src", "assets/images/" + character.asset);
}
