document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate sending the message (replace this with actual server-side logic)
  document.getElementById('form-message').textContent = 'Message sent successfully!';
  document.getElementById('contact-form').reset(); // Clear the form
});
