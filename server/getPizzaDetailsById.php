<?php
require_once "db.php";

extract($_GET);

$sql = "SELECT size, price FROM `pricelist` WHERE product_id = $id ORDER BY size ASC";

$result = $db -> query($sql);

echo json_encode($result -> fetchAll());