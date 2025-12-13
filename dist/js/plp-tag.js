// Complementary Products Carousel
const complementaryProductsSlider = new Splide("#complementary-products-carousel", {
  direction: "rtl",
  perMove: 1,
  gap: "20px",
  arrows: false,
  pagination: false,
  autoWidth: true,
});

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

// guide Toggle Height
const guideContent = document.getElementById("guide-content");
const guideShadow = document.getElementById("guide-shadow");
const guideToggleBtn = document.getElementById("guideToggleBtn");

guideToggleBtn.addEventListener("click", function () {
  guideContent.classList.toggle("h-[200px]");
  guideContent.classList.toggle("h-auto");
  guideShadow.classList.toggle("hidden");
  guideToggleBtn.classList.toggle("*:rotate-180");
});

// Mobile Filter
const openMobileFilterBtn = document.getElementById("openMobileFilterBtn");
const mobileFilter = document.getElementById("mobileFilter");

// Filter Panel
const filterPanel = document.getElementById("filterPanel");

openMobileFilterBtn.addEventListener("click", () => {
  mobileFilter.classList.remove("opacity-0", "pointer-events-none");
  filterPanel.classList.remove("translate-x-full");

  document.body.classList.add("overflow-hidden");
});

function closeMobileFilter() {
  filterPanel.classList.add("translate-x-full");

  setTimeout(() => {
    mobileFilter.classList.add("opacity-0", "pointer-events-none");
    openMobileFilterBtn.classList.remove("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 300);
}
