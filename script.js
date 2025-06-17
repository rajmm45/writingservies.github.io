document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (name && email && message) {
    formMessage.classList.remove('hidden');
    formMessage.classList.add('block');
    // Here you could add logic to send data to a backend or email service.
    this.reset();
  } else {
    alert('Please fill out all fields correctly.');
  }
});
