<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> Webshop </h1>

        <?php
            include "db/index.php";
            $database = new Database();
            $products = $database->selectQuery("select * from products;");
            var_dump($products);
        ?>
    </body>
</html>
