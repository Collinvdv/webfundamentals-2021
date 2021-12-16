<?php
    include "../db/index.php";

    // test database
    if (isset($_GET['id'])) {

        $id = $_GET["id"];
        $database = new Database();
        $products = $database->getQuery("select * from products where id = $id;");

        echo json_encode($products);
    }