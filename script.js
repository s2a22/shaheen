// تهيئة خلفية particles.js داكنة
particlesJS('particles-js', {
  particles: {
    color: { value: "#4a4a4a" }, // لون رمادي غامق
    opacity: { value: 0.7 },
    size: { value: 3 },
    line_linked: {
      color: "#5a5a5a",
      width: 1
    }
  }
});

// إصلاح إرسال الرسائل
function handleSubmit(event) {
  event.preventDefault();
  const responseMessage = document.getElementById('response-message');
  
  fetch(event.target.action, {
    method: 'POST',
    body: new FormData(event.target)
  })
  .then(response => {
    if (response.ok) {
      responseMessage.innerHTML = "✅ تم الإرسال بنجاح!";
      responseMessage.style.color = "#2ecc71";
      document.getElementById('feedback-form').style.display = 'none';
    } else {
      throw new Error('فشل الإرسال');
    }
  })
  .catch(() => {
    responseMessage.innerHTML = "❌ حدث خطأ، حاول مرة أخرى!";
    responseMessage.style.color = "#e74c3c";
  });
  
  event.target.reset();
}
