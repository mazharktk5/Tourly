const toggleBtn = document.getElementById("mode-toggle");
  const icon = toggleBtn.querySelector("i");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change icon
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });

  document.querySelectorAll('.destination-card').forEach(card => {
    card.classList.toggle('dark-mode');
  });
  