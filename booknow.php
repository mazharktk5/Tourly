<html>
    <?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $destination = $_POST['destination'];
    $checkin = $_POST['checkin'];
    $checkout = $_POST['checkout'];
    $people = $_POST['people'];

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
    echo "<p><a href='index.html'>Back to Home</a></p>";
    ?>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            background: #fff;
            margin: 5px 0;
            padding: 10px;
            border-radius: 5px;
        }
</html>