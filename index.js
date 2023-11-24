function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone number').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation checks
    if (name === '' || email === '' || phone Number === '' || password === '' || confirmPassword === '') {
        alert('All fields are required');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Additional validation (e.g., email format)
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // If all validations pass, you can submit the form
    alert('Form submitted successfully!');
    document.getElementById('registrationForm').reset();
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
