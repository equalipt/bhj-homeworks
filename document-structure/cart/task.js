const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

Array.from(products).forEach((product) => {
  const quantityValue = product.querySelector('.product__quantity-value');
  const quantityInc = product.querySelector('.product__quantity-control_inc');
  const quantityDec = product.querySelector('.product__quantity-control_dec');
  const productAdd = product.querySelector('.product__add');

  let value = +quantityValue.textContent;

  quantityInc.addEventListener('click', () => {
    quantityValue.textContent = ++value;
  });

  quantityDec.addEventListener('click', () => {
    quantityValue.textContent = value > 1 ? --value : 1;
  });

  productAdd.addEventListener('click', () => {
    const productId = product.dataset.id;
    const productImage = product.querySelector('.product__image');

    const isCartProduct = Array.from(cartProducts.children).find((elem) => {
      return elem.firstElementChild.dataset.id === productId;
    });

    if (isCartProduct) {
      const cartProductCount = isCartProduct.querySelector('.cart__product-count');
      cartProductCount.textContent = Number(cartProductCount.textContent) + Number(quantityValue.textContent);
    } else {
      const imgSrc = productImage.getAttribute('src');
      const cartProduct = document.createElement('div');
      cartProduct.innerHTML = `
        <div class="cart__product" data-id="${productId}">
          <img class="cart__product-image" src="${imgSrc}">
          <div class="cart__product-count">${quantityValue.textContent}</div>
        </div>
      `;
      cartProducts.appendChild(cartProduct);
    }

    quantityValue.textContent = 1;
    value = 1;
  });
});