
// List of background images
const images = [
    'Im/s-blue.webp',
    'Im/s-green.webp',
    'Im/s-orange.webp',
    'Im/s-pink.webp',
    'Im/s-purple.webp',
];

// Preload images
const imageObjects = [];
images.forEach(imageUrl => {
    const img = new Image();
    img.src = imageUrl;
    imageObjects.push(img);
});

const imageContainer = document.getElementById('image-container');

// Function to change the background image
function changeBackgroundImage(imageUrl) {
    imageContainer.style.backgroundImage = `url('${imageUrl}')`;
}

// Function to handle button click
function handleButtonClick(event, imageUrl) {
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

// Set the first image as the default background image
changeBackgroundImage(images[0]);

