<?php
    include "../db/index.php";

    $databaseLocal = new Database("localhost", "root", "root", "webshop-ims-bc", 8889);

    // get all the products
    $name = $_GET["name"]; // ?name=500 
    $color = $_GET["color"]; // ?color=white 
    $sqlInsert = "INSERT INTO `products` (`id`, `name`, `color`) VALUES (NULL, '$name', '$color')";
    $databaseLocal->insertQuery($sqlInsert);