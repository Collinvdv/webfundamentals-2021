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
            // echo will output 
            echo "<h1>My home page</h1>";

            // variables
            $firstname = "Collin";
            $lastname = ' \'Van der Vorst';
            $fullname = "$firstname $lastname"; // $"{firstname} {lastname}"

            echo "<br>";
            echo $fullname;

            // numbers
            $number1 = 5;
            $number2 = 5.5;

            echo $number1 + $number2;
            echo $number1 / $number2;
            echo $number1 * $number2;
            echo $number1 - $number2;
            echo $number1 % $number2;

            // boolean
            $isItAlmostWeekend = true;
            $isAwesome = false;

            var_dump($isAwesome);

            // if 
            if ($isItAlmostWeekend == true) {
                echo "lets go crazy on JS assignments";
            } else {
                echo " I have to school";
            }

            // == value is equal to "20" == 20 -> true
            // === value AND the type are the same  "20" === 20 -> false
            // !=
            // >
            // <
            // <=
            // >=

            // && -> AND operation 
            // || -> OR operation
            // and -> AND operation 
            // or -> AND operation 

            $fruit = "orange";

            switch ($fruit) {
                case "orange":
                    echo "give me a fanta";
                    break;
                case "apple";
                    echo "give me a macbook with a | key on it";
                    break;
                default:
                    echo "I don't know that fruit";
                    break;
            }

            // arrays
            $friends = ["me", "myself", "i"];
            echo $friends[0];

            echo sizeof($friends); //3

            for ($index = 0; $index < sizeof($friends); $index++) {
                echo $friends[$index];
            }

            foreach ($friends as $index => $friend) {
                echo $friend;
            }

            // associateve arrays 
            $friends = [
                0 => "me",
                1 => "myself",
                2 => "i"
            ];

            echo $friends[0];

            $user = [
                "firstname" => "collin",
                "lastname" => "van der vorst"
            ];

            echo $user["firstname"]; //collin
            echo $user["lastname"]; //van der vorst


            // WHILE LOOP 
            $counter = 0;

            while ($counter <= 10) {
                echo "<br>";
                echo $counter;
                echo "<br>";

                $counter++;
            }

            $counter = 0;

            do {
                echo "<br>";
                echo $counter;
                echo "<br>";

                $counter++;
            } while ($counter <= 10);


        ?>
    </body>
</html>