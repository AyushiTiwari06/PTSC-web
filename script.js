document.addEventListener('DOMContentLoaded', () => {
  showSection('home'); // Show home section on load
});

function showSection(id) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('hidden');
  });

  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.remove('hidden');
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
