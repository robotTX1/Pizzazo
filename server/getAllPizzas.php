<?php
require_once "db.php";

$sql = "SELECT * FROM products";

$result = $db -> query($sql);

echo json_encode($result -> fetchAll());