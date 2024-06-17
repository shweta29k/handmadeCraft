const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

     
      const fullName = document.getElementById('fullName').value.trim();
      const phoneNumber = document.getElementById('phoneNumber').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirmPassword').value.trim();

     
      const nameRegex = /^[a-zA-Z\s]+$/;
      const phoneRegex = /^\d{10}$/;
      const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/;

    
      document.getElementById('nameError').textContent = '';
      document.getElementById('phoneError').textContent = '';
      document.getElementById('passwordError').textContent = '';
      document.getElementById('confirmPasswordError').textContent = '';

    
      let isValid = true;

      if (!nameRegex.test(fullName)) {
        document.getElementById('nameError').textContent = 'Name should contain only letters';
        isValid = false;
      }

      if (!phoneRegex.test(phoneNumber)) {
        document.getElementById('phoneError').textContent = 'Phone number should be 10 digits';
        isValid = false;
      }

      if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and contain at least one digit, one letter, and one special character';
        isValid = false;
      }

      if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
      }

      if (isValid) {
        signupForm.submit();
      }
    });
