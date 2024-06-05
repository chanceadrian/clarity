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







class Slideshow {
  constructor(sliderId, leftArrowId, rightArrowId, totalSlides) {
      this.slider = document.getElementById(sliderId);
      this.leftArrow = document.getElementById(leftArrowId);
      this.rightArrow = document.getElementById(rightArrowId);
      this.totalSlides = totalSlides;
      this.index = 0;

      this.init();
  }

  init() {
      this.setIndex();
      this.leftArrow.addEventListener('click', () => this.prevSlide());
      this.rightArrow.addEventListener('click', () => this.nextSlide());

      this.slider.addEventListener('touchstart', () => this.pauseAutoplay());
      this.slider.addEventListener('touchend', () => this.startAutoplay());
  }

  setIndex() {
      this.slider.style.transform = 'translate(' + (this.index * -20) + '%)';
      document.querySelectorAll(`#${this.slider.id} holder`).forEach(holder => {
          holder.classList.remove('current');
      });
      document.querySelectorAll(`#${this.slider.id} holder`)[this.index].classList.add('current');

      this.updateArrowOpacity();
  }

  updateArrowOpacity() {
      this.leftArrow.style.opacity = (this.index === 0) ? 0.25 : 0.5;
      this.rightArrow.style.opacity = (this.index === this.totalSlides - 1) ? 0.25 : 0.5;
  }

  nextSlide() {
      this.index = (this.index < this.totalSlides - 1) ? this.index + 1 : 0;
      this.setIndex();
  }

  prevSlide() {
      this.index = (this.index > 0) ? this.index - 1 : 0;
      this.setIndex();
  }
}

// Instantiate the slideshow
document.addEventListener('DOMContentLoaded', () => {
  new Slideshow('Slider', 'leftSlide', 'rightSlide', 5);
  new Slideshow('Slider2', 'leftSlide2', 'rightSlide2', 5);
});











