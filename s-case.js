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




// Load Cabinet Photos -------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', async () => {
  const imagesView = [
    'Im/s-cabinet-1.webp',
    'Im/s-cabinet-2.webp',
    'Im/s-cabinet-3.webp',
    'Im/s-cabinet-4.webp',
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
  const buttons = document.querySelectorAll(".cab-view");
  const cabinet = document.querySelector(".cabinet");

  buttons.forEach(button => {
      button.addEventListener("click", function() {
          // Remove 'pressed' class from all buttons
          buttons.forEach(btn => {
              btn.classList.remove("pressed");
          });

          // Add 'pressed' class to the clicked button
          this.classList.add("pressed");

          // Get the background image URL from the data attribute
          const imageUrl1 = this.getAttribute("data-image-1");

          // Set the background image in the specified places
          if (cabinet) {
            cabinet.style.backgroundImage = `url(${imageUrl1})`;
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

