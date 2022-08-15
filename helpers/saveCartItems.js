const saveCartItems = (lista) => {  
   localStorage.setItem('cartItems', JSON.stringify(lista));
  };
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
