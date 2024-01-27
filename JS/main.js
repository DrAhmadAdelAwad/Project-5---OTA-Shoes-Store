// define Products
let productsDom = document.querySelector(".products");
let products = productsDB;

//  Display Products
let drawProductsUI;
(drawProductsUI = function (products = []) {
  let productsUI = products.map((item) => {
    return `
        <div class="product-item">
                    <img src="${item.imgUrl}"    class="product-item-img">
                    <div class="product-item-desc">
                        <a onclick="saveItemData(${item.id})">${item.title}</a>
                        <p>${item.desc}</p>
                        <span>Size : ${item.size}</span>
                        <br><span id="product-item-price">Price : ${
                          item.price
                        } L.E</span>
                    </div>

                    <div class="product-item-actions">
                        <button class="add-to-cart"  onclick="addedToCart(${
                          item.id
                        })"><i class="fas fa-cart-plus"></i></button>
                        <i class="fas fa-heart favourite" 
                        style="color: ${item.liked === true ? "red" : ""}"
                        onclick="addToFavourite(${item.id})"></i>
                    </div>
                </div>
        `;
  });
  productsDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);

// Add To Cart
function addedToCart(id) {
  if (localStorage.getItem("username")) {
    let products = JSON.parse(localStorage.getItem("products")) || products;
    let product = products.find((item) => item.id === id);

    let isProductInCart = addedItem.some((i) => i.id === product.id);

    if (isProductInCart) {
      addedItem = addedItem.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addedItem.push(product);
    }
    // UI
    cartProductsDivDom.innerHTML = "";
    addedItem.forEach((item) => {
      cartProductsDivDom.innerHTML += `<div class="itemInCart-info"> <p class="itemInCart-title"> ${
        item.title
      } </p>  <p class="itemInCart-count"> ${
        item.qty
      }</p> <p class="itemInCart-price">${item.price * item.qty}</p> </div>
      `;
    });

    // Save Data
    localStorage.setItem("productsInCart", JSON.stringify(addedItem));
    // Add Count of Items
    let cartProductItems = document.querySelectorAll(".cart-products div div");
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductItems.length;
  } else {
    window.location = "login.html";
  }
}

function getUniqueArr(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return unique;
}

function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "cartDetails.html";
}

// search Function
let input = document.getElementById("search");

input.addEventListener("keyup", function (e) {
  search(e.target.value, JSON.parse(localStorage.getItem("products")));

  if (e.target.value.trim() === "")
    drawProductsUI(JSON.parse(localStorage.getItem("products")));
});

function search(title, myArray) {
  let arr = myArray.filter(
    (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
  );
  drawProductsUI(arr);
}

getUniqueArr;

// Add to Favourite
let favouriteItems = localStorage.getItem("productsFavourite")
  ? JSON.parse(localStorage.getItem("productsFavourite"))
  : [];

function addToFavourite(id) {
  if (localStorage.getItem("username")) {
    let product = products.find((item) => item.id === id);
    product.liked = true;
    favouriteItems = [...favouriteItems, product];
    let uniqueProducts = getUniqueArr(favouriteItems, "id");
    localStorage.setItem("productsFavourite", JSON.stringify(uniqueProducts));
    products.map((item) => {
      if (item.id === product.id) {
        item.liked = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    drawProductsUI(products);
  }
}

// filter products by size

let sizeFilter = document.getElementById("size-filter");

sizeFilter.addEventListener("change", filterBySize);

function filterBySize(e) {
  let val = e.target.value;
  let products = JSON.parse(localStorage.getItem("products")) || products;

  if (val === "All") {
    drawProductsUI(products);
  } else {
    products = products.filter((i) => i.size === val);
    drawProductsUI(products);
  }
}
