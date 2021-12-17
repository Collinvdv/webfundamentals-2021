<?php
    include "../db/index.php";

    // /api/addProduct.php?name=prada&color=red
    $name = $_GET["name"]; // Adidas Shoes
    $color = $_GET["color"]; // pink

    if ($name && $color) {

        $database = new Database();
        $products = $database->insertQuery("INSERT INTO `products` (`id`, `name`, `color`) VALUES (NULL, '$name', '$color');");
        echo "new product";
    }