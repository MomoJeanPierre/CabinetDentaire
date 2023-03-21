const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = e.target.getAttribute('href').substring(1);
    sections.forEach(section => {
      section.classList.remove('active');
      if (section.getAttribute('id') === target) {
        section.classList.add('active');
      }
    });
  });
});
