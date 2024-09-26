let currentSlide = 0;

function moveSlide(step) {
    const slideContainer = document.querySelector('.slide');
    const slides = document.querySelectorAll('.slide-box');
    const visibleSlides = 5; // Only show 5 slides at a time
    const slideWidth = slides[0].offsetWidth + 20; // Box width + margin

    currentSlide += step;

    if (currentSlide < 0) {
        currentSlide = slides.length - visibleSlides; // Wrap around to last visible set of slides
    } else if (currentSlide > slides.length - visibleSlides) {
        currentSlide = 0; // Wrap around to the beginning
    }

    slideContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const faq = question.parentElement;

        // Toggle the 'open' class
        faq.classList.toggle('open');

        // Close other open FAQs
        document.querySelectorAll('.faq').forEach((item) => {
            if (item !== faq) {
                item.classList.remove('open');
            }
        });
    });
});
// Add event listener to the button
document.getElementById('dropdown-btn').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdown-content');
    dropdown.classList.toggle('show');
});

// Hide dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
