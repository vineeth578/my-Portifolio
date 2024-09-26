// Get the toggle switch
const themeSwitch = document.getElementById('theme-switch');

// Check if the user has a preferred theme stored in local storage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeSwitch.checked = true; // Set the toggle switch to checked
}

// Toggle theme on switch change
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark'); // Store theme preference
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light'); // Store theme preference
    }
});

// List of sentences to be typed
const roles = [
    "Java Developer.",
    "Spring Framework Enthusiast.",
    "Frontend Developer.",
    "Backend Developer.",
    "Prompt Engineer."
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100; // Speed of typing (milliseconds)
  const erasingSpeed = 50; // Speed of erasing
  const delayBetweenTexts = 2000; // Delay between each text (milliseconds)
  
  const typedTextElement = document.querySelector(".typed-text");
  const cursorElement = document.querySelector(".cursor");
  
  function type() {
    if (charIndex < roles[textIndex].length) {
      typedTextElement.textContent += roles[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed); // Continue typing
    } else {
      setTimeout(erase, delayBetweenTexts); // Wait and then start erasing
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typedTextElement.textContent = roles[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed); // Continue erasing
    } else {
      textIndex = (textIndex + 1) % roles.length; // Move to the next text
      setTimeout(type, typingSpeed); // Start typing the next text
    }
  }
  
  // Start the typing effect after a short delay
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, 1000);
  });

  

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
});



// JavaScript for Testimonials Carousel
// document.addEventListener("DOMContentLoaded", function () {
//     const testimonials = document.querySelectorAll(".testimonial");
//     const prevBtn = document.querySelector(".prev-btn");
//     const nextBtn = document.querySelector(".next-btn");

//     let currentTestimonial = 0;

//     function showTestimonial(index) {
//         testimonials.forEach((testimonial, i) => {
//             testimonial.classList.remove("active");
//             if (i === index) {
//                 testimonial.classList.add("active");
//             }
//         });
//     }

//     nextBtn.addEventListener("click", () => {
//         currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//         showTestimonial(currentTestimonial);
//     });

//     prevBtn.addEventListener("click", () => {
//         currentTestimonial =
//             (currentTestimonial - 1 + testimonials.length) % testimonials.length;
//         showTestimonial(currentTestimonial);
//     });

//     // Initialize the first testimonial as active
//     showTestimonial(currentTestimonial);
// });




