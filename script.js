// تأثير نقرة مائية (Ripple Effect) على الروابط والازرار
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 500);
    });
});

// تأثير تمرير الماوس على الأبوكس
document.querySelectorAll('.box, .coming-soon-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'scale(1.05)';
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
    });
});

// تأثير تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
    document.querySelector('.preloader').remove();
});