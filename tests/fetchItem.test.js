require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Teste se fetchItem é uma função;', () => {
    expect(typeof fetchItem).toBe('function')
  });
  test('Execute a função fetchItem com o argumento MLB1615760527 e teste se fetch foi chamada', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  })
  test('Teste se, ao chamar a função fetchItem com o argumento MLB1615760527, a função fetch utiliza o endpoint https://api.mercadolibre.com/items/MLB1615760527', async() => {
   const pc = 'MLB1615760527';
   const url = `https://api.mercadolibre.com/items/${pc}`    
   await fetchItem("MLB1615760527");
   expect(fetch).toBeCalledWith(url);
  })
  test('Teste se o retorno da função fetchItem com o argumento MLB1615760527 é uma estrutura de dados igual ao objeto item, que já está importado no arquivo.', async () => {
    const retorno = await fetchItem('cMLB1615760527')
    expect(typeof retorno).toEqual(typeof item)
  })
  test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error ('You must provide an url'))
    } 
  })
});

