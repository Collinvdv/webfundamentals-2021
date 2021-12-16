<?php
    include "../db/index.php";

    // test database
    $database = new Database();
    $products = $database->getQuery("select * from products;");

    echo json_encode($products);