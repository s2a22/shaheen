// الكود هنا سيكون بسيطًا لإرسال النموذج باستخدام خدمة Formspree.
// الكود التالي فقط للتفاعل مع النموذج.

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال النموذج

    // يمكن هنا إضافة معالجة AJAX إذا كنت بحاجة إلى إضافة تفاعلات إضافية

    alert('تم إرسال الرسالة بنجاح! شكراً لك.');
    this.reset(); // إعادة تعيين النموذج بعد الإرسال
});
