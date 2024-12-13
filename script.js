var emailInput = document.querySelector("#emailInput");
var passwordInput = document.querySelector("#passwordInput");
var nameInput = document.querySelector("#nameInput");
var signUpBtn = document.querySelector("#signUpBtn");
var loginBtn = document.querySelector("#sendToHomePage");

// Array of users
var users = [];

//Get from Local Storge
if (localStorage.getItem("users") !== null){
  users = JSON.parse(localStorage.getItem("users"))
}
                                               
//************************** Validation **************************
// Validate Name
function validateName() {
  var errorValidName = document.querySelector("#errorValidName");
  var regexName = /^[A-Z][a-z]{2,}$/gm;
  if (regexName.test(nameInput.value) === true) {
    errorValidName.classList.add("d-none");
    return true;
  } else if (regexName.test(nameInput.value) === false) {
    errorValidName.classList.remove("d-none");
    nameInput.classList.replace("mb-3", "mb-0");
    return false;
  }
}

// Validate Email
function validateEmail() {
  var errorValidEmail = document.querySelector("#errorValidEmail");
  var regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(emailInput.value) === true) {
    errorValidEmail.classList.add("d-none");
    return true;
  } else {
    errorValidEmail.classList.remove("d-none");
    emailInput.classList.replace("mb-3", "mb-0");
    return false;
  }
}

// Validate Password
function validatepassword() {
  var errorValidPassword = document.querySelector("#errorValidPassword");
  if (passwordInput.value === "") {
    errorValidPassword.classList.remove("d-none");
    passwordInput.classList.replace("mb-2", "mb-0")
    return false;
  } else {
    errorValidPassword.classList.add("d-none");
    return true;
  }
}

// Creating a new account and adding it to the Array of users
function createAccount() {
  var account = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  validateName();
  validateEmail();
  validatepassword();

  if (
    (validateEmail() === true, validateName() === true, validatepassword() === true)
  ) {
    users.push(account);
    addToLocalStorage();
    clearInputs();
  }
}

// Calling the Create account function
signUpBtn.addEventListener("click", function () {
  createAccount();
});

// Clearing the inputs for better user experience
function clearInputs() {
  emailInput.value = "";
  passwordInput.value = "";
  nameInput.value = "";
}

// Add to Local Storage
function addToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}

