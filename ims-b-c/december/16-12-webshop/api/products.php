<?php
    include "../db/index.php";

    $databaseLocal = new Database("localhost", "root", "root", "webshop-ims-bc", 8889);

    // get all the products
    $products = $databaseLocal->getQuery("select * from products;");

    echo json_encode($products);