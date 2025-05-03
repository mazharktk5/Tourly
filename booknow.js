document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const destination = document.getElementById('destination').value;
  
    alert(`Thank you, ${name}! Your booking for ${destination} has been received.`);
    this.reset(); // clear the form
  });
  