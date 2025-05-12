 document.querySelector('.booking-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const checkin = new Date(document.getElementById('checkin').value);
    const checkout = new Date(document.getElementById('checkout').value);
    const people = parseInt(document.getElementById('people').value);

    let errors = [];

    
    if (name === '') {
      errors.push("Name is required.");
    }

    
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailPattern.test(email)) {
    //   errors.push("Enter a valid email address.");
    // }
    if (email === '') {
      errors.push("Email is required.");
    }

    
    if (destination === '') {
      errors.push("Destination is required.");
    }

   
    if (checkin >= checkout) {
      errors.push("Check-out date must be after check-in date.");
    }

  
    if (isNaN(people) || people < 1) {
      errors.push("Number of people must be at least 1.");
    }

    
    if (errors.length > 0) {
      e.preventDefault(); 
      alert(errors.join('\n'));
    }
  });