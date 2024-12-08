
//carousel2

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel2');
    const slides = carousel.querySelectorAll('.slides li');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const indicators = carousel.querySelectorAll('.indicator');

    let currentIndex = 0;

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function goToSlide(index) {
        const slideWidth = slides[0].clientWidth;
        carousel.querySelector('.slides').style.transform = `translateX(${-slideWidth * index}px)`;
        currentIndex = index;
        updateIndicators();
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1);
        }
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Initial setup
    updateIndicators();
});