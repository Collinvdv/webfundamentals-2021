<?php
    // get parameters
    $artist = $_GET["artist"];
    $songname = $_GET["songname"];

    // get connection DB
    include "db/index.php";

    // connection maken
    $conn = makeConnectionWithDatabase();

    // check if song is existing
    $getSql = "select * from songs where artist like '$artist' and songname like '$songname'";
    $songs = getQuery($conn, $getSql);

    // insert query
    if (sizeof($songs) > 0) {
        echo "Sorry maatje hij bestaat al";
    } else {
        insertQuery($conn, "INSERT INTO songs (artist, songname) VALUES ('$artist', '$songname');");

        header("Location: http://localhost:8888"); // redirect
    }

    // connection closed
    $conn->close();