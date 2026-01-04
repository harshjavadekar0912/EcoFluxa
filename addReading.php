<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
require "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$date = $data['date'];
$water = $data['water'];
$electricity = $data['electricity'];

$sql = "INSERT INTO readings (reading_date, water_usage, electricity_usage)
        VALUES ('$date', '$water', '$electricity')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Reading added successfully"]);
} else {
    echo json_encode(["error" => $conn->error]);
}
?>
