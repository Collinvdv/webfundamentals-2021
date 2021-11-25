var carElement = document.querySelector(".js-car"); //this will give me the first occurence
var carElements = document.querySelectorAll(".js-car"); // this will give me a list of elements
var startPosition = 0;

// carElement.addEventListener("click", function() {
//     startPosition += 50;
//     carElement.style.marginLeft = startPosition + "px";
// });

for (var index = 0; index < carElements.length; index++) {
    carElements[index].addEventListener("click", function() {
        startPosition += 50;
        this.style.marginLeft = startPosition + "px";
    });
}