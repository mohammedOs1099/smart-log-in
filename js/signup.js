/* DOM SELECTIOM*/

let userName = document.getElementById("signUpName");
let email = document.getElementById("signUpEmail");
let password = document.getElementById("signUpPassword");
let signUpPtn = document.getElementById("signUpptn");
let signUpMessage = document.getElementById("successSignup");
let signUpFailed = document.getElementById("fSignup");
let validationMass = document.getElementById("validMass");
let massValBtn = document.getElementById("closemass");
let accounts;
let account;

if (localStorage.getItem("accounts") == null) {
  accounts = [];
} else {
  accounts = JSON.parse(localStorage.getItem("accounts"));
}

function signUp() {
  let userData = {
    name: userName.value,
    userEmail: email.value,
    userpassword: password.value,
  };

  account = userData;
  if (!exist() && isValidName() && isValidEmail() && isValidpass()) {
    accounts.push(userData);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    empty();
    signUpMessage.classList.remove("visually-hidden");
  } else {
    setTimeout(() => {
      signUpFailed.classList.add("visually-hidden");
    }, 3000);
  }
}
signUpPtn.addEventListener("click", function() {
  signUp();
});
function empty() {
  userName.value = "";
  email.value = "";
  password.value = "";
  setTimeout(() => {
    signUpMessage.classList.add("visually-hidden");
  }, 3000);
}

function exist() {
  for (let i = 0; i < accounts.length; i++) {
    if (
      accounts[i].name === account.name ||
      accounts[i].userEmail === account.userEmail
    ) {
      signUpFailed.classList.remove("visually-hidden");
      return true;
    }
  }
}

function isValidName() {
  let regex = /^[A-Z][a-z0-9]{2,15}$/;
  if (regex.test(userName.value)) {
    document
      .getElementById("name-validate")
      .classList.replace("d-block", "d-none");
    return true;
  } else {
    document
      .getElementById("name-validate")
      .classList.replace("d-none", "d-block");
    return false;
  }
}

function isValidEmail() {
  let regex = /^[A-Za-z0-9-_]+@(gmail|yahoo|hotmail)\.com$/;
  if (regex.test(email.value)) {
    document
      .getElementById("email-validate")
      .classList.replace("d-block", "d-none");
    return true;
  } else {
    document
      .getElementById("email-validate")
      .classList.replace("d-none", "d-block");

    return false;
  }
}
function isValidpass() {
  let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  if (regex.test(password.value)) {
    console.log("True");

    document
      .getElementById("password-validate")
      .classList.replace("d-block", "d-none");
    return true;
  } else {
    console.log("False");
    document
      .getElementById("password-validate")
      .classList.replace("d-none", "d-block");
    return false;
  }
}

function closeMassgeVal() {
  validationMass.classList.add("visually-hidden");
}
massValBtn.addEventListener("click", function() {
  closeMassgeVal();
});
