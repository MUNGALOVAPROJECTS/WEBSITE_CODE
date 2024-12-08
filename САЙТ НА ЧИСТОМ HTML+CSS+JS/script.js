//smooth scrolling

let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function(element){
    element.addEventListener('click', function(event){
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.getElementById("carouselInner");
    const cards = document.querySelectorAll(".card");
    const controls = document.querySelectorAll(".controls");
    const counters = document.querySelectorAll("[id^='slideCounter']");
    const prevButtons = document.querySelectorAll("#prevBtn, #prevBtn2");
    const nextButtons = document.querySelectorAll("#nextBtn, #nextBtn2");

    let currentIndex = 0;
    let visibleSlides = 3;
    let totalSlides = Math.ceil(cards.length / visibleSlides);

    // function for setting slide indicators
    function setCountersText() {
        counters.forEach(counter => {
            counter.textContent = `${currentIndex + 1}/${totalSlides}`;
        });
    }

    // fnction for moving slides forward
    function moveNext() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    // Function for moving slides backward
    function movePrev() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1;
        }
        updateSlider();
    }

    // function for automatic slide switching
    function autoMove() {
        moveNext();
    }

    // function to update the slider position
    function updateSlider() {
        carouselInner.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
        setCountersText();
    }

    // setting the initial values ​​of the indicators
    setCountersText();

    // bind event handlers to buttons
    prevButtons.forEach(btn => {
        btn.addEventListener("click", movePrev);
    });
    nextButtons.forEach(btn => {
        btn.addEventListener("click", moveNext);
    });

    // start auto-slide switching
    setInterval(moveNext, 4000);
});