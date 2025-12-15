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
