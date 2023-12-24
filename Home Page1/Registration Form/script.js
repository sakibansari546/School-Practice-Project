function toggleConPasswordVisibility() {
    var CpasswordInput = document.getElementById("Cpassword");
    var CpasswordIcon = document.getElementById("CpasswordIcon");

    if (CpasswordInput.type === "password") {
        CpasswordInput.type = "text";
        CpasswordIcon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
    } else {
        CpasswordInput.type = "password";
        CpasswordIcon.innerHTML = '<i class="fa-regular fa-eye"></i>'
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordIcon = document.getElementById("passwordIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
    } else {
        passwordInput.type = "password";
        passwordIcon.innerHTML = '<i class="fa-regular fa-eye"></i>'
    }
}


const form = document.querySelector('form');
const loginContainer = document.querySelector('.login-container');


const CpasswordInput = document.querySelector("#Cpassword");
const CpasswordIcon = document.querySelector("#CpasswordIcon");
let CpasswordIsValid = false;

CpasswordInput.addEventListener('keypress', () => {
    console.log(CpasswordInput.value);
    validateConPassword()
});
function validateConPassword() {
    var CpasswordValue = CpasswordInput.value.trim();
    CpasswordIsValid = CpasswordValue === passwordInput.value.trim();
    console.log(CpasswordIsValid);

    if (CpasswordIsValid) {
        CpasswordIcon.style.animation = "";
        CpasswordIcon.style.color = "#7114ff";
    } else {
        CpasswordIcon.style.animation = "horizontal-shaking .2s 5 ";
        CpasswordIcon.style.color = "red";
    }
}



let nameValid = false;
nameValidate();

function nameValidate() {
    const nameInput = document.querySelector("#name");
    const nameICon = document.querySelector("#nameIcon");
    const nameTickICon = document.querySelector(".name-tick-icon");
    console.log(nameTickICon);

    nameInput.addEventListener('keyup', () => {
        // console.log(nameInput.value);
        validateName()
    });

    function validateName() {
        var nameValue = nameInput.value.trim();
        nameValid = nameValue.length >= 3;
        // console.log(CpasswordIsValid);

        if (nameValid) {
            nameTickICon.style.display = 'block';
            nameICon.style.display = 'none';
            nameICon.style.animation = "";
            nameTickICon.style.color = '#7114ff'
        } else {
            nameTickICon.style.display = 'none';
            nameICon.style.display = 'block';
            nameICon.style.animation = "horizontal-shaking .2s 5 ";
            nameICon.style.color = "red";
        }
    }
}










const tickEmailIcon = document.querySelector(".tick");
const emailInput = document.querySelector("#email");
const emailIcon = document.querySelector("#emailIcon");
let emailIsValid = false;
console.log(tickEmailIcon, emailInput, emailIcon);

emailInput.addEventListener('keyup', () => {
    emailValidate();
    console.log(emailInput.value)
    // console.log(emailInput.value);
});
function emailValidate() {
    let emailValue = emailInput.value.trim();
    emailIsValid = /\S+@\S+\.\S+/.test(emailValue);
    if (emailIsValid) {
        tickEmailIcon.style.display = 'block';
        emailIcon.style.display = 'none'
        tickEmailIcon.style.color = '#7114ff'
        emailIcon.style.animation = "";
    } else {
        tickEmailIcon.style.display = 'none';
        emailIcon.style.display = 'block'
        emailIcon.style.animation = "horizontal-shaking .2s 5 ";
        emailIcon.style.color = "red";
    }
}



const passwordInput = document.querySelector("#password");
const passwordIcon = document.querySelector("#passwordIcon");
let passwordIsValid = false;

passwordInput.addEventListener('keyup', validatePassword)
function validatePassword() {
    var passwordValue = passwordInput.value.trim();
    passwordIsValid = passwordValue.length >= 8;

    if (passwordIsValid) {
        passwordIcon.style.animation = "";
        passwordIcon.style.color = "#7114ff";
    } else {
        passwordIcon.style.animation = "horizontal-shaking .2s 5 ";
        passwordIcon.style.color = "red";
    }
}



function afterSubmitPage() {
    const submitPage = document.querySelector('.submit-container');
    const errorIcon = document.querySelector('.icon-error');
    const validateInputError = document.querySelector('.valid-input');
    const loginError = document.querySelector('.valid-error');
    const errorIconContainer = document.querySelector('.icon-error');

    // if (emailIsValid && passwordIsValid) {
    //     submitPage.style.display = 'flex';
    //     loginContainer.style.display = 'none';
    //     errorIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
    //     errorIcon.style.color = 'rgb(0, 195, 0)';
    //     validateInputError.innerHTML = 'Login successfully';
    //     loginError.innerHTML = 'Go to your profile page';
    //     errorIconContainer.style.borderColor = 'rgb(0, 195, 0)'
    // } else {
    //     submitPage.style.display = 'flex';
    //     loginContainer.style.display = 'none';
    // }

    if (nameValid && CpasswordIsValid && emailIsValid && passwordIsValid) {
        submitPage.style.display = 'flex';
        loginContainer.style.display = 'none';
        errorIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
        errorIcon.style.color = 'rgb(0, 195, 0)';
        validateInputError.innerHTML = 'Register successfully';
        loginError.innerHTML = 'Go to your LogIn page';
        errorIconContainer.style.borderColor = 'rgb(0, 195, 0)'
    }

    else {
        submitPage.style.display = 'flex';
        loginContainer.style.display = 'none';
    }
}


const submitPageBtn = document.querySelector('.ok-btn');
submitPageBtn.onclick = onload;
function onload() {
    window.location.reload();
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    afterSubmitPage();
});






// const registerConatiner = document.querySelector('#register-container');

