// تغيير لون الأيقونات عند النقر
function changeIconColor(icon) {
    const colors = ['#1abc9c', '#3498db', '#e74c3c', '#f1c40f'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    icon.style.color = randomColor;
}

// التحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// معالجة إرسال النموذج
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.contact-form form');
    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // منع الإرسال الافتراضي

            const emailInput = form.querySelector('input[name="email"]');
            const email = emailInput.value.trim();

            if (!validateEmail(email)) {
                alert('يرجى إدخال بريد إلكتروني صحيح.');
                return;
            }

            // إرسال النموذج عبر Fetch API
            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('تم إرسال الرسالة بنجاح!');
                    form.reset(); // إعادة تعيين النموذج
                } else {
                    throw new Error('حدث خطأ أثناء إرسال الرسالة.');
                }
            })
            .catch(error => {
                alert('حدث خطأ: ' + error.message);
            });
        });
    });
});
