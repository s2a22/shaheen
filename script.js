// ميزة النص المتغير في الهيدر
const phrases = ["أهلاً بك في موقعي", "تواصل معي بسهولة", "مرحبًا بك، لا تتردد في الاتصال"];
let currentPhrase = 0;
setInterval(() => {
    document.getElementById("dynamic-text").textContent = phrases[currentPhrase];
    currentPhrase = (currentPhrase + 1) % phrases.length;
}, 3000);

// تأثير ظهور سلس عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});

// تفعيل زر تبديل الوضع (Dark/Light Mode)
document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});

// تأثير حركة عند النقر على زر الإرسال (ميزة جديدة)
document.querySelector('.submit-btn').addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 500);
});
