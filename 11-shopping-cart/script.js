const cartContainer = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  console.log(item.querySelector('span.item__sku').innerText);
  return item.querySelector('span.item__sku').innerText;
}

function numFloat(element) {
  const preco = parseFloat(element.innerText.split('PRICE: $')[1]);
  return preco;
}

function pickNumber(element, precoTotal) {
  const preco = numFloat(element);
  const precoFinal = precoTotal + preco;
  return precoFinal;
}

function addTotalPrice() {
  const totalPrice = document.querySelector('.total-price');
  const cartItems = cartContainer;
  if (totalPrice === null) {
    const listItems = cartItems.querySelectorAll('li');
    let preco = 0;
    listItems.forEach((element) => {
      preco = pickNumber(element, preco);
    });
    cartItems.parentNode
      .insertBefore(
        (createCustomElement('p', 'total-price', `${preco}`)), cartItems.nextSibling,
      );
  } else {
    totalPrice.remove();
    addTotalPrice();
  }
}

function cartItemClickListener(event) {
  const cartItems = cartContainer;
  const cart = cartItems.querySelectorAll('li');
  const toRemove = event.target;
  cart.forEach((element) => {
    if (element === toRemove) {
      cartItems.removeChild(toRemove);
    }
  });
  saveCartItems(cartItems.innerHTML);
  addTotalPrice();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function addResponseToLocalStore() {
  const list = document.querySelectorAll('.cart__item');
  list.forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
}

function clearCart() {
  const cartItems = cartContainer;
  const items = cartItems.querySelectorAll('li');
  items.forEach((element) => {
    element.remove();
  });
  saveCartItems(cartItems.innerHTML);
  const priceTotal = document.querySelector('.total-price');
  priceTotal.innerHTML = '0.00';
}

function createLoading() {
  const itemsContainer = document.querySelector('.items');
  const loading = createCustomElement('p', 'loading', 'carregando...');
  itemsContainer.appendChild(loading);
}

function removeLoading() {
  const loading = document.querySelector('.loading');
  loading.remove();
}

async function addElementToCart(element) {
  const cartItems = cartContainer;
  const parent = element.target.parentElement;
  const parentId = getSkuFromProductItem(parent);
  const item = await fetchItem(parentId);
  const { id, title, price } = item;
  cartItems.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
  saveCartItems(cartItems.innerHTML);
  addTotalPrice();
}

function buttonAddMaker() {
  const buttonsAdd = document.querySelectorAll('.item__add');
  buttonsAdd.forEach((element) => {
    element.addEventListener('click', addElementToCart);
  });
}

window.onload = async () => {
  createLoading();
  const itemListInicial = await fetchProducts('computador');
  const itemList = itemListInicial.results;
  console.log(itemList);
  const section = document.querySelector('.items');
  itemList.forEach((element) => {
    const { id, title, thumbnail } = element;
    section.appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));
  });
  await removeLoading();
  buttonAddMaker();
  cartContainer.innerHTML = getSavedCartItems();
  addTotalPrice();
  addResponseToLocalStore();
  const buttonEmpty = document.querySelector('.empty-cart');
  buttonEmpty.addEventListener('click', clearCart);
};
