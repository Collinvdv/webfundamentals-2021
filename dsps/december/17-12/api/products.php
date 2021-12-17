<?php
    include "../db/index.php";

    $database = new Database();
    $products = $database->selectQuery("select * from products");

    echo json_encode($products);