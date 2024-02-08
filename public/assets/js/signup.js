document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    if (this.checkValidity()) {
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      if (password !== confirmPassword) {
        document.getElementById('passwordMatch').style.display = 'block';
        event.stopPropagation();
        return;
      }
  
      const formData = new FormData(this);
  
      fetch('/signup', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Handle response from the server
        console.log(data);
        // You can redirect or perform additional actions based on the server response
      })
      .catch(error => {
        console.error('Error:', error);
      });
    } else {
      event.stopPropagation();
    }
  
    this.classList.add('was-validated');
  });
  