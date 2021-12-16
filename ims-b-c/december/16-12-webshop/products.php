<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>
            Webshop
        </h1>

        <ul id="products">

        </ul>

        <button id="button">
            Add nike sportshoes blue
        </button>

        <form action="http://localhost:8888/api/addProduct.php">
            <input type="text" name="name">
            <input type="text" name="color">
            <input type="submit">
        </form>
        <script>
            fetch("http://localhost:8888/api/products.php")
                .then(function(response) {
                    return response.json();
                })
                .then(function(products){
                    for (var i = 0; i < products.length; i++) {
                        var productElement = document.createElement("li");
                        productElement.innerHTML = products[i].name + " " + products[i].color;

                        document.querySelector("#products").append(productElement);
                    }
                });

            document.querySelector("#button").addEventListener("click", function() {
                fetch("http://localhost:8888/api/addProduct.php?name=nike+sporthoes&color=blue");
            });
        </script>
    </body>
</html>