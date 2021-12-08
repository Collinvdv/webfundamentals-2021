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
            Spotify
        </h1>

        <!-- song list from a database -->
        <?php
            // credentials to access the DB
            $hostname = "localhost"; // also called hostname
            $dbUsername = "spotify";
            $dbPassword = "supersecretpassword";
            $dbName = "spotify";

            // $dbPort = 8889 // port: 3306 sql port

            // $conn = mysqli_connect($hostname, $dbUsername, $dbPassword, $dbName); //default port 3306
            $conn = mysqli_connect($hostname, $dbUsername, $dbPassword, $dbName, 3306);

            // we got a connection I am super happy
            if ($conn == false) {
                echo "Connection failed with DB";
                die();
            }

            // send a sql query to the connection
            $sqlQuery = "SELECT artist, songname FROM songs;";
            $songs = mysqli_query($conn, $sqlQuery)->fetch_all(MYSQLI_ASSOC);

            foreach($songs as $song) {
        ?>
            <li>
                <?php echo $song["artist"] . " - " . $song["songname"]; ?>
            </li>
        <?php
            }

            // stop listening to the DB
            $conn->close();
        ?>

        <br>
        <hr>

        <h2> Add a song </h2>

        <form action="add.php" method="POST">
            <label for="input-artist">
                Artist
            </label> 
            <br>
            <input type="text" id="input-artist" name="artist">

            <br>
            <label for="input-song">
                Song
            </label> 
            <br>
            <input type="text" id="input-song" name="songname">

            <input type="submit" value="Add song">
        </form>
    </body>
</html>
