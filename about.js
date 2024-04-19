const slider = document.getElementById('writingSlider');
const leftArrow = document.getElementById('leftSlide');
const rightArrow = document.getElementById('rightSlide');
const indicatorParents = document.getElementById('platter');
var essayIndex = 0;
var autoplayInterval; // Variable to store the autoplay interval

// Function to set the slide index and update the slider position
function setIndex() {
    document.querySelector('#platter .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (essayIndex * -25) + '%)';
    indicatorParents.children[essayIndex].classList.add('selected');
}

// Function to handle slide transitions
function nextSlide() {
    essayIndex = (essayIndex < 3) ? essayIndex + 1 : 0;
    setIndex();
}

// Function to start autoplay
function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000); // Autoplay every 5 seconds
}

// Function to pause autoplay
function pauseAutoplay() {
    clearInterval(autoplayInterval);
}

// Event listener for left arrow click
leftArrow.addEventListener('click', function() {
    essayIndex = (essayIndex > 0) ? essayIndex - 1 : 0;
    setIndex();
    pauseAutoplay(); // Pause autoplay when user interacts with the carousel
});

// Event listener for right arrow click
rightArrow.addEventListener('click', function() {
    essayIndex = (essayIndex < 3) ? essayIndex + 1 : 0;
    setIndex();
    pauseAutoplay(); // Pause autoplay when user interacts with the carousel
});

// Event listener for indicator click
document.querySelectorAll('platter indicator').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        essayIndex = ind;
        setIndex();
        pauseAutoplay(); // Pause autoplay when user interacts with the carousel
    });
});

// Start autoplay when the page loads
startAutoplay();

// Event listener to pause autoplay when the user interacts with the carousel
slider.addEventListener('touchstart', pauseAutoplay);
slider.addEventListener('touchend', startAutoplay);








// Variables for writingSlider2 carousel
const slider2 = document.getElementById('writingSlider2');
const leftArrow2 = document.getElementById('leftSlide2');
const rightArrow2 = document.getElementById('rightSlide2');
const indicatorParents2 = document.getElementById('platter2');
var essayIndex2 = 0;
var autoplayInterval2; // Variable to store the autoplay interval

// Function to set the slide index and update the slider position for writingSlider2 carousel
function setIndex2() {
    document.querySelector('#platter2 .selected').classList.remove('selected');
    slider2.style.transform = 'translate(' + (essayIndex2 * -16.6666) + '%)'; // Update slide translation
    indicatorParents2.children[essayIndex2].classList.add('selected');
}

// Function to handle slide transitions for writingSlider2 carousel
function nextSlide2() {
    essayIndex2 = (essayIndex2 < 5) ? essayIndex2 + 1 : 0; // Update condition for looping slides
    setIndex2();
}

// Function to start autoplay for writingSlider2 carousel
function startAutoplay2() {
    autoplayInterval2 = setInterval(nextSlide2, 5000); // Autoplay every 5 seconds
}

// Function to pause autoplay for writingSlider2 carousel
function pauseAutoplay2() {
    clearInterval(autoplayInterval2);
}

// Event listener for left arrow click for writingSlider2 carousel
leftArrow2.addEventListener('click', function() {
    essayIndex2 = (essayIndex2 > 0) ? essayIndex2 - 1 : 5; // Update condition for left arrow
    setIndex2();
    pauseAutoplay2(); // Pause autoplay when user interacts with the carousel
});

// Event listener for right arrow click for writingSlider2 carousel
rightArrow2.addEventListener('click', function() {
    essayIndex2 = (essayIndex2 < 5) ? essayIndex2 + 1 : 0; // Update condition for right arrow
    setIndex2();
    pauseAutoplay2(); // Pause autoplay when user interacts with the carousel
});

// Event listener for indicator click for writingSlider2 carousel
document.querySelectorAll('#platter2 indicator2').forEach(function(indicator2, ind2) {
    indicator2.addEventListener('click', function() {
        essayIndex2 = ind2;
        setIndex2();
        pauseAutoplay2(); // Pause autoplay when user interacts with the carousel
    });
});

// Start autoplay for writingSlider2 carousel when the page loads
startAutoplay2();

// Event listener to pause autoplay for writingSlider2 carousel when the user interacts with the carousel
slider2.addEventListener('touchstart', pauseAutoplay2);
slider2.addEventListener('touchend', startAutoplay2);










