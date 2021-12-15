<?php
    class Database {

        public $hostname; //127.0.0.1
        public $username;
        public $password;
        public $databasename;
        public $connection;

        // create instance
        public function __construct($hostname, $username, $password, $databasename)
        {
            $this->hostname = $hostname;
            $this->username = $username;
            $this->password = $password;
            $this->databasename = $databasename;

            $this->connection = $this->createConnection();
        }

        function createConnection() {
            $port = 8889; //3306

            $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->databasename, $port);

            if ($connection == false) {
                echo "the credentials are not correct";
                die();
            }

            return $connection;
        }

        function getQuery($sql) {
            return mysqli_query($this->connection, $sql)->fetch_all(MYSQLI_ASSOC);
        }

        function insertQuery($sql) {
            mysqli_query($this->connection, $sql);
        }
    }