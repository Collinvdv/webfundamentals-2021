var addTomatoElement = document.querySelector(".js-add-tomato");
var addBrocolliElement = document.querySelector(".js-add-brocolli");
var gardenElement = document.querySelector(".js-garden");

// Add a tomato to garden
addTomatoElement.addEventListener("click", function() {
    // Created a new element <li></li>
    var newTomato = document.createElement("li");
    // Created a new element <li class="tomato"></li>
    newTomato.classList.add("tomato");
    // Created a new element <li class="tomato">tomato</li>
    newTomato.innerHTML = "tomato";

    // make reference to the body append add the new element
    gardenElement.append(newTomato);
});

// Add a brocolli to garden
addBrocolliElement.addEventListener("click", function() {
    // Created a new element <li></li>
    var newBrocolli = document.createElement("li");
    // Created a new element <li class="brocolli"></li>
    newBrocolli.classList.add("brocolli");
    // Created a new element <li class="brocolli">brocolli</li>
    newBrocolli.innerHTML = "brocolli";

    // make reference to the body append add the new element
    gardenElement.append(newBrocolli);
});

// window width
console.log(window.innerWidth);

// window height 
console.log(window.innerHeight);