const logInBtn = document.querySelector('#logIn-btn');
const signUpBtn = document.querySelector('#signUp-btn');
const registerContainer = document.querySelector('#register-container');
const loginMainContainer = document.querySelector('#login-main-container');
const signupCloseBtn = document.querySelector('.close-button');
const loginCloseBtn = document.querySelector('#login-close-button');
// console.log(formCloseBtn);

signUpClicking();
function signUpClicking() {
    signUpBtn.addEventListener('click', () => {
        console.log('click');
        registerContainer.style.display = 'flex';
    })

    signupCloseBtn.addEventListener('click', () => {
        console.log('click');
        registerContainer.style.display = 'none';
    })
}

loginClicking();
function loginClicking() {
    logInBtn.addEventListener('click', () => {
        console.log('click');
        loginMainContainer.style.display = 'flex';
    })

    loginCloseBtn.addEventListener('click', () => {
        console.log('click');
        loginMainContainer.style.display = 'none';
    })
}