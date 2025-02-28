// تهيئة particles.js مع إعدادات محسنة
particlesJS('particles-js', {
  particles: {
    number: { value: 120 },
    color: { value: "#3498db" },
    opacity: { value: 0.7 },
    size: { value: 2.5 },
    line_linked: {
      color: "#2980b9",
      width: 1,
      opacity: 0.4
    }
  }
});

// تحسين رسائل النموذج
function handleSubmit(event) {
  event.preventDefault();
  const response = document.getElementById('response-message');
  
  fetch(event.target.action, {
    method: 'POST',
    body: new FormData(event.target)
  })
  .then(res => {
    if (res.ok) {
      response.innerHTML = "🎉 تم إرسال رسالتك بنجاح! سنرد في أقرب وقت";
      response.style.background = "rgba(46, 204, 113, 0.15)";
      document.getElementById('feedback-form').reset();
    } else {
      throw new Error();
    }
  })
  .catch(() => {
    response.innerHTML = "⚠️ حدث خطأ غير متوقع، يرجى المحاولة لاحقاً";
    response.style.background = "rgba(231, 76, 60, 0.15)";
  });
}
