//  Product Carousel 1
const slider1 = new Splide("#product-carousel1", {
  direction: "rtl",
  perPage: 4,
  perMove: 1,
  gap: "20px",
  arrows: false,
  pagination: false,
  breakpoints: {
    1260: { perPage: 3 },
    1024: { perPage: 2 },
    480: { perPage: 1 },
  },
});

slider1.mount();

document.getElementById("prevBtn1").onclick = () => slider1.go("<");
document.getElementById("nextBtn1").onclick = () => slider1.go(">");

// Product Carousel 2
const slider2 = new Splide("#product-carousel2", {
  direction: "rtl",
  perPage: 4,
  perMove: 1,
  gap: "20px",
  arrows: false,
  pagination: false,
  breakpoints: {
    1260: { perPage: 3 },
    1024: { perPage: 2 },
    480: { perPage: 1 },
  },
});

slider2.mount();

document.getElementById("prevBtn2").onclick = () => slider2.go("<");
document.getElementById("nextBtn2").onclick = () => slider2.go(">");

// Product Carousel 3
const slider3 = new Splide("#product-carousel3", {
  direction: "rtl",
  perPage: 4,
  perMove: 1,
  gap: "20px",
  arrows: false,
  pagination: false,
  breakpoints: {
    1260: { perPage: 3 },
    1024: { perPage: 2 },
  },
});

slider3.mount();

document.getElementById("prevBtn3").onclick = () => slider3.go("<");
document.getElementById("nextBtn3").onclick = () => slider3.go(">");

// Review Toggle Height
const reviewContent = document.getElementById("review-content");
const reviewShadow = document.getElementById("review-shadow");
const reviewToggleBtn = document.getElementById("reviewToggleBtn");

reviewToggleBtn.addEventListener("click", function () {
  reviewContent.classList.toggle("h-[200px]");
  reviewContent.classList.toggle("h-auto");
  reviewShadow.classList.toggle("hidden");
  reviewToggleBtn.classList.toggle("*:rotate-180");
});

// Products Mobile ToggleHeight
const productsContent = document.getElementById("products-content");
const productsShadow = document.getElementById("products-shadow");
const productsToggleBtn = document.getElementById("productsToggleBtn");

productsToggleBtn.addEventListener("click", function () {
  productsContent.classList.toggle("h-[500px]");
  productsContent.classList.toggle("h-auto");
  productsShadow.classList.toggle("hidden");
  productsToggleBtn.classList.toggle("*:rotate-180");
});

const productsContent2 = document.getElementById("products-content2");
const productsShadow2 = document.getElementById("products-shadow2");
const productsToggleBtn2 = document.getElementById("productsToggleBtn2");

productsToggleBtn2.addEventListener("click", function () {
  productsContent2.classList.toggle("h-[500px]");
  productsContent2.classList.toggle("h-auto");
  productsShadow2.classList.toggle("hidden");
  productsToggleBtn2.classList.toggle("*:rotate-180");
});

const productsContent3 = document.getElementById("products-content3");
const productsShadow3 = document.getElementById("products-shadow3");
const productsToggleBtn3 = document.getElementById("productsToggleBtn3");

productsToggleBtn3.addEventListener("click", function () {
  productsContent3.classList.toggle("h-[500px]");
  productsContent3.classList.toggle("h-auto");
  productsShadow3.classList.toggle("hidden");
  productsToggleBtn3.classList.toggle("*:rotate-180");
});

// Experiences Carousel
const expSlider = new Splide("#exp-carousel", {
  direction: "rtl",
  perPage: 2,
  perMove: 1,
  gap: "20px",
  arrows: false,
  pagination: false,
  breakpoints: {
    1260: { perPage: 2 },
    1024: { perPage: 1 },
    600: { perPage: 1 },
    480: { perPage: 1 },
  },
});

expSlider.mount();

document.getElementById("expPrevBtn").onclick = () => expSlider.go("<");
document.getElementById("expNextBtn").onclick = () => expSlider.go(">");

// Gallery Carousel
const gallerySlider = new Splide("#gallery-carousel", {
  direction: "rtl",
  gap: "1rem",
  pagination: false,
  arrows: false,
  breakpoints: {
    768: { pagination: true },
  },
});

var galleryThumbnails = document.getElementsByClassName("gallery-thumbnail");
var current;

for (var i = 0; i < galleryThumbnails.length; i++) {
  initThumbnail(galleryThumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    gallerySlider.go(index);
  });
}

gallerySlider.on("mounted move", function () {
  var thumbnail = galleryThumbnails[gallerySlider.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

gallerySlider.mount();

document.getElementById("galleryPrevBtn").onclick = () => gallerySlider.go("<");
document.getElementById("galleryNextBtn").onclick = () => gallerySlider.go(">");

// Lightbox Carousel
document.getElementById("openLightbox").addEventListener("click", () => {
  document.getElementById("lightbox-wrapper").classList.remove("hidden");
});

const lightbox = new Splide("#lightbox-carousel", {
  direction: "rtl",
  perPage: 1,
  pagination: false,
  arrows: true,
});

var lightboxThumbnails = document.getElementsByClassName("lightbox-thumbnail");
var currentLight;

for (var i = 0; i < lightboxThumbnails.length; i++) {
  initLightThumbnail(lightboxThumbnails[i], i);
}

function initLightThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    lightbox.go(index);
  });
}

lightbox.on("mounted move", function () {
  var thumbnail = lightboxThumbnails[lightbox.index];

  if (thumbnail) {
    if (currentLight) {
      currentLight.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    currentLight = thumbnail;
  }
});

lightbox.mount();

document.getElementById("closeLightbox").addEventListener("click", () => {
  document.getElementById("lightbox-wrapper").classList.add("hidden");
});

// Product Navigation 
const openProductNavMenuBtn = document.getElementById("openProductNavMenuBtn");
const productNavMenu = document.getElementById("productNavMenu");
const productNavPanel = document.getElementById("productNavPanel");

openProductNavMenuBtn.addEventListener("click", () => {
  productNavMenu.classList.remove("opacity-0", "pointer-events-none");
  productNavPanel.classList.remove("translate-y-[470px]");

  document.body.classList.add("overflow-hidden");
});

function closeProductPanel() {
  productNavPanel.classList.add("translate-y-[470px]");

  setTimeout(() => {
    productNavMenu.classList.add("opacity-0", "pointer-events-none");
    openProductNavMenuBtn.classList.remove("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 300);
}

// ------------ Toggle Check -------------- //
if (window.innerWidth < 768) {
  document.getElementById("tech-info-check-1").checked = false;
}

