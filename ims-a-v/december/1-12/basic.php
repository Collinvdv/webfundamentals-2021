<?php
    // declaratie van variable met string
    $firstName = "Collin";
    $lastName = 'Van der \'Vorst';

    echo $firstName;
    echo "<br/>";
    echo $lastName;

    echo "<br/>";
    var_dump($firstName);

    // concatenatie van strings USE .
    echo "<br/>";
    $fullname = $firstName . " " . $lastName;
    echo $fullname;

    // nummertjes 
    $age = 30; //integer
    $length= 1.94; //double

    // boolean
    $isAwesome = true;
    $isRich = false;

    // array
    $friends = ["me", "myself", "i"];

    echo "<br/>";
    echo "Length of friends is " . sizeof($friends); // 3

    for ($index = 0; $index < sizeof($friends); $index++) {
        echo "<br/>";
        echo $friends[$index];
    }

    $friends = ["me", "myself", "i"];
    foreach ($friends as $index => $friend) {
        // $friend = "me";
        echo "<br/>";
        echo  $friend;
    }

    // assiotative array
    // $friends = [
    //     0 => "me",
    //     1 => "myself",
    //     2 => "i"
    // ];

    // commentje

    /*
        shut up 
        aub

    */
    $user = [
        "firstname" => "Collin",
        "lastname" => "Van der Vorst"
    ];

    foreach ($user as $key => $value) {
        echo $key . " : " .$value;
        echo "<br>";
    }


    const APP_NAME = "Collins app";

    // arethmic operators 
    $number1 = 5;
    $number2 = 10;

    echo $number1 + $number2; // 15
    echo $number1 - $number2; // -5
    echo $number1 * $number2; // 50
    echo $number1 / $number2; // 0.5
    echo $number1 % $number2; // 5

    // if 
    $age = 14;
    $isFemale = true;

    if ($age < 16 && $isFemale == false) {
        echo "Je mag geen pintjes drinken";
    } else if ($age < 18 && $isFemale == false) {
        echo "Je mag pintjes drinken";
    } else {
        echo "Je mag alles drinken wat je wil";
    }


    // <
    // <=
    // >
    // >=
    // == value dezelfde is
    // === value en de type dezelfde is
    // != value niet dezelfde

    // && => AND operator
    // || => OR operator
    // and
    // or


    $fruit = "orange";

    switch ($fruit) {
        case "orange":
            echo "da's gezond";
            break;

        case "apple":
            echo "da's gezond en groen";
            break;

        default:
            echo "Ik kan dat niet";
            break;
    }

    // 
    $counter = 0; 

    while ($counter < 10) {
        echo $counter;

        $counter++;
    }