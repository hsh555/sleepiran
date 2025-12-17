

//  Product Carousel 1
const slider1 = new Splide("#product-carousel1", {
  direction: "rtl",
  perPage: 3,
  perMove: 1,
  gap: "20px",
  arrows: false,
  pagination: false,
});

slider1.mount();

document.getElementById("prevBtn1").onclick = () => slider1.go("<");
document.getElementById("nextBtn1").onclick = () => slider1.go(">");

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