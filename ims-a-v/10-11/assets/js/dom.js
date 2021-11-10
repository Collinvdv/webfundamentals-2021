var tomaatElement = document.querySelector(".tomaat");
tomaatElement.style.backgroundColor = "red";


tomaatElement.parentElement.style.backgroundColor = "green";
tomaatElement.parentElement.style.padding = "20px";

console.log(tomaatElement.parentElement.parentElement);

var moestuinElement = document.querySelector(".moestuin");
console.log(moestuinElement.children);


// .innerHtml = ""; wijzigt html in het element
// .style.backgroundColor = ""; wijzigt css 
// .classList.add("is-active"); 
// .classList.remove("is-active");
// .addEventListeneter("event", function)
// .parentElement geeft de referntie van de parent terug
// .children()
// .setAttribute

tomaatElement.classList.add("is-active");

tomaatElement.setAttribute("javascript", "is moeilijk");

// moestuinElement.removeChild(tomaatElement);



var slaElement = document.createElement("div");
slaElement.classList.add("sla");
slaElement.innerHTML = "sla";
// <div class="sla"></div>

moestuinElement.prepend(slaElement);




console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);