// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    if (!email) {
        alert('Please enter your email.');
        return;
    }

    alert('Login successful!');
    document.getElementById('email').value = '';
});