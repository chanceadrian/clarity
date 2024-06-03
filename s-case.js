// Select all elements with the class "spring-up"
const elements = document.querySelectorAll('.spring-up');

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
    elements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('animate')) {
        element.classList.add('animate');
      }
    });
}
  
// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();
  




// Slider 1 -------------------------------------------------------------------------------------------------------

const slider = document.getElementById('viewSlider');
const leftArrow = document.getElementById('leftSlide');
const rightArrow = document.getElementById('rightSlide');
const indicatorParents = document.getElementById('platter');
var essayIndex = 0;
var slideWidth;
var maxIndex;

// Function to calculate slide width and maximum index based on screen size
function calculateSlideParams() {
    const screenWidth = document.documentElement.clientWidth;
    if (screenWidth > 735) {
      slideWidth = 20.1; 
      maxIndex = 4; 
  } else {
      slideWidth = 20; 
      maxIndex = 4; 
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








// Load Closer Look Photos -------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', async () => {
  const imagesView = [
    'Im/s-view-note.webp',
    'Im/s-view-photo.webp',
    'Im/s-view-voice.webp',
    'Im/s-view-link.webp',
    'Im/s-view-tunnel.webp',
    'Im/s-view-cabinet.webp',
    'Im/s-note.webp',
    'Im/s-photo.webp',
    'Im/s-voice.webp',
    'Im/s-link.webp',
    'Im/s-tunnel.webp',
    'Im/s-cabinet.webp',
  ];

  // Function to preload a single image
  function preloadImage(imageUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        console.log(`Image loaded: ${imageUrl}`);
        resolve(img);
      };
      img.onerror = () => {
        console.error(`Image failed to load: ${imageUrl}`);
        reject(new Error(`Failed to load image: ${imageUrl}`));
      };
      img.src = imageUrl;
    });
  }

  // Function to preload multiple images
  async function preloadImages(imageList) {
    const promises = imageList.map(preloadImage);
    try {
      const loadedImages = await Promise.all(promises);
      console.log('All images loaded successfully');
      return loadedImages;
    } catch (error) {
      console.error('Error loading images', error);
    }
  }

  // Preload images for different screen sizes
  const preloadedImages = await preloadImages(imagesView);
  console.log(preloadedImages);
});

// Closer Look -------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll("#viewPick");
  const iPhone1 = document.getElementById("iPhone1");
  const iPhone2 = document.getElementById("iPhone2");

  buttons.forEach(button => {
      button.addEventListener("click", function() {
          // Remove 'selected' class from all buttons
          buttons.forEach(btn => {
              btn.classList.remove("selected");
          });

          // Add 'selected' class to the clicked button
          this.classList.add("selected");

          // Get the background image URL from the data attribute
          const imageUrl1 = this.getAttribute("data-image-1");
          const imageUrl2 = this.getAttribute("data-image-2");

          // Set the background image in the specified places
          if (iPhone1) {
            iPhone1.style.backgroundImage = `url(${imageUrl1})`;
          }

          if (iPhone2) {
            iPhone2.style.backgroundImage = `url(${imageUrl2})`;
          } 

          // Get the text data attributes
          const type = this.getAttribute("data-type");
          const title = this.getAttribute("data-title");
          const body = this.getAttribute("data-body");

          // Update the text content
          const holder = document.getElementById("closer-text");
          if (holder) {
            holder.classList.add('swap');

            setTimeout(() => {
              holder.querySelector('h4').textContent = type;
              holder.querySelector('h2').innerHTML = title.replace(/\n/g, '<br>'); // Replace newline characters with <br> for line breaks
              holder.querySelector('h3').textContent = body;
            }, 250);

            setTimeout(() => {
              holder.classList.remove('swap');
            }, 600);
          }
      });
  });
});





// Slider 2 -------------------------------------------------------------------------------------------------------

const slider2 = document.getElementById('viewSlider2');
const leftArrow2 = document.getElementById('leftSlide2');
const rightArrow2 = document.getElementById('rightSlide2');
const indicatorParents2 = document.getElementById('platter2');
var essayIndex2 = 0;

// Function to set the slide index and update the slider position for writingSlider2 carousel
function setIndex2() {
    document.querySelector('#platter2 .selected').classList.remove('selected');
    slider2.style.transform = 'translate(' + (essayIndex2 * -33.333) + '%)'; // Update slide translation
    indicatorParents2.children[essayIndex2].classList.add('selected');
}

// Function to handle slide transitions for writingSlider2 carousel
function nextSlide2() {
    essayIndex2 = (essayIndex2 < 2) ? essayIndex2 + 1 : 0; // Update condition for looping slides
    setIndex2();
}

// Event listener for left arrow click for writingSlider2 carousel
leftArrow2.addEventListener('click', function() {
    essayIndex2 = (essayIndex2 > 0) ? essayIndex2 - 1 : 2; // Update condition for left arrow
    setIndex2();
});

// Event listener for right arrow click for writingSlider2 carousel
rightArrow2.addEventListener('click', function() {
    essayIndex2 = (essayIndex2 < 2) ? essayIndex2 + 1 : 0; // Update condition for right arrow
    setIndex2();
});

// Event listener for indicator click for writingSlider2 carousel
document.querySelectorAll('#platter2 indicator').forEach(function(indicator2, ind2) {
    indicator2.addEventListener('click', function() {
        essayIndex2 = ind2;
        setIndex2();
    });
});






document.addEventListener("DOMContentLoaded", () => {
  const togButton = document.querySelector(".blue");
  const togView = document.getElementById('blue');
  togButton.addEventListener("click", () => {
    togButton.classList.toggle("pressed");
    const isPressed = togButton.classList.contains("pressed");
    togButton.querySelector('p').textContent = isPressed ? "Close" : "Dive Deeper"; 
    if (togView) {
      togView.classList.toggle("is-open");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const togButton = document.querySelector(".green");
  const togView = document.getElementById('green');
  togButton.addEventListener("click", () => {
    togButton.classList.toggle("pressed");
    const isPressed = togButton.classList.contains("pressed");
    togButton.querySelector('p').textContent = isPressed ? "Close" : "Dive Deeper"; 
    if (togView) {
      togView.classList.toggle("is-open");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const togButton = document.querySelector(".ice");
  const togView = document.getElementById('ice');
  togButton.addEventListener("click", () => {
    togButton.classList.toggle("pressed");
    const isPressed = togButton.classList.contains("pressed");
    togButton.querySelector('p').textContent = isPressed ? "Close" : "Dive Deeper"; 
    if (togView) {
      togView.classList.toggle("is-open");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const togButton = document.querySelector(".pink");
  const togView = document.getElementById('pink');
  togButton.addEventListener("click", () => {
    togButton.classList.toggle("pressed");
    const isPressed = togButton.classList.contains("pressed");
    togButton.querySelector('p').textContent = isPressed ? "Close" : "Dive Deeper"; 
    if (togView) {
      togView.classList.toggle("is-open");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const togButton = document.querySelector(".orange");
  const togView = document.getElementById('orange');
  togButton.addEventListener("click", () => {
    togButton.classList.toggle("pressed");
    const isPressed = togButton.classList.contains("pressed");
    togButton.querySelector('p').textContent = isPressed ? "Close" : "Dive Deeper"; 
    if (togView) {
      togView.classList.toggle("is-open");
    }
  });
});

