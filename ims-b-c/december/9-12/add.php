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

    // insert statement
    // get query parameters ?artist=X&songname=Y
    $artist = $_GET["artist"]; // X
    $songname = $_GET["songname"]; // Y;

    // get sql
    $sqlGet = "select * from songs where artist like '$artist' and songname like '$songname';";
    $songs = mysqli_query($conn, $sqlGet)->fetch_all(MYSQLI_ASSOC);

    if (sizeof($songs) > 0 ) {
        echo "hij bestaat al ";
    } else {
        // create sql
        $sqlInsert = "INSERT INTO songs (artist,songname) VALUES ('$artist', '$songname');";
        mysqli_query($conn, $sqlInsert);

        echo "song is added";

        header("Location: http://localhost:8888/index.php");
        // http://localhost:8888/add.php?artist=ruppelsoldaten&songname=de+genezing
    }