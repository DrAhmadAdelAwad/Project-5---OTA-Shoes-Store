let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");

function drawCartProductsUi(allProducts = []) {
  let fullPrice = document.querySelector(".full-price");

  if (JSON.parse(localStorage.getItem("productsInCart")).length == 0) {
    noProductsDom.innerHTML = "There Is No Items !";
    noProductsDom.style.cssText = "width: 70% ;color : red ; background-color : #ddd ; margin : 50px auto ; text-align : center ; font-size : 50px ; padding : 20px 0"

    fullPrice.remove();
    setTimeout(() => {
      window.location = "index.html"

    }, 1000);
  }

  let products =
    JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
    // let fullPrice = document.querySelector(".full-price");
    let cash = 0;
    products.forEach((item) => {cash +=(item.qty * item.price)});
  fullPrice.innerHTML = `Total Cost ${cash} L.E`;
  let productsUi = products.map((item) => {
    return `
        <div class="product-item shapeNCartPage">
                    <img src="${item.imgUrl}"    class="product-item-img imgCartPage">
                    <div class="product-item-desc">
                        <h2 class="titleCartPage">${item.title}</h2>
                        <p >${item.desc}</p>
                        <span id="descProCartPage">Size : ${item.size}</span> <br>
                        <span id="descProCartPage">Quantity : ${item.qty}</span><br>
                        <span id="totalincartmenu" > Total : ${
                          item.qty * item.price
                        } L.E </span>

                        </div>
                    <div class="product-item-actions">
                        <button class="remove-from-cart" onclick="removeItemFromCart(${
                          item.id
                        })"><i class="fas fa-trash"></i></button>
            
                    </div>
                </div>

        `;
  });

  productsDom.innerHTML = productsUi.join("");
}




drawCartProductsUi();

function removeItemFromCart(id) {
  let productsInCart = localStorage.getItem("productsInCart");
  if (productsInCart) {
    let items = JSON.parse(productsInCart);
    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
    drawCartProductsUi(filteredItems);
  }
}
