
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
      // if (!checkinDate || !checkoutDate || isNaN(checkinDate) || isNaN(checkoutDate)) return showError(id, "Both dates are required.");
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

const hotelOptions = {
  "Tokyo": ["Shinjuku Granbell Hotel", "Park Hyatt Tokyo", "Hotel Sunroute Plaza Shinjuku"],
  "Paris": ["Le Meurice", "Hotel Plaza Athénée", "Hotel du Louvre"],
  "Bali": ["The Legian Bali", "Ayana Resort", "Padma Resort Ubud"],
  "New York": ["The Plaza", "The Standard High Line", "The Ritz-Carlton"],
  "London": ["The Savoy", "The Ritz London", "The Langham"],
  "Istanbul": ["Four Seasons Bosphorus", "Sirkeci Mansion", "Swissotel The Bosphorus"],
  "Maldives": ["Soneva Fushi", "Baros Maldives", "The St. Regis Maldives"],
  "Sydney": ["Park Hyatt Sydney", "Shangri-La Hotel", "The Fullerton Hotel"],
  "Kyoto Temple": ["Kyoto Royal Hotel", "Kyoto Garden Inn", "Gion Luxury Stay"],
  "Burj Khalifa": ["Armani Hotel Dubai", "Address Downtown", "Palace Downtown"],
  "San Miguel": ["Hotel Matilda", "Rosewood San Miguel", "Casa Blanca Boutique"]
};

const hotelDetails = {
  "Tokyo": {
    title: 'Top Hotels in Tokyo',
    image: './assets/images/hotel1.jpeg',
    quote: 'Modern luxury and tradition blend perfectly in Tokyo’s best hotels.'
  },
  "Paris": {
    title: 'Romantic Hotels in Paris',
    image: './assets/images/hotel2.jpeg',
    quote: 'Stay in the heart of Paris and enjoy the city of love.'
  },
  "Bali": {
    title: 'Resorts in Bali',
    image: './assets/images/hotel3.jpeg',
    quote: 'Unwind in paradise with stunning beachfront and jungle resorts.'
  },
  "New York": {
    title: 'Luxury Stays in NYC',
    image: './assets/images/hotel4.jpeg',
    quote: 'Experience the vibrant energy of New York from iconic hotels.'
  },
  "London": {
    title: 'London’s Finest Hotels',
    image: './assets/images/hotel5.jpeg',
    quote: 'History meets elegance in the heart of London.'
  },
  "Istanbul": {
    title: 'Stays in Istanbul',
    image: './assets/images/hotel6.jpeg',
    quote: 'Bridge two continents with comfort and luxury in Istanbul.'
  },
  "Maldives": {
    title: 'Overwater Villas in Maldives',
    image: './assets/images/hotel7.jpeg',
    quote: 'Relax in world-class resorts surrounded by turquoise waters.'
  },
  "Sydney": {
    title: 'Best Hotels in Sydney',
    image: './assets/images/hotel8.jpeg',
    quote: 'Wake up to views of the Opera House and Sydney Harbour.'
  },

  
  "Kyoto Temple": {
    title: 'Top Kyoto Hotels',
    image: './assets/images/gallery-2.jpg',
    quote: 'Experience traditional Japanese hospitality in Kyoto’s finest stays.'
  },
  "Burj Khalifa": {
    title: 'Burj Khalifa Hotels',
    image: './assets/images/hotel9.jpeg',
    quote: 'Stay near the iconic Burj Khalifa and enjoy luxury like never before.'
  },
  "San Miguel": {
    title: 'San Miguel Hotels',
    image: './assets/images/hotel12.jpeg',
    quote: 'Discover charming hotels nestled in the heart of San Miguel.'
  }
};


if (destination) {
  document.getElementById('destination').value = destination;

  const hotels = hotelOptions[destination]; 
  const hotelSelect = document.getElementById('hotel');

  if (hotels && hotelSelect) {
    hotels.forEach(hotel => {
      const option = document.createElement('option');
      option.value = hotel;
      option.textContent = hotel;
      hotelSelect.appendChild(option);
    });
  }

  const content = hotelDetails[destination]; 
  if (content) {
    document.querySelector('.booking-image img').src = content.image;
    document.querySelector('.booking-quote').textContent = content.quote;
  
    // document.querySelector('.booking-header h1').textContent = content.title;
  }
}
