// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submit

    // Show response message after form submission
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = "جاري إرسال الرسالة...";

    // Send form data using Fetch API to Formspree
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

    // Reset the form after submission
    this.reset();
});
