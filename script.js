const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
const filters = [...document.querySelectorAll('.filter')];
const projects = [...document.querySelectorAll('.project-card')];

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 12), { passive: true });

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  navLinks.classList.toggle('open', !expanded);
});

navLinks.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
});

filters.forEach(filter => filter.addEventListener('click', () => {
  const selected = filter.dataset.filter;
  filters.forEach(button => {
    const active = button === filter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  projects.forEach(project => {
    project.hidden = selected !== 'all' && project.dataset.category !== selected;
  });
}));

document.querySelector('#year').textContent = new Date().getFullYear();
