let userInfo = document.querySelector("#user-info")
let userDom = document.querySelector("#user")
let links = document.getElementById("links")
let logOutBtn = document.getElementById("logout")

let username = localStorage.getItem("username")
if(username){
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = `<span class="welcome">Hello,</span> ${username}`;
}

logOutBtn.addEventListener("click" , function (){
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html"
    }, 1000);
})