<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            $isAuthenticated = true;

            if ($isAuthenticated) {
        ?>
            <p> you are athenticated</p>
        <?php
            } else {
        ?>
            <form action="POST">
                <label>
                    Username
                </label>

                <input type="text" id="username">

                <label>
                    password
                </label>

                <input type="password" id="password">
            </form>
        <?php
            }
        ?>
    </body>
</html>