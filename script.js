document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // إرسال النموذج عبر Fetch API
    fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target)
    })
    .then(response => {
        if (response.ok) {
            alert("تم إرسال الرسالة بنجاح!");
            event.target.reset();
        } else {
            alert("فشل في إرسال الرسالة. حاول مرة أخرى.");
        }
    })
    .catch(error => alert("حدث خطأ أثناء إرسال الرسالة: " + error));
});
