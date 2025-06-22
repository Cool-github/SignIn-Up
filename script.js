function validateLogin() {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPassword").value;
  let emailError = document.getElementById("loginEmailError");
  let passError = document.getElementById("loginPasswordError");
  let valid = true;

  emailError.textContent = "";
  passError.textContent = "";

  if (!email) {
    emailError.textContent = "Email is required.";
    valid = false;
  }
  if (!pass) {
    passError.textContent = "Password is required.";
    valid = false;
  }
  return valid;
}

function validateSignup() {
  let username = document.getElementById("signupUsername").value;
  let email = document.getElementById("signupEmail").value;
  let pass = document.getElementById("signupPassword").value;
  let captcha = document.getElementById("captcha").checked;

  document.getElementById("signupUsernameError").textContent = "";
  document.getElementById("signupEmailError").textContent = "";
  document.getElementById("signupPasswordError").textContent = "";
  document.getElementById("captchaError").textContent = "";

  let valid = true;

  if (!username) {
    document.getElementById("signupUsernameError").textContent = "Username is required.";
    valid = false;
  }

  if (!email || !email.includes('@')) {
    document.getElementById("signupEmailError").textContent = "Enter a valid email.";
    valid = false;
  }

  if (pass.length < 6) {
    document.getElementById("signupPasswordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (!captcha) {
    document.getElementById("captchaError").textContent = "Please verify captcha.";
    valid = false;
  }

  return valid;
}

function validateForgot() {
  let email = document.getElementById("forgotEmail").value;
  let emailError = document.getElementById("forgotEmailError");
  let emailSuccess = document.getElementById("forgotEmailSuccess");

  emailError.textContent = "";
  emailSuccess.textContent = "";

  if (!email || !email.includes('@')) {
    emailError.textContent = "Enter email and try again!";
    return false;
  }

  // ✅ Show green success message
  emailSuccess.textContent = "Recovery email has been sent!";
  return false; // prevent form submission (remove this if using backend)
}