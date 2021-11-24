var personElements = document.querySelectorAll(".person");

for (var index = 0; index < personElements.length; index++) {
    personElements[index].addEventListener("click", function() {
        changeElementClassByGender(this); // this = personElements 
    });
}

function changeElementClassByGender(element) {
    var gender = element.dataset.gender;

    if (gender == "male") {
        // make it blue
        element.classList.add("male");
    } else {
        // make it pink
        element.classList.add("female");
    }
}
