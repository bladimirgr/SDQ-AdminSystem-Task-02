const user = document.getElementById('user');
const password = document.getElementById('password');

const error = document.getElementById('error');

function login() {

    const getUser = localStorage.getItem('Users')

    let userObj = JSON.parse(getUser);
    
    console.log('%c⧭', 'color: #40fff2', userObj);

  
}