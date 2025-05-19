<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tourly";

$conn = new mysqli($servername, $username, $password, $dbname);

if (!$conn) {
    echo "Connection not successful";
} else {
    echo "connection established";
}

$name = $_POST['name'];
$email = $_POST['email'];
$destination = $_POST['destination'];
$hotel = $_POST['hotel'];
$checkin = $_POST['checkin'];
$checkout = $_POST['checkout'];
$people = $_POST['people'];


$sql = "INSERT INTO booking(Name, Email, Destination, Hotel, Checkin, Checkout, People)
        VALUES ('$name', '$email', '$destination','$hotel', '$checkin', '$checkout', $people)";

$result = mysqli_query($conn, $sql);


 ?>

 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Booking Confirmation</title>
  <style>
    /* Paste your confirmation-card CSS here or link an external CSS file */
    .confirmation-card {
      max-width: 600px;
      margin: 50px auto;
      background: #fff;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #333;
      text-align: center;
    }
    .confirmation-card h1 {
      color: #0077cc;
    }
    .confirmation-card ul {
      list-style: none;
      padding: 0;
      text-align: left;
      margin: 20px auto;
      max-width: 400px;
    }
    .confirmation-card ul li {
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }
    .confirmation-card ul li:last-child {
      border-bottom: none;
    }
    .back-button {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #0077cc;
      color: #fff;
      text-decoration: none;
      border-radius: 8px;
    }
    .back-button:hover {
      background-color: #005fa3;
    }
  </style>
</head>
<body>

  <div class="confirmation-card">
    <h1>Booking Confirmation</h1>
    <p>Thank you, <?php echo htmlspecialchars($name); ?>, for booking your trip!</p>
    <p><strong>Details:</strong></p>
    <ul>
      <li><strong>Email:</strong> <?php echo htmlspecialchars($email); ?></li>
      <li><strong>Destination:</strong> <?php echo htmlspecialchars($destination); ?></li>
      <li><strong>Hotel:</strong> <?php echo htmlspecialchars($hotel); ?></li>
      <li><strong>Check-in Date:</strong> <?php echo htmlspecialchars($checkin); ?></li>
      <li><strong>Check-out Date:</strong> <?php echo htmlspecialchars($checkout); ?></li>
      <li><strong>Number of People:</strong> <?php echo htmlspecialchars($people); ?></li>
    </ul>
    <p>We will send a confirmation email to <strong><?php echo htmlspecialchars($email); ?></strong> shortly.</p>
    <p>Thank you for choosing our service!</p>
    <p><a href="./" class="back-button">Back to Home</a></p>
  </div>

</body>
</html>