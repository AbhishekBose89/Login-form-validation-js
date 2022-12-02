let myForm = document.querySelector("#myForm");
let nameError = document.getElementById("nameErr");
let emailError = document.getElementById("emailErr");
let passwordError = document.getElementById("passwordErr");
let cPasswordError = document.getElementById("cPasswordErr");
let button = document.getElementById("btn");


//  implement the logic of focusing the next input element after entering the input field and pressing Enter.

let inputs = Array.from(document.querySelectorAll(".input"));
inputs.forEach((each, index) => {
  each.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.key == "Enter") {
      inputs[index + 1].focus();
    }
  });
});

// implement the logic to submit the form

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let values = Array.from(e.target);
  let name = values[0].value;
  let email = values[1].value;
  let password = values[2].value;
  let cPassword = values[3].value;

  // regular expressions

  let nameReg = /^[A-Za-z0-9]+$/i;
  let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

  let isValid = true;

  // validation check for name input field

  if (name.trim() == "") {
    nameError.innerText = `** Name cannot be empty`;
    isValid = false;
  } else if (name.length < 3 || name.length > 20) {
    nameError.innerText = `** Name must be between 3 - 20 characters`;
    isValid = false;
  } else if (!name.match(nameReg)) {
    nameError.innerText = `** Invalid Name`;
    isValid = false;
  } else {
    nameError.innerText = "";
  }

  // validation check for email input field

  if (email.trim() == "") {
    emailError.innerText = `** Email cannot be empty`;
    isValid = false;
  } else if (!email.match(emailReg)) {
    emailError.innerText = `** Please enter valid email`;
    isValid = false;
  } else {
    emailError.innerText = "";
  }

  // validation check for password input field

  if (password.trim() == "") {
    passwordError.innerText = `** Password cannot be empty`;
    isValid = false;
  } else if (password.length < 6 || password.length > 10) {
    passwordError.innerText = `** Password must be between 6-10 characters long`;
    isValid = false;
  } else if (!password.match(passwordReg)) {
    passwordError.innerText = `** Incorrect Password pattern (should contain one uppercase,one lowercase and one number )`;
    isValid = false;
  } else {
    passwordError.innerText = "";
  }

  // validation check for confirm password input field

  if (cPassword.length == 0) {
    cPasswordError.innerText = `** Confirm Password Cannot be empty`;
    isValid = false;
  } else if (cPassword.trim() !== password.trim()) {
    cPasswordError.innerText = `** Passwords don't match`;
    isValid = false;
  } else {
    cPasswordError.innerText = "";
  }

  // if all the input fields are correct then redirected to another webpage and form will be reset
  
  if (isValid) {
    window.location.href = "./signup.html";
    myForm.reset();
  }
});
