const slider = document.getElementById('writingSlider');
const leftArrow = document.getElementById('leftSlide');
const rightArrow = document.getElementById('rightSlide');
const indicatorParents = document.getElementById('platter');
var essayIndex = 0;
var autoplayInterval; // Variable to store the autoplay interval

// Function to set the slide index and update the slider position
function setIndex() {
    document.querySelector('platter .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (essayIndex * -33.3333) + '%)';
    indicatorParents.children[essayIndex].classList.add('selected');
}

// Function to handle slide transitions
function nextSlide() {
    essayIndex = (essayIndex < 2) ? essayIndex + 1 : 0;
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
    essayIndex = (essayIndex < 2) ? essayIndex + 1 : 0;
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
//slider.addEventListener('mouseover', pauseAutoplay);//
slider.addEventListener('touchstart', pauseAutoplay);
//slider.addEventListener('mouseleave', startAutoplay);//
slider.addEventListener('touchend', startAutoplay);
