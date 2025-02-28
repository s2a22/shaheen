// معالجة إرسال النموذج في قسم تواصل الرسائل
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = "جاري إرسال الرسالة...";

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

    this.reset();
});

// تهيئة particles.js للخلفية المتحركة
particlesJS('particles-js', {
  particles: {
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    number: { value: 80 },
    size: { value: 3 }
  }
});

// إظهار زر الرجوع للأعلى عند التمرير
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('back-to-top').style.display = "block";
    } else {
        document.getElementById('back-to-top').style.display = "none";
    }
};

// العودة للأعلى عند الضغط على زر الرجوع
document.getElementById('back-to-top').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// تفعيل التمرير السلس للروابط الداخلية في شريط التنقل
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.getAttribute('href').startsWith('#')) {
            event.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
