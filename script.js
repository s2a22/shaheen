// وظيفة لتبديل حالة القائمة (الظهور/الإخفاء) عند الضغط على الثلاث خطوط
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

// معالجة إرسال نموذج تواصل الرسائل
function handleSubmit(event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة

  const responseMessage = document.getElementById('response-message');
  responseMessage.innerHTML = "تم إرسال الرسالة بنجاح! شكراً لتواصلك معنا.";

  // إخفاء النموذج بعد إرسال الرسالة
  document.getElementById('feedback-form').style.display = 'none';

  // إرسال البيانات إلى Formspree
  fetch(event.target.action, {
    method: 'POST',
    body: new FormData(event.target)
  })
  .then(response => {
    if (response.ok) {
      console.log("تم إرسال الرسالة بنجاح");
    } else {
      responseMessage.innerHTML = "حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.";
    }
  })
  .catch(error => {
    responseMessage.innerHTML = "حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.";
  });

  // إعادة تعيين النموذج
  event.target.reset();
}

// تهيئة particles.js للخلفية المتحركة
particlesJS('particles-js', {
  particles: {
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    number: { value: 80 },
    size: { value: 3 }
  }
});

// زر الرجوع للأعلى: إظهاره عند التمرير
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('back-to-top').style.display = "block";
  } else {
    document.getElementById('back-to-top').style.display = "none";
  }
};

document.getElementById('back-to-top').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
