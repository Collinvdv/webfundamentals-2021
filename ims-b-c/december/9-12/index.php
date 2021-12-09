<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link type="text/css" rel="stylesheet" href="assets/css/style.css"/>
    </head>
    <body>
        <?php
            include "php_library/components/navigation.php";
        ?>

        <h1> Spotify list </h1>
        <ul>
            <?php
                include "php_library/db/connection.php";
                $database = new Database();
                // get connection with DB
                $database->createConnection();

                // get all songs
                $songs = $database->getQuery("select * from songs;");

                foreach ($songs as $song) {
            ?>
                <li class="song" data-id="<?php echo $song['id'];?>">
                    <?php
                        echo $song["artist"] . " - " . $song["songname"];
                    ?>
                </li>
            <?php
                }

                $database->closeConnection();
            ?>
        </ul>

        <hr>

        <form action="add.php" method="GET">
            <!-- Artist -->
            <label for="input-artist">
                Artist
            </label>
            <br>
            <input type="text" id="input-artist" name="artist">

            <!-- Songname -->
            <br>
            <label for="input-songname">
                Songname
            </label>
            <br>
            <input type="text" id="input-songname" name="songname">

            <!-- Button -->
            <br>
            <input type="submit" value="add the song"/>
        </form>
    </body>
</html>
