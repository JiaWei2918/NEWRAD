document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // You can send this data to your backend here.
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  document.getElementById('status').textContent = "Form submitted successfully!";
});
