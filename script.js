// معالجة إرسال النموذج وعرض النافذة المنبثقة
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = this;
    fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
    })
    .then(response => {
        if (response.ok) {
            showModal('تم إرسال الرسالة بنجاح!');
            form.reset();
        } else {
            throw new Error('فشل الإرسال');
        }
    })
    .catch(error => {
        console.error(error);
        showModal('حدث خطأ أثناء الإرسال');
    });
});

// دالة عرض النافذة المنبثقة
function showModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

// إغلاق النافذة المنبثقة عند النقر على علامة الإغلاق
document.getElementById('modal-close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// إغلاق النافذة عند النقر خارج محتواها
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// تغيير لون خلفية حقول الإدخال إلى لون داكن عند الكتابة
document.querySelectorAll('.animated-input').forEach(input => {
    input.addEventListener('input', function() {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 30%)`;
    });
});

// تحريك العناوين عشوائيًا
document.querySelectorAll('.animated-title').forEach(title => {
    title.style.animationDuration = `${2 + Math.random() * 2}s`;
});

// تبديل الوضع (Dark/Light Mode)
document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});

// زر العودة للأعلى: يظهر عند التمرير للأسفل ويعيد المستخدم إلى أعلى الصفحة بسلاسة
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
