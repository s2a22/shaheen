document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  const form = this;
  const successMessage = document.getElementById('form-message');

  fetch(form.action, {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        successMessage.textContent = 'Message sent successfully!';
        form.reset();
        setTimeout(() => {
          successMessage.textContent = '';
        }, 3000);
      } else {
        throw new Error('Failed to send message.');
      }
    })
    .catch((error) => {
      console.error(error);
      successMessage.textContent = 'An error occurred while sending your message.';
      setTimeout(() => {
        successMessage.textContent = '';
      }, 3000);
    });
});
