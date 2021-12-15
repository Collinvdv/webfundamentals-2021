<?php
    // http://localhost:8888/add.php?artist=taylor+swift&songname=snow
    $artistname = $_GET["artist"];
    $song = $_GET["songname"];

    include "db/index.php";

    $databaseMAMP = new Database("localhost", "spotify-user", "secretpassword", "spotify-app");

    $sqlGet = "select * from songs where artist like '$artistname' AND songname like '$song'";
    $songs = $databaseMAMP->getQuery($sqlGet);

    if (sizeof($songs) == 0) {
        $sqlInsert = "INSERT INTO songs (artist, songname) VALUES ('$artistname', '$song');";
        $databaseMAMP->insertQuery($sqlInsert);

        echo "song is added";

        header("Location: http://localhost:8888");
    } else {
        echo "song is already in the list";
    }


