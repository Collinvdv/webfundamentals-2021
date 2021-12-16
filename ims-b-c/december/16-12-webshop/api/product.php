<?php
    include "../db/index.php";

    $databaseLocal = new Database("localhost", "root", "root", "webshop-ims-bc", 8889);

    // get all the products
    $productId = $_GET["productId"];
    $products = $databaseLocal->getQuery("select * from products where id = $productId;");

    echo json_encode($products);