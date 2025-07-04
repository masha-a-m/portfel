// loader
  window.addEventListener("load", function () {
    const loader = document.getElementById('pageLoader');
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 600); // Match with CSS transition time
  });

// Fake delay for testing (remove when done)
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const loader = document.getElementById('pageLoader');
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }, 3000); // Show loader for 3 seconds
});

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


// Hero Slider
const slides = [
  {
    bg: 'images/hero.avif',
    hello: 'Hello',
    name: "I'm Masha",
    text: "I photograph very instinctively. I see how it is taken like that I do not follow certain styles, philosophies or teachers.",
    btnText: "Get a Quote",
    email: "hello.alime@gmail.com"
  },
  {
    bg: 'images/hero1.avif',
    hello: 'Hello',
    name: "I'm Daniel",
    text: "I follow no styles, just my instinct. I see how it is taken like that I do not follow certain styles, philosophies or teachers.",
    btnText: "Get a Quote",
    email: "daniel@example.com"
  }
];

let currentSlide = 0;

const slideBg = document.getElementById('slideBg');
const textContainer = document.getElementById('textContent');
const leftContainer = document.querySelector('.left-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateSlide(index) {
  const slide = slides[index];

  // Update background
  // if (slideBg) {
  //   slideBg.style.backgroundImage = `url('${slide.bg}')`;
  // }

  if (slideBg && slide.bg) {
    slideBg.style.backgroundImage = `url('${slide.bg}')`;
    console.log("Setting background:", slide.bg);
  }

  // Update content
  if (textContainer) {
    textContainer.innerHTML = `
      <h1>${slide.hello}</h1>
      <h2>${slide.name}</h2>
      <p>${slide.text}</p>
      <div class="btn-email">
        <button class="btn">${slide.btnText}</button>
        <a href="mailto:${slide.email}" class="email-link">${slide.email}</a>
      </div>
    `;
  }
}

// Button Events
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
  });
}

// Initial load
updateSlide(currentSlide);




// filtering section
const tabs = document.querySelectorAll('.tab');
const items = document.querySelectorAll('.gallery-item');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.getAttribute('data-filter');

    // Update active tab
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Animate gallery out
    const gallery = document.querySelector('.gallery');
    gallery.style.opacity = '0';
    gallery.style.pointerEvents = 'none';

    setTimeout(() => {
      // Hide or show items
      items.forEach(item => {
        if (item.classList.contains(filter) || filter === 'all') {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Fade back in
      gallery.style.opacity = '1';
      gallery.style.pointerEvents = 'auto';
    }, 300);
  });
});


// instagram feed section auto scroll
  const feed = document.getElementById('instagramFeed');

  let scrollAmount = 0;

  setInterval(() => {
    const cardWidth = document.querySelector('.insta-item')?.offsetWidth + 10 || 220;
    
    if (feed.scrollLeft + feed.clientWidth >= feed.scrollWidth) {
      feed.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      feed.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  }, 3000); // Scrolls every 3 seconds





// why choose us section

document.addEventListener("DOMContentLoaded", function () {
  const chooseSection = document.getElementById('chooseUs');
  const sectionTitle = chooseSection.querySelector('.section-title');
  const cardsContainer = document.querySelector('.cards-container');


  function checkScroll() {
    const sectionPosition = chooseSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition && sectionPosition + 100 > 0) {
      sectionTitle.classList.add('animate');
      cardsContainer.classList.add('animate');

     
    }
  }

  window.addEventListener('load', checkScroll);
  window.addEventListener('scroll', checkScroll);
});





// back to top
document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});