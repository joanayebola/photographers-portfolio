const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});



// JavaScript to handle slideshow functionality
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var currentSlide = 0;

// Display the first slide
showSlide(currentSlide);

// Set up event listeners for navigation dots
for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
        var slideIndex = Array.prototype.indexOf.call(dots, this);
        showSlide(slideIndex);
    });
}

// Function to display the previous slide
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Function to display the next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Function to display a specific slide
function showSlide(slideIndex) {
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides and remove active class from dots
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    // Display the selected slide and add active class to the corresponding dot
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");

    currentSlide = slideIndex;
}
