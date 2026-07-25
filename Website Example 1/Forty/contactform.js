// Initialize EmailJS (replace with your actual Public Key from EmailJS dashboard)
// emailjs.init("YOUR_PUBLIC_KEY");

function sendContactFormMessage(event) {
  if (event) event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const statusElement = document.getElementById('form-status');

  // Basic Validation
  if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
    statusElement.style.color = "red";
    statusElement.textContent = "Please complete all fields before sending.";
    return;
  }

  statusElement.style.color = "blue";
  statusElement.textContent = "Sending message...";

  // Parameters matching your EmailJS template variables
  const templateParams = {
    sender_name: nameInput.value.trim(),
    sender_email: emailInput.value.trim(),
    message_body: messageInput.value.trim()
  };

  // Send email via EmailJS
  emailjs.send('service_qydiyi2', 'template_22oi4md', templateParams)
    .then(function(response) {
      statusElement.style.color = "green";
      statusElement.textContent = "Message sent successfully!";

      // Clear input fields
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    }, function(error) {
      statusElement.style.color = "red";
      statusElement.textContent = "Failed to send message. Please try again later.";
      console.error('EmailJS Error:', error);
    });
}