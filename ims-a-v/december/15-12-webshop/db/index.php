<?php
     // connectie met DB = easy
     class Database {
         //properties, dataset van een bepaalde class
        private $hostname = "localhost";
        private $username = "root";
        private $password = "root";
        private $database = "webshop-ims-a";
        private $port = 8889;
        public $conn;

        // constructor
        function __construct() {
            $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->database, $this->port);

            if ($connection == false) {
                echo "geen connectie met de code";
                die();
            }

            $this->conn = $connection;

        }

        // methods
        function getQuery($sql) {
            return mysqli_query($this->conn, $sql)->fetch_all(MYSQLI_ASSOC);
        }

     }