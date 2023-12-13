const user = {
    user1 : {
        name: 'juniorngu',
        email: 'juniorngu84@gmail.com',
        password: '12345'
    },
    user2 : {
        name: 'roy',
        email: 'roy@gmail.com',
        password: '54321'
    }
}

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault()

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let errorUsername = document.getElementById("errorUsername")
    let errorPassword = document.getElementById("errorPassword")

    const isUsernameError = (username == user.user1.name || username == user.user2.name) ? false : true
    const isPasswordError = (password == user.user1.password || password == user.user2.password) ? false : true

    const wrongCredentails = isUsernameError || isPasswordError

    if (!wrongCredentails) {
        window.location.href = "home.html"
    }

    switch (isUsernameError) {
        case true:
            errorUsername.innerHTML = "Username is incorrect"
            break;
        default:
            break;
    }


    switch (isPasswordError) {
        case true:
            errorPassword.innerHTML = "Password is Incorrect"
            break;
    
        default:
            break;
    }

})