<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> Authentication Spotify App</h1>

        <?php
            $isAuthenticated = false;

            if ($isAuthenticated) {
        ?>
            <h2>
                Omg you are in the new spotify app'
            </h2>
        <?php
            } else {
        ?>
            <form>
                <label for="firstname">
                    Firstname
                </label>
                <input type="text" id="firstname" name="firstname" />

                <label for="password">
                    password
                </label>
                <input type="password" id="password" name="password" />
                <input type="submit" value="logged in" />
            </form>
        <?php
            }
        ?>
    </body>
</html>