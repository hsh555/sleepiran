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
