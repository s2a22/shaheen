// معالجة النموذج
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = this;
    const successMessage = document.getElementById('form-message');

    fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
    })
    .then(response => {
        if (response.ok) {
            successMessage.textContent = 'تم إرسال الرسالة بنجاح!';
            form.reset();
            setTimeout(() => successMessage.textContent = '', 3000);
        } else {
            throw new Error('فشل الإرسال');
        }
    })
    .catch(error => {
        console.error(error);
        successMessage.textContent = 'حدث خطأ أثناء الإرسال';
        setTimeout(() => successMessage.textContent = '', 3000);
    });
});

// تفاعل الحقول
document.querySelectorAll('.animated-input').forEach(input => {
    input.addEventListener('input', function() {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 95%)`;
    });
});

// تحريك العناوين عشوائيًا
document.querySelectorAll('.animated-title').forEach(title => {
    title.style.animationDuration = `${2 + Math.random() * 2}s`;
});
