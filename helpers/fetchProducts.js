const fetchProducts = async (computador) => {
  if (computador === undefined) {
    return Promise.reject(new Error('You must provide an url'));
  }
  const pc = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
  const response = await fetch(pc);
  const data = await response.json();
  const { results } = data;
  return results;
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
fetchProducts('computador');