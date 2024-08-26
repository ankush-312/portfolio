
// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in Animation for Skill Cards
const skillCards = document.querySelectorAll('.skill-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
});

skillCards.forEach(card => {
    observer.observe(card);
});
