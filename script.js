// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submit

    // Show response message after form submission
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = "جاري إرسال الرسالة...";

    // Send form data using Fetch API to Formspree
    fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target)
    })
    .then(response => {
        if (response.ok) {
            responseMessage.innerHTML = "تم إرسال الرسالة بنجاح! شكراً لتواصلك.";
        } else {
            responseMessage.innerHTML = "حدث خطأ في إرسال الرسالة. يرجى المحاولة لاحقًا.";
        }
    })
    .catch(error => {
        responseMessage.innerHTML = "حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.";
    });

    // Reset the form after submission
    this.reset();
});

// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    number: { value: 80 },
    size: { value: 3 }
  }
});

// Show Back-to-Top button when scrolling
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('back-to-top').style.display = "block";
    } else {
        document.getElementById('back-to-top').style.display = "none";
    }
};

// Scroll to the top when clicking Back-to-Top button
document.getElementById('back-to-top').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
// إظهار زر الرجوع للأعلى عند التمرير
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('back-to-top').style.display = "block";
    } else {
        document.getElementById('back-to-top').style.display = "none";
    }
};

// العودة للأعلى عند الضغط على الزر
document.getElementById('back-to-top').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// تحسين التنقل في الموقع عبر الكمبيوتر
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.getAttribute('href').startsWith('#')) {
            event.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

