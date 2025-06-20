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


document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const closeOverlay = document.getElementById('closeOverlay');

  if (!hamburger || !mobileOverlay) {
    console.error("Elements not found");
    return;
  }

  function toggleMenu() {
    hamburger.classList.toggle('active');
    // mobileOverlay.classList.toggle('active');
  }

  hamburger.addEventListener('click', toggleMenu);
  
  if (closeOverlay) {
    closeOverlay.addEventListener('click', toggleMenu);
  }

  // Close when clicking outside
  document.addEventListener('click', function(e) {
    if (mobileOverlay.classList.contains('active') && 
        !mobileOverlay.contains(e.target) && 
        e.target !== hamburger) {
      toggleMenu();
    }
  });
});


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileOverlay.classList.toggle('active');
  if (!mobileOverlay.classList.contains('active')) {
    // Close all open dropdowns when closing overlay
    document.querySelectorAll('.mobile-dropdown').forEach(el => el.classList.remove('open'));
  }
});


document.querySelectorAll('.mobile-dropdown > a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent accidental navigation
    const parent = this.parentElement;

    // Close any other open dropdowns (optional)
    document.querySelectorAll('.mobile-dropdown').forEach(el => {
      if (el !== parent) {
        el.classList.remove('open');
      }
    });

    // Toggle current dropdown
    parent.classList.toggle('open');
  });
});




// Hero section
const slides = [
  {
    bg: 'images\hero.avif', // Replace with your actual image path
    hello: 'Hello',
    name: "I'm Masha",
    text: "I photograph very instinctively. I see how it is taken like that I do not\ follow certain styles, philosophies or teachers.",
    btnText: "Get a Quote",
    email: "hello.alime@gmail.com"
  },
  {
    bg: 'images\hero1.avif', // Replace with your actual image path
    hello: 'Hello',
    name: "I'm Daniel",
    text: "I photograph very instinctively. I see how it is taken like that I do not\ follow certain styles, philosophies or teachers.",
    btnText: "Get a Quote",
    email: "daniel@example.com"
  }
];

// let currentSlide = 0;

// const slideBg = document.getElementById('slideBg');
// const textContainer = document.getElementById('textContent');
// const leftContainer = document.querySelector('.left-container');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// function updateSlide(index, direction = 'next') {
//   const slide = slides[index];

//   // set bg
//   slideBg.style.backgroundImage = `url('${slide.bg}')`;

//   // Animate text container
//   leftContainer.classList.remove('slide-in');

//   if (direction === 'next') {
//     leftContainer.classList.add('slide-out');
//   } else {
//     leftContainer.classList.add('slide-in-reverse');
//   }

//   setTimeout(() => {

//     textContainer.innerHTML = `
//       <h1>${slide.hello}</h1>
//       <h2>${slide.name}</h2>
//       <p>${slide.text.split('\n').join('<br>')}</p>
//       <div class="btn-email">
//         <button class="btn">${slide.btnText}</button>
//         <a href="mailto:${slide.email}" class="email-link">${slide.email}</a>
//       </div>
//     `;

//     leftContainer.classList.remove('slide-out', 'slide-in-reverse');
//     void leftContainer.offsetWidth; // Trigger reflow
//     leftContainer.classList.add('slide-in');

//   })

// }

// prevBtn.addEventListener('click', () => {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   updateSlide(currentSlide);
// });

// nextBtn.addEventListener('click', () => {
//   currentSlide = (currentSlide + 1) % slides.length;
//   updateSlide(currentSlide);
// });

// // Initialize
// updateSlide(currentSlide);



let currentSlide = 0;

const slideBg = document.getElementById('slideBg');
const textContainer = document.getElementById('textContent');
const leftContainer = document.querySelector('.left-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateSlide(index, direction = 'next') {
  const slide = slides[index];

  // Set background
  slideBg.style.backgroundImage = `url('${slide.bg}')`;

  // Animate text container
  leftContainer.classList.remove('slide-in');

  if (direction === 'next') {
    leftContainer.classList.add('slide-out');
  } else {
    leftContainer.classList.add('slide-in-reverse');
  }

  setTimeout(() => {
    // Update content
    textContainer.innerHTML = `
      <h1 class="hello-text">${slide.hello}</h1>
      <h2 class="name-text">${slide.name}</h2>
      <p>${slide.text.split('\n').join('<br>')}</p>
      <div class="btn-email">
        <button class="btn">${slide.btnText}</button>
        <a href="mailto:${slide.email}" class="email-link">${slide.email}</a>
      </div>
    `;

    // Reset animation
    leftContainer.classList.remove('slide-out', 'slide-in-reverse');
    void leftContainer.offsetWidth; // Trigger reflow
    leftContainer.classList.add('slide-in');
  }, 300);
}

// Initial load
updateSlide(currentSlide);

// Navigation buttons
prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide(currentSlide, 'prev');
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide, 'next');
});