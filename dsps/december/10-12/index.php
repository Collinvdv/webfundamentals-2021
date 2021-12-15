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
            include "components/navigation.php";
        ?>

        <!--  -->
        <h1>
            Spotify app
        </h1>

        <ul>
            <?php
                include "db/index.php";

                $databaseMAMP = new Database("localhost", "spotify-user", "secretpassword", "spotify-app");

                $songs = $databaseMAMP->getQuery("select * from songs;");

                foreach ($songs as $song) {
            ?>
                <li class="song">
                    <?php
                        echo $song["artist"] . " - ". $song["songname"];
                    ?>
                </li>
            <?php
                }
            ?>
        </ul>

        <hr>

        <form action="add.php" method="GET">
            <label for="input-artist">
                Artist
            </label>
            <input type="text" id="input-artist" name="artist">

            <br>

            <label for="input-songname">
                Songname
            </label>
            <input type="text" id="input-songname" name="songname">

            <br>

            <input type="submit" value="add song">
        </form>
    </body>
</html>