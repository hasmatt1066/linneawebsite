let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateCarousel() {
    const carouselContent = document.querySelector('.carousel-content');
    const offset = -currentIndex * 100; // Move by 100% for each item
    carouselContent.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Auto-play the carousel (optional)
setInterval(() => {
    currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}, 5000);
