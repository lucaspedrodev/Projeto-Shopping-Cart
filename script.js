const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
const getCart = document.querySelector('.cart__items');
// const getBtn = document.querySelector('.item__add'); tive que pegar o botão direto na função createProductImageElement

const addCartItens = async (item) => {
  const ftItem = await fetchItem(item); // pega o item pela função fetch item
  const { id: sku, title: name, price: salePrice } = ftItem; // desconstroi o objeto no formato do parametro da função createCartItemElement
  const add = createCartItemElement({ sku, name, salePrice }); // atribui a função com os parametros certos passados
  getCart.appendChild(add); // apenda a função com os parametros corretos na classe cart_items
  saveCartItems(getCart.innerHTML);
  // a função add CartItens busca o item com a fetchItens, desconstroi o objeto do item para passar os parametros para criar os elementos no carrinho de compras e apenda nos elementos de classe Cart_items.
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const btn = section.appendChild(createCustomElement( // criando uma const para ja pegar o botão 
    'button', 'item__add', 'Adicionar ao carrinho!',
    ));

  btn.addEventListener('click', () => { // criando o escutador passando a função addCartItens. 
    addCartItens(sku);          
  }); // quando clicarmos no botão adicionar carrinho, a função addCartItens sera acionada.
  return section;
};

// const chamaFetch = () => {
// fetchProducts('computador').then((resultado) => resultado.forEach((elemento) => {
//   const { sku, name, image } = elemento;
//  console.log(elemento);
//  i.appendChild(createProductItemElement(elemento));
// }));
// };

const itens = document.querySelector('.items');
const chamaFetch = async () => {
  const products = await fetchProducts('computador');
  console.log(itens);
    products.forEach((elemento) => {
      itens.appendChild(createProductItemElement({
        sku: elemento.id,
        name: elemento.title,
        image: elemento.thumbnail,
      }));
    });
  getSavedCartItems();
  const remove = document.querySelectorAll('.cart__items');
  remove.forEach((elemento) => {
    elemento.addEventListener('click', (event) => event.target.remove());
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// const cartItem = document.querySelector('.cart__items');
// const fItem = async (param) => {
//   const produto = await fetchItem(param);
//     produto.forEach((elemento) => {
//       cartItem.appendChild(createCartItemElement({ 
//         sku: elemento.id, 
//         name: elemento.title, 
//         SalePrice: elemento.price }));
//    });
//   };

const getBtnEsvaziar = document.querySelector('.empty-cart');
getBtnEsvaziar.addEventListener('click', () => {
getCart.innerHTML = '';
});
window.onload = () => {
  chamaFetch();
};
