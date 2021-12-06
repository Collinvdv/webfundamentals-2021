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
            $isAuthenticated = false;

            if ($isAuthenticated) {
        ?>
            <h3> Nice you are logged in</h3>
        <?php
            } else {
        ?>
            <form>
                <label for="username">
                    Username
                </label>

                <input type="text" id="username" name="username">

                <label for="password">
                    Password
                </label>

                <input type="password" id="password" name="password">

                <input type="submit" value="logged in">
            </form>
        <?php
            }
        ?>
    </body>
</html>