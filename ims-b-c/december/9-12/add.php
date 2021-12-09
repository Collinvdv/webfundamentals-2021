<?php
    // include connection functionallity
    include "php_library/db/connection.php";

    // get connection with DB
    $database = new Database();
    $database->createConnection();

    // insert statement
    // get query parameters ?artist=X&songname=Y
    $artist = $_GET["artist"]; // X
    $songname = $_GET["songname"]; // Y;

    // get sql
    $sqlGet = "select * from songs where artist like '$artist' and songname like '$songname';";
    $songs = $database->getQuery($sqlGet);

    if (sizeof($songs) > 0 ) {
        echo "hij bestaat al ";
    } else {
        // create sql
        $sqlInsert = "INSERT INTO songs (artist,songname) VALUES ('$artist', '$songname');";
        $database->InsertQuery($sqlInsert);

        header("Location: http://localhost:8888/index.php");
        // http://localhost:8888/add.php?artist=ruppelsoldaten&songname=de+genezing
    }

    closeConnection($conn);