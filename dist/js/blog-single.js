
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