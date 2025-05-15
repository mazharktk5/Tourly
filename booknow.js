
AOS.init({
  duration: 1400,
  once: false,
  mirror: true
});

const form = document.querySelector('.booking-form');
const fields = ['name', 'email', 'destination', 'checkin', 'checkout', 'people'];

function showError(id, message) {
  const input = document.getElementById(id);
  const errorSpan = document.getElementById(id + '-error');
  input.classList.add('error');
  errorSpan.textContent = message;
}

function clearError(id) {
  const input = document.getElementById(id);
  const errorSpan = document.getElementById(id + '-error');
  input.classList.remove('error');
  errorSpan.textContent = '';
}

function validateField(id) {
  const value = document.getElementById(id).value.trim();
  const input = document.getElementById(id);
  
  switch(id) {
    case 'name':
      if (!value) return showError(id, "Name is required.");
      break;
    case 'email':
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) return showError(id, "Email is required.");
      if (!emailPattern.test(value)) return showError(id, "Invalid email format.");
      break;
    case 'destination':
      if (!value) return showError(id, "Destination is required.");
      break;
    case 'checkin':
    case 'checkout':
      const checkinDate = new Date(document.getElementById('checkin').value);
      const checkoutDate = new Date(document.getElementById('checkout').value);
      if (!checkinDate || !checkoutDate || isNaN(checkinDate) || isNaN(checkoutDate)) return showError(id, "Both dates are required.");
      if (checkinDate >= checkoutDate) return showError('checkout', "Check-out must be after check-in.");
      break;
    case 'people':
      const people = parseInt(value);
      if (isNaN(people) || people < 1) return showError(id, "Must be at least 1 person.");
      break;
  }

  clearError(id);
}

fields.forEach(id => {
  document.getElementById(id).addEventListener('blur', () => validateField(id));
});

form.addEventListener('submit', function(e) {
  let hasErrors = false;

  fields.forEach(id => {
    validateField(id);
    if (document.getElementById(id).classList.contains('error')) {
      hasErrors = true;
    }
  });

  if (hasErrors) {
    e.preventDefault();
  }
});



// booknow.js

const params = new URLSearchParams(window.location.search);
const destination = params.get('destination');

// Mapping hotels by destination
const hotelOptions = {
  kyoto: ["Kyoto Royal Hotel", "Kyoto Garden Inn", "Gion Luxury Stay"],
  burj: ["Armani Hotel Dubai", "Address Downtown", "Palace Downtown"],
  sanmiguel: ["Hotel Matilda", "Rosewood San Miguel", "Casa Blanca Boutique"]
};

if (destination) {
  document.getElementById('destination').value = destination;

  const destinationLower = destination.toLowerCase();
  const hotelSelect = document.getElementById('hotel');
  const hotels = hotelOptions[destinationLower];

  // Populate hotel options
  if (hotels) {
    hotels.forEach(hotel => {
      const option = document.createElement('option');
      option.value = hotel;
      option.textContent = hotel;
      hotelSelect.appendChild(option);
    });
  }

  // Optional header/banner customization (like before)
  const hotelDetails = {
    kyoto: {
      title: 'Top Kyoto Hotels',
      image: './assets/images/gallery-2.jpg',
      quote: 'Experience traditional Japanese hospitality in Kyoto’s finest stays.'
    },
    burj: {
      title: 'Burj Khalifa Hotels',
      image: './assets/images/burj-hotel.jpg',
      quote: 'Stay near the iconic Burj Khalifa and enjoy luxury like never before.'
    },
    sanmiguel: {
      title: 'San Miguel Hotels',
      image: './assets/images/sanmiguel-hotel.jpg',
      quote: 'Discover charming hotels nestled in the heart of San Miguel.'
    }
  };

  const content = hotelDetails[destinationLower];
  if (content) {
    // document.querySelector('.booking-header h1').textContent = content.title;
    document.querySelector('.booking-image img').src = content.image;
    document.querySelector('.booking-quote').textContent = content.quote;
  }
}


