// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// Close menu on nav link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  if(question) {
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      // Toggle current item
      item.classList.toggle('active');
    });
  }
});

// ===== CONTACT FORM → WHATSAPP =====
function handleFormSubmit(e) {
  e.preventDefault();
  const nama = document.getElementById('name')?.value.trim() || document.getElementById('nama')?.value.trim();
  const pesan = document.getElementById('message')?.value.trim() || document.getElementById('pesan')?.value.trim();

  if (!nama || !pesan) return;

  const msg = encodeURIComponent(
    `Halo Admin Getuk Sarinah! 👋\n\nNama: ${nama}\n\nPesan/Pesanan:\n${pesan}\n\nTerima kasih!`
  );
  window.open(`https://wa.me/6285879350101?text=${msg}`, '_blank');
}

// ===== SMOOTH ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a:not(.nav-cta)');
const isIndexPage = Boolean(document.getElementById('home'));

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    if (section && window.scrollY >= section.offsetTop - 150) {
      current = section.getAttribute('id');
    }
  });
  
  if (current && isIndexPage) {
    navAnchors.forEach(a => {
      const href = a.getAttribute('href');
      a.classList.toggle('active', href === `#${current}` || href === `index.html#${current}`);
    });
  }
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
