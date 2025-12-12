// Product Brand Carousel
const productBrandSlider = new Splide("#product-brand-carousel", {
  direction: "rtl",
  perMove: 1,
  gap: "20px",
  arrows: false,
  pagination: false,
  autoWidth: true,
});

productBrandSlider.mount();

document.getElementById("productBrandPrevBtn").onclick = () =>
  productBrandSlider.go("<");
document.getElementById("productBrandNextBtn").onclick = () =>
  productBrandSlider.go(">");

// Product Size Carousel
const productSizeSlider = new Splide("#product-size-carousel", {
  direction: "rtl",
  perMove: 1,
  gap: "20px",
  arrows: false,
  pagination: false,
  autoWidth: true,
});

productSizeSlider.mount();

document.getElementById("productSizePrevBtn").onclick = () =>
  productSizeSlider.go("<");
document.getElementById("productSizeNextBtn").onclick = () =>
  productSizeSlider.go(">");

// Product Special Carousel
const productSpecialSlider = new Splide("#product-special-carousel", {
  direction: "rtl",
  perMove: 1,
  gap: "20px",
  arrows: false,
  pagination: false,
  autoWidth: true,
});

productSpecialSlider.mount();

document.getElementById("productSpecialPrevBtn").onclick = () =>
  productSpecialSlider.go("<");
document.getElementById("productSpecialNextBtn").onclick = () =>
  productSpecialSlider.go(">");

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

// Search Panel
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
