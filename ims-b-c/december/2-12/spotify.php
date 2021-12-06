<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> Spotify</h1>

        <?php
            $songs = [
                "billie ajlisch" => [
                    "happier then ever",
                    "new song"
                ],
                "charlotte de witte" => [
                    "een schijf"
                ]
            ];

            createPlaylist($songs);

            $oldSongs = [
                "pearl jam" => [
                    "alive"
                ],
                "nick cave" => [
                    "into my arms"
                ]
            ];

            createPlaylist($oldSongs, "Old music");

            function createPlaylist($songs, $genre = "New music") {
                echo "<h2>$genre</h2>";
                echo "<ul>";

                foreach ($songs as $artist => $artistSongs) {
                    foreach($artistSongs as $song) {
                        echo "<li>$artist - $song</li>";
                    }
                }

                echo "</ul>";

            }
        ?>
    </body>
</html>