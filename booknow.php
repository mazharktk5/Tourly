<?php
// 1. Connect to the database
$servername = "localhost";
$username = "root";  // default for XAMPP
$password = "";      // default is empty
$dbname = "travel_booking";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 2. Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $destination = htmlspecialchars($_POST['destination']);
    $checkin = $_POST['checkin'];
    $checkout = $_POST['checkout'];
    $people = (int)$_POST['people'];

    // 3. Prepare and execute SQL query
    $sql = "INSERT INTO bookings (name, email, destination, checkin, checkout, people)
            VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssi", $name, $email, $destination, $checkin, $checkout, $people);

    if ($stmt->execute()) {
        echo "<h2>Booking Successful!</h2>";
        echo "<p>Thank you, <strong>$name</strong>. We have booked your trip to <strong>$destination</strong>.</p>";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
