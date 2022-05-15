/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arrayWithNumbers) => {
  let allNumbersSum = 0;
  if (arrayWithNumbers === []) {
    return undefined;
  }
  for (let i = 0; i < arrayWithNumbers.length; i += 1) {
    if (Number.isNaN(arrayWithNumbers[i]) === true) {
      console.log('hey');
    } else if (Number.isNaN(arrayWithNumbers[i]) === false) {
      allNumbersSum += arrayWithNumbers[i];
      Math.round(allNumbersSum / arrayWithNumbers.length);
    }
  }
  return Math.round(allNumbersSum / arrayWithNumbers.length);
};

const vazio = [];

console.log(average(vazio));
console.log(average([2, 4, 6]));
console.log(average([1.25, 1.75]));

module.exports = average;
