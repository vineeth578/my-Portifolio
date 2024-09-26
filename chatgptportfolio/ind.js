
    let sections = document.querySelectorAll('section');
    let colors = ['#4a90e2', '#50a5b5', '#f9a825', '#8bc34a', '#673ab7'];

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + window.innerHeight / 2;  // Adjusted for mid-section detection

    sections.forEach((section, index) => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            section.style.backgroundColor = colors[index % colors.length];  // Ensures colors loop if sections > colors
        }
    });
});
