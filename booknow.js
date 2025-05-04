document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.booking-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission to avoid page reload

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const people = document.getElementById('people').value;

    

    let errorMessages = [];

    // Simple Name validation
    if (name === '') {
      errorMessages.push("Full Name is required.");
    }

    // Simple Email validation (checking if it’s empty)
    if (email === '') {
      errorMessages.push("Email is required.");
    }

    // Destination validation
    if (destination === '') {
      errorMessages.push("Destination is required.");
    }

    // Date validation (check if check-in is before check-out)
    if (checkin === '' || checkout === '') {
      errorMessages.push("Both check-in and check-out dates are required.");
    } else if (new Date(checkin) >= new Date(checkout)) {
      errorMessages.push("Check-out date must be after check-in date.");
    }

    // Number of people validation (minimum of 1 person)
    if (people < 1) {
      errorMessages.push("Number of people must be at least 1.");
    }

    // If there are errors, prevent form submission and show the errors
    if (errorMessages.length > 0) {
      alert(errorMessages.join('\n')); // Show all errors in an alert
    } else {
      // Success message
      alert(`Congratulations ${name}, your booking for ${destination} has been successfully submitted!`);
      document.querySelector('.booking-form').reset();

    }
  });
});
