<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> Spotify </h1>

        <?php
            $popularSongs = [
                "Billie ajlisihciheij" => [
                    "ocean eyes",
                    "happier then ever"
                ],
                "Justin Bwiebwer" => [
                    "I love myself",
                    "No to be honnest, I love myself"
                ]
            ];
            createPlaylist("Most popular songs", $popularSongs);

            $oldSongs = [
                "Pearl jam" => [
                    "alive"
                ],
                "Nick cave" => [
                    "into my arms",
                    "distant sky"
                ]
            ];
            createPlaylist("Rock songs", $oldSongs);

            function createPlaylist($title, $songs) {
                echo "<h2>$title</h2>";

                echo "<ul>";
                foreach($songs as $artist => $artistSongs) {
                    foreach($artistSongs as $song) {
                        echo "<li class=\"song-item\">$artist - $song</li>";
                    }
                }
                echo "</ul>";
            }
        ?>

    </body>
</html>