document.getElementById('burger').addEventListener('click', function () {
  document.getElementById('navbar').classList.toggle('active');
  this.classList.toggle('burger-active');
});

featuresBtn.addEventListener('click', function () {
  if (featuresMenu.style.display === 'flex') {
    featuresMenu.style.display = 'none';
  } else {
    featuresMenu.style.display = 'flex';
    companyMenu.style.display = 'none';
  }
});

companyBtn.addEventListener('click', function () {
  if (companyMenu.style.display === 'flex') {
    companyMenu.style.display = 'none';
  } else {
    companyMenu.style.display = 'flex';
    featuresMenu.style.display = 'none';
  }
});