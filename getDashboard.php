<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
require "db.php";

$result = $conn->query("
  SELECT reading_date, water_usage, electricity_usage
  FROM readings
  ORDER BY reading_date ASC
");

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
