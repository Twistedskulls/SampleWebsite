  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("open");
  }

  function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const errorBox = document.getElementById("formError");

    let errors = [];

    // Reset styles
    name.classList.remove("error");
    email.classList.remove("error");
    message.classList.remove("error");
    errorBox.textContent = "";

    // Name validation
    if (name.value.trim() === "") {
      errors.push("Please enter your name.");
      name.classList.add("error");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      errors.push("Please enter a valid email address.");
      email.classList.add("error");
    }

    // Message validation
    if (message.value.trim().length < 10) {
      errors.push("Your message should be at least 10 characters.");
      message.classList.add("error");
    }

    // Show errors if any
    if (errors.length > 0) {
      errorBox.textContent = errors.join(" ");
      return false; // prevent form submission
    }

    // Success message (optional)
    errorBox.style.color = "#4CAF50";
    errorBox.textContent = "Message sent successfully!";

    return true; // allow form submission
  }
