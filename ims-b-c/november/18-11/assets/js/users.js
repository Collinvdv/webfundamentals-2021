var users = document.querySelectorAll(".user");

for (var i = 0; i < users.length; i++) {
    users[i].addEventListener("click", function() {
        changeElementByGender(this);
    });
}

function changeElementByGender(element) { // element = users[2]
    var gender = element.dataset.gender;

    if (gender == "female") {
        element.style.backgroundColor = "pink";
    } else {
        element.style.backgroundColor = "blue";
    }
}