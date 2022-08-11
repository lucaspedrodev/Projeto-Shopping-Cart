require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Teste se fetchProducts é uma função;', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  test('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  test('Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async() => {
   const pc = 'computador';
   const url = `https://api.mercadolibre.com/sites/MLB/search?q=${pc}`    
   await fetchProducts('computador');
   expect(fetch).toBeCalledWith(url);
  })
  test('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const retorno = await fetchProducts('computador')
    expect(typeof retorno).toEqual(typeof computadorSearch)
  })
  test('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error ('You must provide an url'))
    } 
  })
});
