document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let user = {
        username: 'user',
        password: 'password123'
    };
    if (username !== user.username) {
        document.getElementById('username-error').textContent = 'Invalid username';
    }
    
    if (password !== user.password) {
        document.getElementById('password-error').textContent = 'Invalid password';
    }

    if (username === user.username && password === user.password) {
        window.location.href = 'index.html';
    } 
});