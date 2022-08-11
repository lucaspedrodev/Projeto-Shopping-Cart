const fetchItem = async (param) => {
  if (param === undefined) {
    return Promise.reject(new Error('You must provide an url'));
  }
  const pc = `https://api.mercadolibre.com/items/${param}`;
  const response = await fetch(pc);
  const data = await response.json();
  console.log(data);
  return data;
  };
fetchItem('MLB1615760527');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
