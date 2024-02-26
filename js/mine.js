let loginemail = document.getElementById("signInEmail");
let loginPassword = document.getElementById("signInPassword");

let btnlog = document.getElementById("logeinbtn");
let logInmassg = document.getElementById("alertmass");
let accounts = [];

if (localStorage.getItem("accounts") != null) {
  accounts = JSON.parse(localStorage.getItem("accounts"));
}

function signin() {
  if (empty() == true) {
    massage("All Inputs Required", "red");
  } else {
    if (existaccount() == true ) {
      window.location.href = "home.html";
      console.log("hiii");
    } else {
      massage("Email or password not correct!", "red");
    }
  }
}

btnlog.addEventListener("click", function() {
  signin();
});

function empty() {
  if (loginemail.value == "" || loginPassword.value == "") {
    return true;
  }
}

function massage(text, color) {
  logInmassg.innerHTML = text;
  logInmassg.classList.replace("d-none", "d-block");
  logInmassg.style.color = color;
}

function existaccount() {
  for (let i = 0; i < accounts.length; i++) {
    if (
      accounts[i].userEmail == loginemail.value &&
      accounts[i].userpassword == loginPassword.value
    ) {
      localStorage.setItem("username", accounts[i].name);
      return true;
    }
  }
}


