// -------------- OTP INPUTS --------------- //
const inputs = document.querySelectorAll(".otp-input");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value === "") {
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});

// ------------- Hide Bottom Nav When Scrolling --------------- //
const bottomNav = document.getElementById('bottom-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    bottomNav.classList.add('hide');
  } else {
    bottomNav.classList.remove('hide');
  }
});

// ------------ Toggle Check -------------- //
  if (window.innerWidth < 768) {
    document.getElementById("tech-info-check-1").checked = false;
    document.getElementById("footer-list-check-1").checked = false;
    document.getElementById("footer-list-check-2").checked = false;
    document.getElementById("footer-list-check-3").checked = false;
  }
