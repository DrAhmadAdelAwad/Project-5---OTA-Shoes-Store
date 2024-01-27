let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");
let productDetails = products.find((item) => item.id == productId);

itemDom.innerHTML = `
<div class="container">
<div class="detailsContent">
<div class="imgDetails"><img src="${productDetails.imgUrl}" alt=""></div>
<div class="">
<h2 class="prodDetails">${productDetails.title}</h2>
<p class="descDetails">${productDetails.desc}</p>
<span class="sizeDetails"> Size : ${productDetails.size}</span><br>
<span class="priceDetails">Price : ${productDetails.price} LE</span><br>
</div>
</div>



</div>


`;

