function register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Save registration data to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful! Please log in.');

    // Hide registration section and show login section
    document.getElementById('registrationSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
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
        window.location.href = 'home.html';
    } else {
        alert('Invalid login credentials. Please try again.');
    }
}



function authenticate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve registration data from local storage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // Check if the user is registering or logging in
    if (storedUsername && storedPassword) {
        // User is registering
        alert('You are already registered. Please log in.');
    } else {
        // User is logging in
        if (username === storedUsername && password === storedPassword) {
            alert('Login successful! Redirecting to the home page.');
            // Redirect to the home page or any other desired page
            window.location.href = 'index.html';
        } else {
            alert('Invalid login credentials. Please try again.');
        }
    }
}
