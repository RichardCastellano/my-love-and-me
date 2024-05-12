document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const container = document.querySelector('.carousel-container');
    let images = document.querySelectorAll('.carousel-container img');
    
    // Duplicate the first image and append it to the end
    const firstImageClone = images[0].cloneNode(true);
    container.appendChild(firstImageClone);
  
    images = document.querySelectorAll('.carousel-container img'); // Update images NodeList
  
    let counter = 0;
    let slideWidth = images[0].clientWidth;
  
    function nextSlide() {
      if (counter >= images.length - 1) {
        counter = 0; // Reset counter to 0 when reaching the last image
        container.style.transition = 'none'; // Disable transition temporarily
        container.style.transform = 'translateX(0)';
        setTimeout(() => {
          container.style.transition = ''; // Re-enable transition after resetting position
        }, 50);
      } else {
        counter++;
      }
      container.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
  
    function prevSlide() {
      if (counter <= 0) {
        counter = images.length - 1; // Set counter to the last image index when reaching the first image
        container.style.transition = 'none'; // Disable transition temporarily
        container.style.transform = `translateX(${-slideWidth * counter}px)`;
        setTimeout(() => {
          container.style.transition = ''; // Re-enable transition after resetting position
        }, 50);
      } else {
        counter--;
      }
      container.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
  
    // Automatically scroll to the next slide every 3 seconds
    setInterval(nextSlide, 3000);
  
    // Adjust slide width if window is resized
    window.addEventListener('resize', () => {
      slideWidth = images[0].clientWidth;
      container.style.transition = 'none'; // Disable transition temporarily
      container.style.transform = `translateX(${-slideWidth * counter}px)`;
      setTimeout(() => {
        container.style.transition = ''; // Re-enable transition after resetting position
      }, 50);
    });
  });
