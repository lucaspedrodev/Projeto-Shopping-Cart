const getSavedCartItems = () => {
  const getCart = document.querySelector('.cart__items');
  getCart.innerHTML = localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
