function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Add loading state to button
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Logging in...';
    submitButton.disabled = true;

    // Simulate API call (replace with actual API call)
    setTimeout(() => {
        // For demo purposes, we'll just redirect to dashboard
        // In real application, you would validate credentials with backend
        if (email && password) {
            // Store remember me preference if checked
            if (rememberMe) {
                localStorage.setItem('rememberMe', 'true');
                localStorage.setItem('email', email);
            } else {
                localStorage.removeItem('rememberMe');
                localStorage.removeItem('email');
            }
            
            // Redirect to dashboard
            window.location.href = 'pages/dashboard.html';
        } else {
            alert('Please enter valid credentials');
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    }, 1500);
}

// Check for remembered email on page load
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('rememberMe') === 'true') {
        const savedEmail = localStorage.getItem('email');
        if (savedEmail) {
            document.getElementById('email').value = savedEmail;
            document.getElementById('rememberMe').checked = true;
        }
    }
}); 