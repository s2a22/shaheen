// تهيئة الجسيمات المتقدمة
particlesJS('particles-js', {
  particles: {
    number: { value: 100 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      out_mode: "out",
      bounce: false
    }
  }
});

// إدارة النموذج بدون إعادة تحميل
document.getElementById('myForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const status = document.querySelector('.form-status');
  
  status.textContent = 'جاري الإرسال...';
  status.style.color = 'gold';

  try {
    const response = await fetch('https://formspree.io/f/xjkgnkdy', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.innerHTML = '✅ تم الإرسال بنجاح!';
      form.reset();
    } else {
      throw new Error('فشل في الإرسال');
    }
  } catch (error) {
    status.innerHTML = `❌ ${error.message}`;
    status.style.color = 'red';
  }
});

// التحقق الحيوي من البريد
document.getElementById('userEmail').addEventListener('input', (e) => {
  const icon = e.target.parentElement.querySelector('.validation-icon');
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
  icon.style.background = isValid ? '#2ecc71' : '#e74c3c';
});

// عداد الحروف
document.getElementById('userMessage').addEventListener('input', (e) => {
  const counter = e.target.parentElement.querySelector('.char-counter');
  counter.textContent = `${e.target.value.length}/500`;
  counter.style.color = e.target.value.length > 450 ? '#e74c3c' : '#fff';
});
