let welcomeuUserName = document.getElementById("username");
let btnLogOut = document.getElementById("logout");

if(localStorage.getItem("username") != null){
    welcomeuUserName.innerHTML =`${localStorage.getItem("username")}`;
    
}else{
    massage("Pleas Login Frist","text-danger");
    btnLogOut.innerText="Login"
}

 function LogOut(){
    window.location.href="index.html";

    localStorage.removeItem("username");
   

 }

btnLogOut.addEventListener("click",function(){
    LogOut();

})

function massage(text, color) {
    welcomeuUserName.innerHTML = text;
    welcomeuUserName.classList.replace ("text-white",color);
  }
