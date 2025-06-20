// Toggle search overlay
const searchIcon = document.getElementById('searchIcon');
const searchOverlay = document.querySelector('.search-overlay');
const closeSearch = document.getElementById('closeSearch');

searchIcon.addEventListener('click', () => {
  searchOverlay.classList.toggle('active');
});

closeSearch.addEventListener('click', () => {
  searchOverlay.classList.remove('active');
});

// navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// navbar responsive
const hamburger = document.getElementById('hamburger');
const mobileOverlay = document.getElementById('mobileOverlay');
const closeOverlay = document.getElementById('closeOverlay');

if (!hamburger || !mobileOverlay) {
  console.error("❌ Hamburger or overlay NOT found");
} else {
  console.log("✅ Hamburger & overlay FOUND");

}

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  console.log("🖱️ Hamburger clicked!");
  hamburger.classList.toggle('active');
  mobileOverlay.classList.toggle('active');
});

// Close overlay when clicking X
closeOverlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileOverlay.classList.remove('active');
});

// Optional: close overlay when clicking outside of it
document.addEventListener('click', (e) => {
  if (
    mobileOverlay.classList.contains('active') &&
    !mobileOverlay.contains(e.target) &&
    e.target !== hamburger
  ) {
    hamburger.classList.remove('active');
    mobileOverlay.classList.remove('active');
  }
});


