<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <ul>
            <?php
                $songs = [
                    "billy eilish - new song",
                    "acdc - other song",
                    "charlotte de witte - knal song"
                ];

                foreach ($songs as $song) {
            ?>
                <li class="song">
                    <?php
                        echo $song;
                    ?>
                </li>
            <?php
                }
            ?>
        </ul>
    </body>
</html>