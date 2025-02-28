// تهيئة particles.js
particlesJS.load('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 2, direction: "none" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" } }
    }
});

// تغيير لون الأيقونات
function changeIconColor(icon) {
    const colors = ['#1abc9c', '#3498db', '#e74c3c', '#f1c40f'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    icon.style.color = color;
}

// معالجة النموذج
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.email.value;
    const message = this.message.value;
    
    if (!validateEmail(email)) {
        showMessage('يرجى إدخال بريد إلكتروني صحيح.', 'red');
        return;
    }
    
    fetch('https://formspree.io/f/xjkgnkdy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message })
    })
    .then(response => {
        if (response.ok) {
            showMessage('تم الإرسال بنجاح!', '#1abc9c');
            this.reset();
        } else {
            throw new Error('حدث خطأ!');
        }
    })
    .catch(error => {
        showMessage('حدث خطأ، حاول لاحقًا.', 'red');
    });
});

// التحقق من البريد الإلكتروني
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// عرض الرسائل
function showMessage(text, color) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = text;
    formMessage.style.color = color;
    setTimeout(() => formMessage.textContent = '', 5000);
}
