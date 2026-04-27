// Escreva um algoritmo para ler o salário de um funcionário e o percentual de aumento. Calcular e escrever o valor do aumento e do novo salário.

let salario = 15000;
let percentualAumento = 10;

let valorAumento = (salario * percentualAumento) / 100;
let novoSalario = salario + valorAumento;
console.log(`Valor do aumento: R$ ${valorAumento.toFixed(2)}`);
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);

console.log('--------------------------------------------------------------------');

let salario2 = 15000;
let percentualAumento2 = 10;
let valorAumento2 = (salario2 * (percentualAumento2 / 100))

let resultado = (salario2 + valorAumento2);
console.log(`O novo salário é: R$ ${resultado.toFixed(2)}`);

console.log('-------------------Resolução do professor---------------------------------');

let salario3 = 15000;
let percentual = 10;
let aumento = 0;
let salarioComAumento = 0;

aumento = (salario3 * percentual) / 100;
salarioComAumento = salario3 + aumento;

console.log('Valor do salário reajustado é: ' + salarioComAumento);