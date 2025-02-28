// معالجة إرسال نموذج الاشتراك في النشرة البريدية
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('newsletter-email').value;
  const newsletterResponse = document.getElementById('newsletter-response');

  // تحقق من صحة البريد الإلكتروني باستخدام تعبير منتظم
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    newsletterResponse.innerHTML = "البريد الإلكتروني غير صحيح. يرجى إدخال بريد صحيح.";
    newsletterResponse.style.color = "red";
  } else {
    // هنا يمكن إرسال رسالة بريد إلكتروني حقيقية
    newsletterResponse.innerHTML = "شكرًا لك على الاشتراك في النشرة البريدية!";
    newsletterResponse.style.color = "#27ae60";
  }
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
