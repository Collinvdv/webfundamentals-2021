<?php
    class Database {
        // properties
        private $hostname = "localhost";
        private $username = "root";
        private $password = "root";
        private $database = "webshop-dsps";
        private $port = 8889; // 3306
        public $conn;

        // constructor
        public function __construct()
        {
            $this->conn = $this->getConnection();
        }

        // methods
        private function getConnection() {
            $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->database, $this->port);

            if ($connection == false) {
                echo "no connection with the database";
                die();
            }

            return $connection;
        }

        public function selectQuery($sql) {
            return mysqli_query($this->conn, $sql)->fetch_all(MYSQLI_ASSOC);
        }

        public function insertQuery($sql) {
            mysqli_query($this->conn, $sql);
        }
    }
