<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> Spotify list </h1>
        <ul>
            <?php
                $hostname = "localhost"; // kunde hier ook veranderen naar combell server
                $dbUser = "spotifyUser";
                $dbPassword = "supersecretpassword";
                $dbName = "spotify";
                $dbPort = 8889;

                $conn = mysqli_connect($hostname, $dbUser, $dbPassword, $dbName, $dbPort);

                // checken of de connectie nog werkt
                if ($conn == false) {
                    echo "Aj aj t is broke";
                    die();
                }

                // get all songs
                $getSql = "select * from songs;";
                $songs = mysqli_query($conn, $getSql)->fetch_all(MYSQLI_ASSOC);

                foreach ($songs as $song) {
            ?>
                <li class="song" data-id="<?php echo $song['id'];?>">
                    <?php
                        echo $song["artist"] . " - " . $song["songname"];
                    ?>
                </li>
            <?php
                }
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
