<?php
    screamMyName("Collin");
    screamMyName("Collin");
    screamMyName("Collin");
    screamMyName("Collin");

    $fullname1 = getFullname("collin", "van der vorst");
    
    function screamMyName($name) {
        echo $name;
    }

    function getFullname($firstname, $lastname) {
        return "$firstname $lastname";
    }