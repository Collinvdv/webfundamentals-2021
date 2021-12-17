<?php
    include "../db/index.php";

    $productId = $_GET["id"]; // 1
    $database = new Database();
    $products = $database->selectQuery("select * from products where id = $productId");

    echo json_encode($products);