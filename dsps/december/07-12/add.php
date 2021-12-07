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
            Add a spotify song
        </h1>

        <?php
            // fetch the query parameters
            $artist = $_POST["artist"];
            $songname = $_POST["songname"];

            // credentials to access the DB
            $hostname = "localhost"; // also called hostname
            $dbUsername = "spotify";
            $dbPassword = "supersecretpassword";
            $dbName = "spotify";
            // $dbPort = 8889 // port: 3306 sql port

            // $conn = mysqli_connect($hostname, $dbUsername, $dbPassword, $dbName); //default port 3306
            $conn = mysqli_connect($hostname, $dbUsername, $dbPassword, $dbName, 8889);

            // we got a connection I am super happy
            if ($conn == false) {
                echo "Connection failed with DB";
                die();
            }

            // insert a new song to songs
            if ($artist && $songname) {
                // check if it is existing in the table 
                $sqlSelectQuery = "SELECT * FROM SONGS WHERE artist like '$artist' AND songname like '$songname'; ";
                $songs = mysqli_query($conn, $sqlSelectQuery)->fetch_all(MYSQLI_ASSOC);

                if (sizeof($songs) == 0) {
                    $sqlInsertQuery = "INSERT INTO `songs` (`artist`, `songname`) VALUES ('$artist', '$songname'); ";
                    mysqli_query($conn, $sqlInsertQuery);
                    echo "Song is added to spotify";
                } else {
                    echo "Song is already existing";
                }
            }

            // stop listening to the DB
            $conn->close();
        ?>
    </body>
</html>
