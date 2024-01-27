let cartProductsDivDom = document.querySelector(".cart-products div");
let badgeDom = document.querySelector(".badge");
let shoppingCartIcon = document.querySelector(".shoppingCart");
let cartProductsMenu = document.querySelector(".cart-products");


shoppingCartIcon.addEventListener("click", openCartMenu);


//  Check if there is items in Localstorage

let addedItem = localStorage.getItem("productsInCart")
  ? JSON.parse(localStorage.getItem("productsInCart"))
  : [];

if (addedItem) {
  addedItem.map((item) => {
    cartProductsDivDom.innerHTML += `<p> ${item.title} ${item.qty} </p>`;
    badgeDom.style.display = "block";
    badgeDom.innerHTML = addedItem.length;
  });
}

// Open Cart Menu

function openCartMenu() {
  window.location = "cartProducts.html"
}

