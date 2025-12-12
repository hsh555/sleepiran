// -------------- OTP INPUTS --------------- //
const inputs = document.querySelectorAll(".otp-input");

if (inputs) {
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
}

// ------------- Hide Bottom Nav When Scrolling --------------- //
const bottomNav = document.getElementById("bottom-nav");

if (bottomNav) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      bottomNav.classList.add("hide");
    } else {
      bottomNav.classList.remove("hide");
    }
  });
}

// ------------ Toggle Check -------------- //
if (window.innerWidth < 768) {
  document.getElementById("footer-list-check-1").checked = false;
  document.getElementById("footer-list-check-2").checked = false;
  document.getElementById("footer-list-check-3").checked = false;
}

// Scroll Wrapper
const wrappers = document.querySelectorAll(".scroll-wrapper");

wrappers.forEach((wrapper) => {
  const content = wrapper.querySelector(".scroll-content");
  const thumb = wrapper.querySelector(".scroll-thumb");
  const bar = wrapper.querySelector(".scroll-bar");

  if (!content || !thumb || !bar) return;

  function updateThumb() {
    const ratio = content.clientHeight / content.scrollHeight;
    thumb.style.height = ratio * content.clientHeight + "px";
    thumb.style.top =
      (content.scrollTop / content.scrollHeight) * content.clientHeight + "px";
  }

  content.addEventListener("scroll", updateThumb);

  let isDragging = false;
  let startY = 0;
  let startScrollTop = 0;

  thumb.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
    startScrollTop = content.scrollTop;
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const delta = e.clientY - startY;
    const scrollDelta = delta * (content.scrollHeight / content.clientHeight);
    content.scrollTop = startScrollTop + scrollDelta;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // آپدیت اولیه
  updateThumb();

  // مخفی کردن thumb و bar اگر محتوا کوچکتر باشد
  function checkVisibility() {
    if (content.scrollHeight <= content.clientHeight) {
      thumb.style.display = "none";
      bar.style.display = "none";
    } else {
      thumb.style.display = "block";
      bar.style.display = "block";
    }
  }

  checkVisibility();

  // آپدیت همزمان با scroll و تغییر سایز
  window.addEventListener("resize", () => {
    updateThumb();
    checkVisibility();
  });

  // برای محتوا داینامیک
  const ro = new MutationObserver(() => {
    updateThumb();
    checkVisibility();
  });
  ro.observe(content, { childList: true, subtree: true, characterData: true });
});
