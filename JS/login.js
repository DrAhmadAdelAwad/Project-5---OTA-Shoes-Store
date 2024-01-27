let username = document.querySelector("#username")
let password = document.querySelector("#password")
let login_btn = document.querySelector("#sign-in")

let getuser = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")


login_btn.addEventListener("click" , login)

function login (e){
    e.preventDefault();
    if(username.value === "" || password.value === ""){
        alert("Please Enter Your Data")
    }else{
        if(getuser && getuser.trim() === username.value.trim() && getpassword && getpassword === password.value){
            setTimeout(() => {
                window.location = "index.html";

            }, 1000);
        } else {
            alert("UserName or Password is Wrong !!");
        }
    }
}