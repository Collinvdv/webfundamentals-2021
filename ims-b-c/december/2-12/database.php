<?php
    // variabele declaratie
    $firstname = "Collin";
    $lastname = ' \'dmd boy\' Van der Vorst';
    $fullname = $firstname . " " . $lastname;

    echo "<h1>$fullname</h1>";
    echo "<br>";

    // nummers
    $age = 30;
    $length = 1.93;

    // $age += 1;
    // $age ++;

    echo $age + $length; // som
    echo "<br>";

    echo $age - $length; // aftrekken
    echo "<br>";

    echo $age * $length; // multiply
    echo "<br>";

    echo $age / $length; // divide
    echo "<br>";

    echo $age % $length; // module
    echo "<br>";

    // boolean
    $isAwesome = false;
    $isHandsome = true;

    // arrays
    $friends = ["me", "myself", "I"];

    echo $friends[0]; // ME
    echo "<br>";

    echo $friends[2]; // I
    echo "<br>";

    echo sizeof($friends); // 3
    echo "<br>";

    // loopen over array
    for($index = 0; $index < sizeof($friends); $index++) {
        echo $friends[$index];
        echo "<br>";
    }

    foreach ($friends as $index => $friend) {
        echo $index . " " . $friend;
        echo "<br>";
    }

    // associatieve arrays = dictionary (c#)
    $friends = [
        0 => "me",
        1 => "myself",
        2 => "I"
    ];

    $user = [
        "firstname" => "collin",
        "lastname" => "van der vorst",
    ];

    foreach($user as $key => $value) {
        echo "$key is $value";
        echo "<br>";
    }

    #student is slimmer dan mezelf

    /*
        multiline 
        comment
    */

    // single line comment
    const APP_NAME = "collin zijn spotify app";
    echo APP_NAME;

    // 
    $number1 = 20;
    $number2 = 20;

    echo "<br>";
    var_dump($number1 == $number2);

    echo "<br>";
    var_dump($number1 === $number2);

    echo "<br>";
    var_dump($number1 > $number2);

    echo "<br>";
    var_dump($number1 >= $number2);

    echo "<br>";
    var_dump($number1 < $number2);

    echo "<br>";
    var_dump($number1 <= $number2);

    echo "<br>";
    var_dump($number1 != $number2);

    // if conditions
    $age = 20;

    echo "<br>";

    if ($age < 18) {
        echo "ge moogt niet binnen";
    } else if($age >= 18 && $age < 30) {
        echo "je mag binnen";
    } else {
        echo "te oud";
    }

    // switch 
    $fruit = "apple"; 

    echo "<br>";

    if ($fruit == "orange") {
        echo "dat vind ik lekker";
    } else if ($fruit == "apple") {
        echo "neje";
    } else {
        echo "ken ik niet";
    }

    echo "<br>";

    switch ($fruit) {
        case "orange":
            echo "dat vind ik lekker";
            break;
        case "apple":
            echo "neje";
            break;
        default:
            echo "ken ik niet";
            break;
    }

    // while -> eerst checken dan uitvoeren
    $counter = 10;

    while ($counter < 10) {
        echo $counter;
        echo "<br>";

        $counter++;
    }

    // do while -> minstens 1 keer uitvoeren 
    $counter = 10;

    do {
        echo $counter;
        echo "<br>";

        $counter++;
    } while ($counter < 10);