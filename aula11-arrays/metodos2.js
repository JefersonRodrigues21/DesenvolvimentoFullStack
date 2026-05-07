//? Método filter(), recebe cada elemento do array e aplica uma instrução condicional a ele. Se essa condição for verdadeira, o elemento é colocado no array de resultado. Se for falsa, o elemento não é colocado lá.
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let resultado = numeros.filter((item) => item % 2 === 0); // Inline
// console.log(resultado);

// console.log("--------------------------------------------------------------------------");

// let numerosFiltrados = numeros.filter(function (valor) {
//   // função
//   return valor > 5;
// });
// console.log(numerosFiltrados);
// console.log("--------------------------------------------------------------------------");

// function buscarValores(valor) {
//   return valor < 5;
// }
// let numerosEncontrados = numeros.filter(buscarValores);
// console.log(numerosEncontrados);
// console.log("--------------------------outra-forma-de usar-----------------------------");

// let r1 = numeros.filter((valor) => {
//   return valor > 5;
// });
// console.log(r1);
// console.log("--------------------------outra-forma-de usar-----------------------------");

// var r2 = numeros.filter(valor => valor > 5);
// console.log(r2);
// console.log("--------------------------------------------------------------------------");

// let funcionarios = [
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Davi', idade: 22},
//     {nome: 'Arthur', idade: 62},
//     {nome: 'Lucas', idade: 40},
// ]

// let pessoasListagem = funcionarios.filter(
//     function(valor) {
//         return valor.nome.length < 5
//     }
// );
// console.log(pessoasListagem);
// console.log('-------------------------------------------------------------------');

//? Desafio
// let produtos = [
//     {id: 1, descricao: 'SmartPhone', categoria: 'Eletrônico'},
//     {id: 2, descricao: 'Notebook', categoria: 'Eletrônico'},
//     {id: 3, descricao: 'Geladeira', categoria: 'Eletrodoméstico'},
//     {id: 4, descricao: 'Liquidificador', categoria: 'Eletrodoméstico'}
// ];
// let selecao = produtos.filter(
//     function(item) {
//         return item.categoria === 'Eletrônico';
//     }
// );
// console.log(selecao);

// let selecao2 = produtos.filter(
//     function(item) {
//         return item.categoria === 'Eletrodoméstico';
//     }
// );
// console.log(selecao2);
// console.log('---------------------------------------------------------------------');

//? Método MAP (Array.map()) - permite a você iterar sobre o array e modificar seus elementos usando uma função de callback. A função callback será execuratada em cada um dos elementos do array.
// let arr = [3, 4, 5, 6];
// let modifiedArr = arr.map(function(element){
//     return element * 3;
// });
// console.log(modifiedArr);

// // ou pode fazer assim

// let arr2 = [3, 4, 5, 6];

// for (let i = 0; i < arr2.length; i++) {
//     arr2[i] = arr2[i] * 3;
// };
// console.log(arr2);
// console.log('--------------------------------------------------------------------------------');

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
// let multip = numbers.map(function(valor){
//     return valor * 2;
// });
// console.log(multip);

// // Outra forma de usar o MAP

// let funcionarios = [
//     {nome: 'Luiz', idade: 62},
//     {nome: 'David', idade: 22},
//     {nome: 'Arthur', idade: 18},
//     {nome: 'Lucas', idade: 40},
// ];
// nomes = funcionarios.map(pessoa => pessoa.nome);
// console.log(nomes);

//?