function loginTogglePasswordVisibility() {
    var passwordInput = document.getElementById("login-password");
    var passwordIcon = document.getElementById("login-passwordIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
    } else {
        passwordInput.type = "password";
        passwordIcon.innerHTML = '<i class="fa-regular fa-eye"></i>'
    }
}




const LoginTickEmailIcon = document.querySelector("#login-tickIcon");
const LoginEmailInput = document.querySelector("#login-email");
const LoginEmailIcon = document.querySelector("#login-emailIcon");
let LoginEmailIsValid = false;

LoginEmailInput.addEventListener('keyup', () => {
    loginEmailValidate();
    // console.log(emailInput.value);
});
function loginEmailValidate() {
    let emailValue = LoginEmailInput.value.trim();
    LoginEmailIsValid = /\S+@\S+\.\S+/.test(emailValue);
    if (LoginEmailIsValid) {
        LoginTickEmailIcon.style.display = 'block';
        LoginEmailIcon.style.display = 'none'
        LoginTickEmailIcon.style.color = '#7114ff'
        LoginEmailIcon.style.animation = "";
    } else {
        LoginTickEmailIcon.style.display = 'none';
        LoginEmailIcon.style.display = 'block'
        LoginEmailIcon.style.animation = "horizontal-shaking .2s 5 ";
        LoginEmailIcon.style.color = "red";
    }
}



const loginPasswordInput = document.querySelector("#login-password");
const loginPasswordIcon = document.querySelector("#login-passwordIcon");
let loginPasswordIsValid = false;
loginPasswordInput.addEventListener('keyup', validatePassword)
function validatePassword() {
    var passwordValue = loginPasswordInput.value.trim();
    loginPasswordIsValid = passwordValue.length >= 8;

    if (loginPasswordIsValid) {
        loginPasswordIcon.style.animation = "";
        loginPasswordIcon.style.color = "#7114ff";
    } else {
        loginPasswordIcon.style.animation = "horizontal-shaking .2s 5 ";
        loginPasswordIcon.style.color = "red";
    }
}






function loginAfterSubmitPage() {
    const loginSubmitPage = document.querySelector('#login-submit-container');
    const loginErrorIcon = document.querySelector('#login-icon-error');
    const validateInputError = document.querySelector('#login-valid-input');
    const loginError = document.querySelector('#login-valid-error');
    const LoginErrorIconContainer = document.querySelector('#login-icon-error');

    if (LoginEmailIsValid && loginPasswordIsValid) {
        loginSubmitPage.style.display = 'flex';
        // loginSubmitPage.innerHTML = 'Loginnnnnnnnn';

        loginContainer.style.display = 'none';
        loginErrorIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
        loginErrorIcon.style.color = 'Green'
        LoginErrorIconContainer.style.borderColor = 'green';
        validateInputError.innerHTML = 'Login successfully';
        loginError.innerHTML = 'Go to your profile page';
        errorIconContainer.style.borderColor = 'rgb(0, 195, 0)'
    } else {
        loginSubmitPage.style.display = 'flex';
        loginContainer.style.display = 'none';
    }



}


const loginSubmitPageBtn = document.querySelector('#login-ok-btn');
loginSubmitPageBtn.onclick = onload;
function onload() {
    window.location.reload();
}


const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginAfterSubmitPage();
});






// const registerConatiner = document.querySelector('#register-container');

