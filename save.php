<?php
$conn = new mysqli("localhost", "root", "", "ecofluxa");

if ($conn->connect_error) {
    die("Connection failed");
}

$voltage = $_POST['voltage'];
$current = $_POST['current'];
$power = $_POST['power'];

$sql = "INSERT INTO readings (voltage, current, power)
        VALUES ('$voltage', '$current', '$power')";

$conn->query($sql);
$conn->close();
?>
