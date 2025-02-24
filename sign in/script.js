// Generate a random CAPTCHA
function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("captcha-text").textContent = captcha;
    return captcha;
  }
  
  // Validate the form
  function validateForm(event) {
    event.preventDefault();
    const captcha = document.getElementById("captcha-text").textContent;
    const userInput = document.getElementById("captcha").value;
  
    if (userInput === captcha) {
      alert("Sign-in successful! Redirecting to the home page...");
      window.location.href = "home.html"; // Redirect to home page
    } else {
      alert("CAPTCHA is incorrect. Please try again.");
      generateCaptcha(); // Regenerate CAPTCHA
    }
  }
  
  // Generate CAPTCHA on page load
  window.onload = generateCaptcha;