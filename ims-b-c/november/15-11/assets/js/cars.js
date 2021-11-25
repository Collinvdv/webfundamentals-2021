var carElements = document.querySelectorAll(".js-car");
var position = 0;

for (var i = 0; i < carElements.length; i++) {
    carElements[i].addEventListener("click", function() {
        position += 10;
        console.log(i);
        this.style.marginLeft = position + "px";
    });
}

var carElement = document.querySelector(".js-car");

carElement.style.height = "1000px"; 
carElement.setAttribute("src", "assets/img/volvo.png");
carElement.setAttribute("javascript", "is kei makkelijk");

document.querySelector("h1").innerHTML = "Cars that drive";
document.querySelector("h1").classList.add("title");
document.querySelector("h1").classList.remove("title");

var title = document.querySelector("h1");
title.parentElement.removeChild(title);

//
// .car { height: 100px };
//