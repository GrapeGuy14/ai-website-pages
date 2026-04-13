// Function to log the current page for debugging
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    console.log(`Successfully loaded: ${page || 'ai website.html'}`);

    // Example: Simple greeting in the console
    if (page === 'ai website.html' || page === '') {
        console.log("Welcome to the Home Page!");
    }
});

// Future interactive features can be added here, 
// such as handling the Contact Form submission.