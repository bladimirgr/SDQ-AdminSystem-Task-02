const user = document.getElementById('registerForm')

// let users = [];

function register() {

    
    const registerUser = {
        firstName: user[0].value,
        lastName: user[1].value,
        username: user[2].value,
        email: user[3].value,
        roles: user[4].value,
        password: user[5].value,
        date: user[6].value,
        favoriteColor: user[7].value
    }
    
    console.log('%c⧭', 'color: #f27999',registerUser);
    // const userSave = JSON.stringify(registerUser)
    // users.push(userSave)
    // localStorage.setItem('Users', users)

}