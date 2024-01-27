let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");
let userDom2 = document.getElementById("username");
let userEmailDom = document.getElementById("email");
let products = JSON.parse(localStorage.getItem("products")) || productsDB;

userDom2.innerHTML = ` ${get_user} ` + `<br>` ;
userEmailDom.innerHTML = get_email;

