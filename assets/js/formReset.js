// Get the form element
const contactForm = document.getElementById('contactForm');

// Add submit event listener
contactForm.addEventListener('submit', function (e) {
    // Allow the form to be submitted
    // Optionally, you could use `e.preventDefault()` to handle submission via JavaScript
    
    // Reset the form fields after a short delay to ensure the form submission is processed
    setTimeout(() => {
        contactForm.reset();
    }, 500);
});
