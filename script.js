// Handle form submission
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const responseMessage = document.getElementById('response-message');
    responseMessage.style.color = "#fff"; // تغيير اللون للإشارة المرئية
    
    try {
        const formData = new FormData(this);
        const response = await fetch(event.target.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            responseMessage.innerHTML = "✅ تم إرسال الرسالة بنجاح! سأرد خلال 24 ساعة";
            this.reset();
        } else {
            const errorData = await response.json();
            throw new Error(errorData.error || 'خطأ في الإرسال');
        }
    } catch (error) {
        responseMessage.innerHTML = `❌ حدث خطأ: ${error.message}`;
    }
});

// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    color: { value: "#ffffff" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});

// Back to Top Button
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Email Validation
document.getElementById('email').addEventListener('input', function(e) {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    e.target.style.borderColor = isValid ? "#2ecc71" : "#e74c3c";
});
