<?php

$name = $_POST['name'];
$email = $_POST['email'];
$destination = $_POST['destination'];
$checkin = $_POST['checkin'];
$checkout = $_POST['checkout'];
$people = $_POST['people'];


$conn = new mysqli("localhost", "root", "", "tourly");


// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }
if($conn){
    echo "Connection successful";
}


$sql = "INSERT INTO booking(name, email, destination, checkin, checkout, people)
        VALUES ('$name', '$email', '$destination', '$checkin', '$checkout', $people)";

if ($conn->query($sql) === TRUE){
    echo "<h1>Booking Confirmation</h1>";
    echo "<p>Thank you, $name, for booking your trip!</p>";
    echo "<p>Details:</p>";
    echo "<ul>";
    echo "<li>Email: $email</li>";
    echo "<li>Destination: $destination</li>";
    echo "<li>Check-in Date: $checkin</li>";
    echo "<li>Check-out Date: $checkout</li>";
    echo "<li>Number of People: $people</li>";
    echo "</ul>";
    echo "<p>We will send a confirmation email to $email shortly.</p>";
    echo "<p>Thank you for choosing our service!</p>";
    echo "<p><a href='./index.html'>Back to Home</a></p>";
} else {
    die("Connection failed: " . mysqli_connect_error());
}

mysqli_close($conn);
?>
