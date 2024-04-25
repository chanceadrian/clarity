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
