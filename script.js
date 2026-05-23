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
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px, 6px)' : '';
  spans[1].style.opacity = navLinks.classList.contains('open') ? '0' : '';
  spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px, -6px)' : '';
});

// Close menu on nav link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
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
  const nama = document.getElementById('nama').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  if (!nama || !pesan) return;

  const msg = encodeURIComponent(
    `Halo Admin Getuk Sarinah! 👋\n\nNama: ${nama}\n\nPesan/Pesanan:\n${pesan}\n\nTerima kasih!`
  );
  window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
}

// ===== SMOOTH ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (section && window.scrollY >= section.offsetTop - 150) {
      current = section.getAttribute('id');
    }
  });
  
  if(current && window.location.pathname.includes('index')) {
    navAnchors.forEach(a => {
      a.style.color = '';
      a.style.fontWeight = '';
      if (a.getAttribute('href') === `#${current}` || a.getAttribute('href') === `index.html#${current}`) {
        a.style.color = 'var(--mustard-dark)';
        a.style.fontWeight = '700';
      }
    });
  }
});
