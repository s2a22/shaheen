document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('emailInput');
    
    // Email validation
    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = '#4CAF50';
        } else {
            emailInput.style.borderColor = '#333';
        }
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        try {
            const response = await fetch('https://formspree.io/f/xjkgnkdy', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if(response.ok) {
                showSuccess();
                form.reset();
                emailInput.style.borderColor = '#333';
            } else {
                alert('Error sending message!');
            }
        } catch (error) {
            alert('Connection error!');
        }
    });
});

function showSuccess() {
    document.getElementById('success-message').style.display = 'block';
}

function closeSuccess() {
    document.getElementById('success-message').style.display = 'none';
}
