// navigation.js — Member 1
// Highlights the active nav link based on current page

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage) link.classList.add('active');
  });

  // Animate cards on load
  const cards = document.querySelectorAll('.bodypart-card, .equipment-card');
  cards.forEach((card, i) => {
    card.classList.add('fade-up');
    card.style.animationDelay = (i * 0.07) + 's';
  });
});
