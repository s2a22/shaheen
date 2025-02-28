// تهيئة الجسيمات
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});

// إدارة النموذج
const contactForm = document.getElementById('contactForm');
const resultMessage = document.getElementById('formResult');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('.submit-btn');
  submitBtn.disabled = true;
  submitBtn.querySelector('.loading-dots').style.opacity = '1';

  try {
    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      showResultMessage('✅ تم الإرسال بنجاح! سنرد في أقرب وقت', 'success');
      contactForm.reset();
    } else {
      throw new Error('فشل في الإرسال');
    }
  } catch (error) {
    showResultMessage(`❌ خطأ: ${error.message}`, 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.querySelector('.loading-dots').style.opacity = '0';
  }
});

function showResultMessage(text, type) {
  resultMessage.textContent = text;
  resultMessage.className = `result-message ${type}`;
  setTimeout(() => resultMessage.textContent = '', 5000);
}

// زر العودة للأعلى
window.addEventListener('scroll', () => {
  const scrollBtn = document.getElementById('scrollTop');
  window.scrollY > 300 
    ? scrollBtn.classList.add('show')
    : scrollBtn.classList.remove('show');
});

document.getElementById('scrollTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// التحقق من البريد الإلكتروني أثناء الكتابة
document.getElementById('emailAddress').addEventListener('input', (e) => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
  e.target.style.borderColor = isValid ? '#2ecc71' : '#e74c3c';
});
