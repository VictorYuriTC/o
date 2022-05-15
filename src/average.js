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
  if (arrayWithNumbers.length === 0) {
    return undefined;
  }
  for (let i = 0; i < arrayWithNumbers.length; i += 1) {
    if (typeof arrayWithNumbers[i] !== 'number') {
      return undefined;
    }
    allNumbersSum += arrayWithNumbers[i];
  }
  return Math.round(allNumbersSum / arrayWithNumbers.length);
};

const empty = [];
const notIntegerNumbers = [1.25, 1.75];

console.log(average(notIntegerNumbers));
console.log(average([2, 4, 6, 8, 10]));
console.log(average(['alô']));
console.log(average(empty));

module.exports = average;
