let cart = document.querySelector(".cart");
let cartProducts = document.querySelector(".cart__products");

document.addEventListener("click", e => {
    let product = e.target.closest(".product"), rect;
    if (!product) { 
      return false;
    }
    let valueOfQuantity = product.querySelector(".product__quantity-value");
    let src = product.querySelector(".product__image").getAttribute("src");

    if (e.target.classList.contains("product__quantity-control_dec")) {
        (valueOfQuantity.textContent > 1) && (valueOfQuantity.textContent -= 1);
    } else if (e.target.classList.contains("product__quantity-control_inc")) {
        valueOfQuantity.textContent -= -1;
    } else if (e.target.classList.contains("product__add")) {
        rect = addProduct(product.dataset.id, src, valueOfQuantity.textContent)
    };
})

function addProduct(id, src, quantity) {
    let cartProduct = document.querySelector(`.cart__product[data-id='${id}']`), rect;
    
    if (cartProduct) {
cartProduct.querySelector(".cart__product-count").textContent -= -quantity;
        rect = cartProduct.getBoundingClientRect();
    } else {
        rect = newProduct(id, src, quantity);
    }
    return rect;
}

function newProduct(id, src, quantity) {
    let product = createProduct(id, src, quantity);
    product.addEventListener("click", e => {
        cartProducts.removeChild(e.target.parentElement);
        !cartProducts.children.length && (cart.style.display = "none");
    });
    cartProducts.appendChild(product);
    return product.getBoundingClientRect();
}

function createProduct(id, src, quantity) {
    let product = document.createElement("div");
product.classList.add("cart__product");
    product.setAttribute("data-id", id);
    product.innerHTML = `<img class="cart__product-image" src="${src}">
                            <div class="cart__product-count">${quantity}</div>`;
    return product;
}
