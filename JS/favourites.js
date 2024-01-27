let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".noProducts");

function drawFavouriteProductsUi(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productsFavourite")).length == 0) {
    noProductsDom.innerHTML = "You Don't Have Favorite Items  !!";
    noProductsDom.style.cssText = "width: 70% ;color : red ; background-color : #ddd ; margin : 50px auto ; text-align : center ; font-size : 50px ; padding : 20px 0"
    setTimeout(() => {
      window.location = "index.html"

    }, 1000);
  }

  let products =
    JSON.parse(localStorage.getItem("productsFavourite")) || allProducts;
  let productsUi = products.map((item) => {
    return `
        <div class="product-item shapeNFavorite">
                    <img src="${item.imgUrl}"    class="product-item-img imgFavorite">
                    <div class="product-item-desc">
                        <h2>${item.title}</h2>
                        <span>Size : ${item.size}</span> <br>
                        <span id="costFavoite">Cost : ${item.price} L.E</span>
                        </div>
                    <div class="product-item-actions">
                        <button class="remove-from-cart" onclick="removeItemFromFavourite(${item.id})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
        `;
  });
  productsDom.innerHTML = productsUi.join("");
}

drawFavouriteProductsUi();

function removeItemFromFavourite(id) {
  let productsFavourite = localStorage.getItem("productsFavourite");
  if (productsFavourite) {
    let items = JSON.parse(productsFavourite);
    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsFavourite", JSON.stringify(filteredItems));
    drawFavouriteProductsUi(filteredItems);
  }
}
