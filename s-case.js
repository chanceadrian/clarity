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
    if (screenWidth < 700) {
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

// Function to set the slide index and update the slider position
function setIndex() {
    document.querySelector('#platter .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (essayIndex * -50) + '%)';
    indicatorParents.children[essayIndex].classList.add('selected');
}

// Function to handle slide transitions
function nextSlide() {
    essayIndex = (essayIndex < 1) ? essayIndex + 1 : 0;
    setIndex();
}

// Event listener for left arrow click
leftArrow.addEventListener('click', function() {
    essayIndex = (essayIndex > 0) ? essayIndex - 1 : 1;
    setIndex();
});

// Event listener for right arrow click
rightArrow.addEventListener('click', function() {
    essayIndex = (essayIndex < 1) ? essayIndex + 1 : 0;
    setIndex();
});

// Event listener for indicator click
document.querySelectorAll('platter indicator').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        essayIndex = ind;
        setIndex();
    });
});












const slider2 = document.getElementById('postalSlider');
const leftArrow2 = document.getElementById('leftSlide2');
const rightArrow2 = document.getElementById('rightSlide2');
const indicatorParents2 = document.getElementById('platter2');
var essayIndex2 = 0;

// Function to set the slide index and update the slider position for postalSlider carousel
function setIndex2() {
    document.querySelector('#platter2 .selected').classList.remove('selected');
    slider2.style.transform = 'translate(' + (essayIndex2 * -50) + '%)'; // Update slide translation
    indicatorParents2.children[essayIndex2].classList.add('selected');
}

// Function to handle slide transitions for postalSlider carousel
function nextSlide2() {
    essayIndex2 = (essayIndex2 < 1) ? essayIndex2 + 1 : 0; // Update condition for looping slides
    setIndex2();
}

// Event listener for left arrow click for postalSlider carousel
leftArrow2.addEventListener('click', function() {
    essayIndex2 = (essayIndex2 > 0) ? essayIndex2 - 1 : 1; // Update condition for left arrow
    setIndex2();
});

// Event listener for right arrow click for postalSlider carousel
rightArrow2.addEventListener('click', function() {
    essayIndex2 = (essayIndex2 < 1) ? essayIndex2 + 1 : 0; // Update condition for right arrow
    setIndex2();
});

// Event listener for indicator click for postalSlider carousel
document.querySelectorAll('#platter2 indicator').forEach(function(indicator2, ind2) {
    indicator2.addEventListener('click', function() {
        essayIndex2 = ind2;
        setIndex2();
    });
});









const slider3 = document.getElementById('postalSlider2');
const leftArrow3 = document.getElementById('leftSlide3');
const rightArrow3 = document.getElementById('rightSlide3');
const indicatorParents3 = document.getElementById('platter3');
var essayIndex3 = 0;

// Function to set the slide index and update the slider position for postalSlider carousel
function setIndex3() {
    document.querySelector('#platter3 .selected').classList.remove('selected');
    slider3.style.transform = 'translate(' + (essayIndex3 * -16.666666) + '%)'; // Update slide translation
    indicatorParents3.children[essayIndex3].classList.add('selected');
}

// Function to handle slide transitions for postalSlider carousel
function nextSlide3() {
    essayIndex3 = (essayIndex3 < 5) ? essayIndex3 + 1 : 0; // Update condition for looping slides
    setIndex3();
}

// Event listener for left arrow click for postalSlider carousel
leftArrow3.addEventListener('click', function() {
    essayIndex3 = (essayIndex3 > 0) ? essayIndex3 - 1 : 5; // Update condition for left arrow
    setIndex3();
});

// Event listener for right arrow click for postalSlider carousel
rightArrow3.addEventListener('click', function() {
    essayIndex3 = (essayIndex3 < 5) ? essayIndex3 + 1 : 0; // Update condition for right arrow
    setIndex3();
});

// Event listener for indicator click for postalSlider carousel
document.querySelectorAll('#platter3 indicator').forEach(function(indicator3, ind3) {
    indicator3.addEventListener('click', function() {
        essayIndex3 = ind3;
        setIndex3();
    });
});
