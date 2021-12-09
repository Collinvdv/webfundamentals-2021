<?php
    class Database {
        private $hostname = "localhost"; // kunde hier ook veranderen naar combell server
        private $dbUser = "spotifyUser";
        private $dbPassword = "supersecretpassword";
        private $dbName = "spotify";
        private $dbPort = 8889;
        private $conn;

        function __construct() {
            $this->conn = $this->createConnection();
        }

        function createConnection() {
            $conn = mysqli_connect($this->hostname, $this->dbUser, $this->dbPassword, $this->dbName, $this->dbPort);

            // checken of de connectie nog werkt
            if ($conn == false) {
                echo "Aj aj t is broke";
                die();
            }

            return $conn;
        }
    
        function getQuery($query) {
            return mysqli_query($this->conn, $query)->fetch_all(MYSQLI_ASSOC);
        }
    
        function InsertQuery($query) {
            mysqli_query($this->conn,$query);
        }
    
        function closeConnection() {
            $this->conn->close();
        }
    }