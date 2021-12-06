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
            <!-- HTML COMMENT -->
        
            <?php
                // this is my first line
                // this is new line
                echo "This is my first title";

                /*
                    var_dump is a function 
                    good to use to check the type and value
                */
                var_dump("this is a test of var_dump");

                /*
                    variable
                */
                // $firstname; // declare a variable
                const APP_NAME = "Collins mansion"; // const is a variable where you can not give it a new value, so it is not that variable

                $firstname = "Collin";
                $lastname = 'Van der Vorst';
                $age = 30;
                $length = 1.93;
                $isHappy = true;
                $isTired = false;

                $width  = 50;
                $height = 100;

                echo "<br>";
                echo $firstname;

                echo "<br>";
                echo $firstname . " " . $lastname; // use . to concatenate strings

                echo "<br>";
                $friends = [ "me", "myself", "i"];

                // loop over an array
                for ($i = 0; $i < sizeof($friends); $i++) {
                    echo $friends[$i];
                    echo "<br>";
                }
            
                foreach ($friends as $friend) {
                    echo $friend;
                    echo "<br>";
                }

                // associated arrays (collection)
                // "collin": 8
                // "youssef": 10
                $user = [
                    "firstname" => "Collin",
                    "lastname" => "Van der Vorst"
                ];

                echo "<br>";
                echo $user["firstname"]; // Collin;
                echo "<br>";
                echo $user["lastname"]; //Van der Vorst

                var_dump($user);
                // die(); die function will stop executing at this line, good for debugging

                foreach ($user as $key => $attribute) {
                    echo "<br>";
                    var_dump($key . ": " . $attribute);
                }


                /*
                    Math operators
                */
                $width = 10;
                $height = 20;

                echo "<br>";
                echo $width + $height; //sum up 2 numbers

                echo "<br>";
                echo $width * $height; //multiply up 2 numbers

                echo "<br>";
                echo $width - $height; //subtract up 2 numbers

                echo "<br>";
                echo $width / $height; //division up 2 numbers

                /*
                    STRINGS
                */
                echo "<br>";
                echo "Collin" . " " . "Van der Vorst";

                /* Conditions */
                $number1 = 14;

                echo "<br>";

                // < smaller then
                // > bigger then
                // <= smaller or equal then 
                // >= bigger or equal then 
                // == check if it is the same value
                // === check if value is the same and the type is the same
                // != check if is not the same value
                // !== not equal to and type
                if ($number1 < 10) {
                    echo "You failed";
                } else if ($number1 > 10 && $number1 < 12) {
                    echo "You passed with a lot of luck";
                } else {
                    echo "I am so proud at you, I have to cry";
                }

                // && => check if multiple expression are the same
                // || => check if one expression is the same 
            ?>
        </h1>
    </body>
</html>
