// -------------- Mobile Menu --------------- //

const openMenuBtn = document.getElementById("openMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

// Panel Menu Level 1
const menuPanel = document.getElementById("menuPanel");

openMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("opacity-0", "pointer-events-none");
  menuPanel.classList.remove("translate-x-full");

  document.body.classList.add("overflow-hidden");
});

function closeMenu() {
  menuPanel.classList.add("translate-x-full");
  menuPanelLevel2.classList.add("translate-x-[674px]");
  menuPanelLevel3.classList.add("translate-x-[1011px]");
  setTimeout(() => {
    mobileMenu.classList.add("opacity-0", "pointer-events-none");
    openMenuBtn.classList.remove("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 300);
}

// Panel Menu Level 2
const openMenuPanelLevel2Btn = document.getElementById("openMenuLevel2Btn");
const menuPanelLevel2 = document.getElementById("menuPanelLevel2");

openMenuPanelLevel2Btn.addEventListener("click", () => {
  menuPanelLevel2.classList.remove("translate-x-[674px]");
  menuPanelLevel2.classList.add("translate-x-[337px]");
});

function closeMenuLevel2() {
  menuPanelLevel2.classList.remove("translate-x-[337px]");
  menuPanelLevel2.classList.add("translate-x-[674px]");
}

// Panel Menu Level 3
const openMenuPanelLevel3Btn = document.getElementById("openMenuLevel3Btn");
const menuPanelLevel3 = document.getElementById("menuPanelLevel3");

openMenuPanelLevel3Btn.addEventListener("click", () => {
  menuPanelLevel3.classList.remove("translate-x-[1011px]");
  menuPanelLevel3.classList.add("translate-x-[674px]");
  console.log("first");
});

function closeMenuLevel3() {
  menuPanelLevel3.classList.remove("translate-x-[337px]");
  menuPanelLevel3.classList.add("translate-x-[1011px]");
}

const showMobileCategoryBtn = document.getElementById("showMobileCategoryBtn");
const mobileCategoryContent = document.getElementById("mobileCategoryContent");

function showMobileCategoryContent() {
  mobileCategoryContent.classList.toggle("opacity-0");
  mobileCategoryContent.classList.toggle("translate-y-full");
}

document.addEventListener("click", function (event) {
  const isClickInside =
    mobileCategoryContent.contains(event.target) ||
    event.target.id === "showMobileCategoryBtn" ||
    document.getElementById("showMobileCategoryBtn").contains(event.target);

  if (!isClickInside) {
    mobileCategoryContent.classList.add("opacity-0");
    mobileCategoryContent.classList.add("translate-y-full");
  }
});

// Mobile Cart
const openMobileCartBtn = document.getElementById("openMobileCartBtn");
const openMobileCartDeskBtn = document.getElementById("openMobileCartDeskBtn");
const mobileCart = document.getElementById("mobileCart");

// Cart Panel
const cartPanel = document.getElementById("cartPanel");

openMobileCartBtn.addEventListener("click", () => {
  mobileCart.classList.remove("opacity-0", "pointer-events-none");
  cartPanel.classList.add("translate-x-full");

  document.body.classList.add("overflow-hidden");
});

if (openMobileCartDeskBtn) {
  openMobileCartDeskBtn.addEventListener("click", () => {
    mobileCart.classList.remove("opacity-0", "pointer-events-none");
    cartPanel.classList.add("translate-x-full");

    document.body.classList.add("overflow-hidden");
  });
}

function closeMobileCart() {
  cartPanel.classList.remove("translate-x-full");

  setTimeout(() => {
    mobileCart.classList.add("opacity-0", "pointer-events-none");
    openMobileCartBtn.classList.remove("hidden");
    if (openMobileCartDeskBtn) openMobileCartDeskBtn.classList.remove("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 300);
}

// Mobile Search
const openMobileSearchBtn = document.getElementById("openMobileSearchBtn");
const mobileSearch = document.getElementById("mobileSearch");

// Search Panel
const searchPanel = document.getElementById("searchPanel");

openMobileSearchBtn.addEventListener("click", () => {
  mobileSearch.classList.remove("opacity-0", "pointer-events-none");
  searchPanel.classList.remove("translate-x-full");

  document.body.classList.add("overflow-hidden");
});

function closeMobileSearch() {
  searchPanel.classList.add("translate-x-full");

  setTimeout(() => {
    mobileSearch.classList.add("opacity-0", "pointer-events-none");
    openMobileSearchBtn.classList.remove("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 300);
}

// Close Mobile Menu If Window Resized
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    closeMenu();
    closeMobileCart();
    closeMobileSearch();

    // Close Mobile Category Content
    mobileCategoryContent.classList.add("opacity-0");
    mobileCategoryContent.classList.add("translate-y-full");
  }
});
