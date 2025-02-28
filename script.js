// معالجة إرسال نموذج التواصل (Feedback)
document.getElementById('feedback-form').addEventListener('submit', function(event) {
  event.preventDefault();
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

// معالجة إرسال نموذج النشرة البريدية
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const newsletterResponse = document.getElementById('newsletter-response');
  // هنا يمكن ربط خدمة حقيقية للاشتراك، ونحن نُحاكي الاستجابة
  newsletterResponse.innerHTML = "شكراً لاشتراكك في النشرة البريدية!";
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

// تفعيل التمرير السلس لروابط شريط التنقل
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(event) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      event.preventDefault();
      let target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
