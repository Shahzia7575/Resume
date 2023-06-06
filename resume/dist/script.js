// Add animation to sections on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.animated-section');
  sections.forEach((section) => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      section.classList.add('active');
    }
  });
});
// Add animation to sections on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.animated-section');
  sections.forEach((section) => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      section.classList.add('active', 'animate__animated', 'animate__fadeInUp');
    }
  });
});