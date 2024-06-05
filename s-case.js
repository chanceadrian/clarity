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

// Cabinet View -------------------------------------------------------------------------------------------------------
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







const slider = document.getElementById('Slider');
const leftArrow = document.getElementById('leftSlide');
const rightArrow = document.getElementById('rightSlide');
var essayIndex = 0;
var autoplayInterval; // Variable to store the autoplay interval

// Function to set the slide index and update the slider position
function setIndex() {
    slider.style.transform = 'translate(' + (essayIndex * -20) + '%)';
    // Remove current class from all holders
    document.querySelectorAll('#Slider holder').forEach(holder => {
      holder.classList.remove('current');
    });

    // Add current class to the holder corresponding to the current slide index
    document.querySelectorAll('#Slider holder')[essayIndex].classList.add('current');
}

// Function to handle slide transitions
function nextSlide() {
    essayIndex = (essayIndex < 4) ? essayIndex + 1 : 0;
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
    essayIndex = (essayIndex < 4) ? essayIndex + 1 : 0;
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





