// Main Carousel
const mainSlider = new Splide("#main-carousel", {
  direction: "rtl",
  perPage: 1,
  perMove: 1,
  gap: "1rem",
  arrows: false,
  pagination: true,
});

mainSlider.mount();

document.getElementById("mainPrevBtn").onclick = () => mainSlider.go("<");
document.getElementById("mainNextBtn").onclick = () => mainSlider.go(">");

// Special Carousel
const specialSlider = new Splide("#special-carousel", {
  direction: "rtl",
  perPage: 6,
  perMove: 1,
  autoWidth: true,
  gap: "20px",
  arrows: false,
  pagination: false,
  breakpoints: {
    1060: {gap: '1rem'}
  }
});

specialSlider.mount();

document.getElementById("specialPrevBtn").onclick = () => specialSlider.go("<");
document.getElementById("specialNextBtn").onclick = () => specialSlider.go(">");

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

// Product Carousel 4
const slider4 = new Splide("#product-carousel4", {
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

slider4.mount();

document.getElementById("prevBtn4").onclick = () => slider4.go("<");
document.getElementById("nextBtn4").onclick = () => slider4.go(">");

//  Product Carousel 5
const slider5 = new Splide("#product-carousel5", {
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

slider5.mount();

document.getElementById("prevBtn5").onclick = () => slider5.go("<");
document.getElementById("nextBtn5").onclick = () => slider5.go(">");

// Product Carousel 2
const slider6 = new Splide("#product-carousel6", {
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

slider6.mount();

document.getElementById("prevBtn6").onclick = () => slider6.go("<");
document.getElementById("nextBtn6").onclick = () => slider6.go(">");

// Product Carousel 3
const slider7 = new Splide("#product-carousel7", {
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

slider7.mount();

document.getElementById("prevBtn7").onclick = () => slider7.go("<");
document.getElementById("nextBtn7").onclick = () => slider7.go(">");

// Product Carousel 4
const slider8 = new Splide("#product-carousel8", {
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

slider8.mount();

document.getElementById("prevBtn8").onclick = () => slider8.go("<");
document.getElementById("nextBtn8").onclick = () => slider8.go(">");

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

// Brands Carousel
const brandsSlider = new Splide("#brands-carousel", {
  direction: "rtl",
  perPage: 9,
  perMove: 1,
  autoWidth: true,
  gap: "20px",
  arrows: false,
  pagination: false,
});

brandsSlider.mount();

document.getElementById("brandsPrevBtn").onclick = () => brandsSlider.go("<");
document.getElementById("brandsNextBtn").onclick = () => brandsSlider.go(">");

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

// Blog Carousel
const blogSlider = new Splide("#blog-carousel", {
  direction: "rtl",
  perPage: 2,
  perMove: 1,
  gap: "20px",
  arrows: false,
  pagination: false,
  autoWidth: true,
});

blogSlider.mount();

document.getElementById("blogPrevBtn").onclick = () => blogSlider.go("<");
document.getElementById("blogNextBtn").onclick = () => blogSlider.go(">");