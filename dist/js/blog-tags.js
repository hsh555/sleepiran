// Complementary Products Carousel
const complementaryProductsSlider = new Splide(
  "#complementary-products-carousel",
  {
    direction: "rtl",
    perMove: 1,
    gap: "20px",
    arrows: false,
    pagination: false,
    autoWidth: true,
  }
);

complementaryProductsSlider.mount();

document.getElementById("complementaryProductsPrevBtn").onclick = () =>
  complementaryProductsSlider.go("<");
document.getElementById("complementaryProductsNextBtn").onclick = () =>
  complementaryProductsSlider.go(">");

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
