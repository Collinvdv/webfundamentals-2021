var users = document.querySelectorAll(".js-user");

for (var index = 0; index < users.length; index++) {
    users[index].addEventListener("click", function() {
        changeElementByGender(this);
    });
}

function changeElementByGender(element) {
    var gender = element.dataset.gender;

    if (gender == "female") {
        element.style.backgroundColor = "pink";
    } else {
        element.style.backgroundColor = "blue";
    }
}