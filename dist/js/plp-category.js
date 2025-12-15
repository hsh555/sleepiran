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

// ==============================
// Compare List
// ==============================
const compareList = document.getElementById("compareList");
const compareListInfo = document.getElementById("compareListInfo");
const compareCountEl = document.getElementById("compareCount");
const compareListBtn = document.getElementById("compareListBtn");
const removeAllBtn = document.getElementById("removeAll");

const MAX_COMPARE = 3;
let compareItems = [];

// ==============================
// 1️⃣ نمایش دکمه‌های addToCompare
// ==============================
compareListBtn.addEventListener("click", () => {
  document.querySelectorAll(".addToCompare").forEach((btn) => {
    btn.classList.toggle("hidden");
    btn.classList.toggle("flex");
  });
});

// ==============================
// 2️⃣ اضافه‌کردن محصول
// ==============================
document.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".addToCompare");
  if (!addBtn) return;

  if (compareItems.length >= MAX_COMPARE) {
    alert("نمی‌توانید بیشتر از ۳ محصول را مقایسه کنید");
    return;
  }

  const product = addBtn.closest(".productCard");
  if (!product) return;

  const id = product.dataset.id;
  if (!id || compareItems.includes(id)) return;

  const img = product.querySelector(".productImage")?.src;
  if (!img) return;

  compareItems.push(id);
  compareList.insertAdjacentHTML("beforeend", createCompareItem(id, img));

  addBtn.classList.add("hidden");
  product.querySelector(".removeFromCompare")?.classList.remove("hidden");

  updateCompareInfo();
});

// ==============================
// 3️⃣ حذف محصول (تابع مرکزی)
// ==============================
function removeFromCompareById(id) {
  compareItems = compareItems.filter((item) => item !== id);

  const li = compareList.querySelector(`li[data-id="${id}"]`);
  if (li) li.remove();

  const product = document.querySelector(`.productCard[data-id="${id}"]`);
  if (product) {
    product.querySelector(".addToCompare")?.classList.remove("hidden");
    product.querySelector(".removeFromCompare")?.classList.add("hidden");
  }

  updateCompareInfo();
}

// ==============================
// 4️⃣ حذف از داخل لیست مقایسه
// ==============================
compareList.addEventListener("click", (e) => {
  const removeBtn = e.target.closest(".removeCompareItem");
  if (!removeBtn) return;

  const li = removeBtn.closest("li");
  if (!li) return;

  removeFromCompareById(li.dataset.id);
});

// ==============================
// 5️⃣ حذف از روی خود productCard
// ==============================
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".removeFromCompare");
  if (!btn) return;

  const product = btn.closest(".productCard");
  if (!product) return;

  removeFromCompareById(product.dataset.id);
});

// ==============================
// 6️⃣ حذف همه
// ==============================
removeAllBtn.addEventListener("click", () => {
  [...compareItems].forEach((id) => removeFromCompareById(id));
});

// ==============================
// 7️⃣ آپدیت UI
// ==============================
function updateCompareInfo() {
  compareCountEl.textContent = compareItems.length;

  if (compareItems.length) {
    compareList.classList.remove("hidden");
    compareListInfo.classList.remove("hidden");
    compareListInfo.classList.add("flex");
    compareListBtn.classList.add("hidden!");
  } else {
    compareList.classList.add("hidden");
    compareListInfo.classList.add("hidden");
    compareListInfo.classList.remove("flex");
    compareListBtn.classList.remove("hidden!");
  }
}

// ==============================
// 8️⃣ تمپلیت آیتم مقایسه
// ==============================
function createCompareItem(id, img) {
  return `
          <li data-id="${id}">
              <figure class="size-8 xl:size-10 rounded-sm relative overflow-hidden">
                      <img
                        src="${img}" 
                        class="w-full h-full"
                        alt=""
                      />
                      <button
                        class="removeCompareItem flex items-center justify-center absolute top-0 right-0 size-4 rounded-bl-sm bg-white/60 cursor-pointer"
                      >
                        <i>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.6">
                              <path
                                d="M0 0H16V16H4C1.79086 16 0 14.2091 0 12V0Z"
                                fill="white"
                              />
                              <path
                                d="M5.17188 10.8286L10.8287 5.17176"
                                stroke="#FF0000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M10.8287 10.8282L5.17188 5.17139"
                                stroke="#FF0000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                          </svg>
                        </i>
                      </button>
                    </figure>
    </li>
  `;
}
