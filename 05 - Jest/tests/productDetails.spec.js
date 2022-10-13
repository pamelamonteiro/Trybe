const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const result = productDetails('Arroz', 'Feijao');
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
    expect(typeof Object.keys(result)).toBe('object');
    expect(result[0].details.productId).not.toEqual(result[1].details.productId);
    expect(result[0].details.productId).toContain('123');
    expect(result[1].details.productId).toContain('123');
  });
});
