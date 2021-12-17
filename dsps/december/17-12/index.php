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
        My beautiful little webshop
    </h1>

    <ul>
        <?php
            include "db/index.php";

            $database = new Database();
            $products = $database->selectQuery("select * from products");

            foreach($products as $product) {
                echo "<li>" . $product['name'] . " " . $product['color'] . "</li>";
            }
  
        ?>
    </ul>
</body>
</html>

