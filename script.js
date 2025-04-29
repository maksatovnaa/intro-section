
const featuresBtn = document.getElementById("featuresBtn");
const companyBtn = document.getElementById("companyBtn");
const featuresMenu = document.getElementById("featuresMenu");
const companyMenu = document.getElementById("companyMenu");

function toggleFeaturesMenu() {
  if (featuresMenu.classList.contains("hidden")) {
    featuresMenu.classList.remove("hidden");
  } else {
    featuresMenu.classList.add("hidden");
  }
  companyMenu.classList.add("hidden");
}

function toggleCompanyMenu() {
  if (companyMenu.classList.contains("hidden")) {
    companyMenu.classList.remove("hidden");
  } else {
    companyMenu.classList.add("hidden");
  }
  featuresMenu.classList.add("hidden");
}

featuresBtn.addEventListener("click", toggleFeaturesMenu);
companyBtn.addEventListener("click", toggleCompanyMenu);