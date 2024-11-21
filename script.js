document.addEventListener('DOMContentLoaded', function() {
    const colorInput = document.getElementById('colorInput');
    const form = document.getElementById('color-form');

    // Check if a color is already saved in localStorage
    const savedColor = localStorage.getItem('savedColor');
    if (savedColor) {
        console.log('Loaded color from localStorage:', savedColor);
    }