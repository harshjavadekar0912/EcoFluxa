<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
require "db.php";

$result = $conn->query("SELECT * FROM readings ORDER BY reading_date DESC");

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
