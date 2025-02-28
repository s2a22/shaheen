// عند إرسال النموذج
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال النموذج

    // إظهار رسالة التأكيد بعد إرسال النموذج
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = "تم إرسال الرسالة بنجاح! شكراً لتواصلك.";

    // يمكن أن تكون هذه النقطة بحاجة لربط مع معالج AJAX أو إضافات أخرى 
    // مثل التعامل مع استجابة الخادم مباشرة هنا إذا لزم الأمر.
    this.reset(); // إعادة تعيين النموذج بعد الإرسال
});
