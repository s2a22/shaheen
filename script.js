// script.js
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            input.style.borderColor = randomColor;
        });
    });
});
