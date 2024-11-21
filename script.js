document.addEventListener('DOMContentLoaded', function() {
    const colorInput = document.getElementById('colorInput');
    const form = document.getElementById('color-form');

    // Check if a color is already saved in localStorage
    const savedColor = localStorage.getItem('savedColor');
    if (savedColor) {
        console.log('Loaded color from localStorage:', savedColor);
    }

    // Event listener for the form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the current value of the color input
        const colorValue = colorInput.value;

         // Output the value to the console
         console.log('Current color value:', colorValue);
