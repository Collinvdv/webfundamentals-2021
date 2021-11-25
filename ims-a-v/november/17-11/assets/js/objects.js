var user = {
    username : "collinvdv",
    password: "test123",
    firstName: "Collin",
    lastName: "Van der Vorst",
    age: 30,
    partner: {
        name: "Lisa"
    },
    isHappy: true,
    animals: [
        "pepper",
        "kamiel",
    ],
    getNameOfPartner: function() {
        console.log(this.partner.name);
    },
    getFullname: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(user.username); // collinvdv
var propertyName = "username";
console.log(user[propertyName]); //collinvdv

console.log(user.partner.name);
user.getNameOfPartner();
var fullname = user.getFullname();
console.log(fullname);

console.log(window);
console.log(window.document);