// List of background images for small screens
const imagesSmall = [
    'Im/s-blue-small.webp',
    'Im/s-green-small.webp',
    'Im/s-orange-small.webp',
    'Im/s-pink-small.webp',
    'Im/s-purple-small.webp',
];

// List of background images for medium screens
const imagesMedium = [
    'Im/s-blue-med.webp',
    'Im/s-green-med.webp',
    'Im/s-orange-med.webp',
    'Im/s-pink-med.webp',
    'Im/s-purple-med.webp',
];

// List of background images for large screens
const imagesLarge = [
    'Im/s-blue.webp',
    'Im/s-green.webp',
    'Im/s-orange.webp',
    'Im/s-pink.webp',
    'Im/s-purple.webp',
];

// List of background images
let images;

// Preload images
const imageObjects = [];

function preloadImages(imageList) {
    imageList.forEach(imageUrl => {
        const img = new Image();
        img.src = imageUrl;
        imageObjects.push(img);
    });
}

// Function to change the background image
function changeBackgroundImage(imageUrl) {
    const imageContainer = document.getElementById('image-container');
    // Change background image
    imageContainer.style.backgroundImage = `url('${imageUrl}')`;
}

// Function to handle button click
function handleButtonClick(event, imageUrlArray) {
    const screenWidth = document.documentElement.clientWidth;
    let imageUrl;
    if (screenWidth < 800) {
        imageUrl = imageUrlArray.small;
    } else if (screenWidth < 1200) {
        imageUrl = imageUrlArray.medium;
    } else {
        imageUrl = imageUrlArray.large;
    }
    // Remove 'selected-color' class from all buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.remove('selected-color');
    });
    // Add 'selected-color' class to the clicked button
    event.currentTarget.classList.add('selected-color');
    // Change background image
    changeBackgroundImage(imageUrl);
}

// Function to set the appropriate list of images based on screen width
function setImagesByScreenWidth() {
    const screenWidth = document.documentElement.clientWidth;
    console.log('Screen width:', screenWidth);
    // Choose images based on screen width
    images = {
        small: imagesSmall,
        medium: imagesMedium,
        large: imagesLarge
    };
    preloadImages(images.small.concat(images.medium, images.large));
    // Change background image to the first one in the updated array
    changeBackgroundImage(images[screenWidth < 700 ? 'small' : screenWidth < 1200 ? 'medium' : 'large'][0]);
}

// Set the appropriate list of images based on initial screen width
setImagesByScreenWidth();

// Listen for window resize event to update images when screen width changes
window.addEventListener('resize', setImagesByScreenWidth);











const slider = document.getElementById('captionSlider');
const leftArrow = document.getElementById('leftSlide');
const rightArrow = document.getElementById('rightSlide');
const indicatorParents = document.getElementById('platter');
var essayIndex = 0;
var slideWidth;
var maxIndex;

// Function to calculate slide width and maximum index based on screen size
function calculateSlideParams() {
    const screenWidth = document.documentElement.clientWidth;
    if (screenWidth > 1200) {
        slideWidth = 50; 
        maxIndex = 1; 
    } else if (screenWidth > 900) {
        slideWidth = 33.333333; 
        maxIndex = 2; 
    } else {
        slideWidth = 16.666666; 
        maxIndex = 5; 
    }
}

// Function to set the slide index and update the slider position
function setIndex() {
    document.querySelector('#platter .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (essayIndex * -slideWidth) + '%)';
    indicatorParents.children[essayIndex].classList.add('selected');
}

// Function to handle slide transitions
function nextSlide() {
    essayIndex = (essayIndex < maxIndex) ? essayIndex + 1 : maxIndex; // Use maxIndex variable
    setIndex();
}

// Event listener for left arrow click
leftArrow.addEventListener('click', function() {
    essayIndex = (essayIndex > 0) ? essayIndex - 1 : maxIndex; // Use maxIndex variable
    setIndex();
});

// Event listener for right arrow click
rightArrow.addEventListener('click', function() {
    essayIndex = (essayIndex < maxIndex) ? essayIndex + 1 : 0; // Use maxIndex variable
    setIndex();
});

// Event listener for indicator click
document.querySelectorAll('platter indicator').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        essayIndex = ind;
        setIndex();
    });
});

// Call calculateSlideParams initially and on window resize
calculateSlideParams();
window.addEventListener('resize', calculateSlideParams);













const slider2 = document.getElementById('postalSlider');
const leftArrow2 = document.getElementById('leftSlide2');
const rightArrow2 = document.getElementById('rightSlide2');
const indicatorParents2 = document.getElementById('platter2');
var essayIndex2 = 0;

// Function to set the slide index and update the slider position for postalSlider carousel
function setIndex2() {
    document.querySelector('#platter2 .selected').classList.remove('selected');
    slider2.style.transform = 'translate(' + (essayIndex2 * -slideWidth) + '%)'; // Update slide translation
    indicatorParents2.children[essayIndex2].classList.add('selected');
}

// Function to handle slide transitions for postalSlider carousel
function nextSlide2() {
    essayIndex2 = (essayIndex2 < maxIndex) ? essayIndex2 + 1 : maxIndex; // Update condition for looping slides
    setIndex2();
}

// Event listener for left arrow click for postalSlider carousel
leftArrow2.addEventListener('click', function() {
    essayIndex2 = (essayIndex2 > 0) ? essayIndex2 - 1 : maxIndex; // Update condition for left arrow
    setIndex2();
});

// Event listener for right arrow click for postalSlider carousel
rightArrow2.addEventListener('click', function() {
    essayIndex2 = (essayIndex2 < maxIndex) ? essayIndex2 + 1 : 0; // Update condition for right arrow
    setIndex2();
});

// Event listener for indicator click for postalSlider carousel
document.querySelectorAll('#platter2 indicator').forEach(function(indicator2, ind2) {
    indicator2.addEventListener('click', function() {
        essayIndex2 = ind2;
        setIndex2();
    });
});









