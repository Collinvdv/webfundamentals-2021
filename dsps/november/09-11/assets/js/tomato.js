var tomatos = document.querySelectorAll(".js-tomato");
var tomatoSpecial = document.querySelector("#js-special-tomato");
var tomatoImage = document.querySelector(".js-image-tomato");
console.log(tomatoImage);

// Click the image make it a yellow tomato
tomatoImage.addEventListener("click", function() {
    console.log("you touched the tomato")
    this.setAttribute("src", "assets/img/yellow-tomato.jpeg");
    this.setAttribute("alt", "yellow tomato");
});

// make the tomato special move
var tomatoSpecialStart = 0;
tomatoSpecial.addEventListener("mouseover", function() {
    tomatoSpecialStart += 10;

    this.style.marginLeft = tomatoSpecialStart + "px";
})

// Change of color
for (var index = 0; index < tomatos.length; index++) {
    var tomato = tomatos[index];

    tomato.addEventListener("click", function() {
        // make everything red
        for (var i = 0; i < tomatos.length; i++) {
            tomatos[i].classList.remove("tomato-blue");
        }

        // make the new one blue
        this.classList.add("tomato-blue");
    });
}

// .style -> is used to add new css
// this.style.backgroundColor = "blue";
        // background-color: blue;
        // backgroundColor = "blue";
// .classList -> is used to change the classes of a specific element