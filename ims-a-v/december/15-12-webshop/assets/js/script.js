// get all data from my own api
fetch("http://localhost:8888/api/products.php")
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        addProducts(data);
    });


function addProducts(products) {
    for (var i = 0; i < products.length; i++) {
        var productElement = document.createElement("div");
        productElement.innerHTML = products[i].name + " " + products[i].color;

        document.body.append(productElement);
    }
}