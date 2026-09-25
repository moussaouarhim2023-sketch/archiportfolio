const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
  });
});

const filters = document.querySelectorAll('.filter');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
  });
});

const authForm = document.querySelector('.auth-form');
authForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  window.location.href = 'dashboard.html';
});
