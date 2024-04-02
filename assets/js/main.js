let currentSlide = 0;
const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dots li');
const totalSlides = slides.length;
let autoSlideInterval;

function showSlide(n) {
    currentSlide = (n + totalSlides) % totalSlides;

    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slides[currentSlide].classList.add('active');

    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

startAutoSlide();

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});
