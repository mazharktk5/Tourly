<?php

$name = $_POST['name'];
$email = $_POST['email'];
$destination = $_POST['destination'];
$checkin = $_POST['checkin'];
$checkout = $_POST['checkout'];
$people = $_POST['people'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tourly";

$conn = new mysqli($servername, $username, $password, $dbname);

if (!$conn) {
    echo "Connection not successful";
} else {
    echo "connection established";


$sql = "INSERT INTO booking(name, email, destination, checkin, checkout, people)
        VALUES ('$name', '$email', '$destination', '$checkin', '$checkout', $people)";


//     echo "<h1>Booking Confirmation</h1>";
//     echo "<p>Thank you, $name, for booking your trip!</p>";
//     echo "<p>Details:</p>";
//     echo "<ul>";
//     echo "<li>Email: $email</li>";
//     echo "<li>Destination: $destination</li>";
//     echo "<li>Check-in Date: $checkin</li>";
//     echo "<li>Check-out Date: $checkout</li>";
//     echo "<li>Number of People: $people</li>";
//     echo "</ul>";
//     echo "<p>We will send a confirmation email to $email shortly.</p>";
//     echo "<p>Thank you for choosing our service!</p>";
//     echo "<p><a href='./index.html'>Back to Home</a></p>";

}

mysqli_close($conn);
?>
