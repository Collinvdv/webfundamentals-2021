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
            $popularSongs = [
                "Bilie Ajlisch" => "bad guy",
                "K3" => "Waterval",
                "Kelah Ballie" => "Slide"
            ];

            createPlaylist($popularSongs, "popular songs");

            $classicSongs = [
                "Pearl Jam" => "alive",
                "Nick Cave" => "Into my arms"
            ];

            createPlaylist($classicSongs, "old songs");

            $romanticSongs = [
                "Pearl Love" => "alive",
                "Nick Love" => "Into my arms"
            ];

            die();
            createPlaylist($romanticSongs, "love songs");

            function createPlaylist($songs, $listName ) { // $songs = $popularSongs;
                echo "<h2>" . $listName . "</h2>";
                echo "<ul>";

                foreach ($songs as $artist => $song) {
                    $listItem = createSong($artist, $song);

                    echo $listItem;
                }

                echo "</ul>";
            }

            function createSong($artist, $song) {
                $listItem = "<li> " . $artist . " - " . $song . "</li>";

                return $listItem;
            }
        ?>
    </body>
</html>