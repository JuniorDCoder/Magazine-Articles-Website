function register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Save registration data to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful! Now you can log in.');
}

function login() {
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Retrieve registration data from local storage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // Check if login credentials match registration data
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert('Login successful! Redirecting to the home page.');

        // Redirect to the home page or any other desired page
        window.location.href = 'index.html';
    } else {
        alert('Invalid login credentials. Please try again.');
    }
}
