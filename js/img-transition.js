
// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
    rect.bottom >= 0
  );
}

// Function to add the 'visible' class when in view
function handleScroll() {
  const images = document.querySelectorAll('.slide-up-image');
  images.forEach((image) => {
    if (isInViewport(image)) {
      image.classList.add('visible');
    }
  });
}

// Add scroll event listener to trigger the function
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in view on load
handleScroll();
