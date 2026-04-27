// Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é?
let nota1 = 8;
let nota2 = 9;
let nota3 = 7;

let peso1 = nota1 * 2;
let peso2 = nota2 * 3;
let peso3 = nota3 * 5;

resultado = (peso1 + peso2 + peso3)/10;
console.log(`A Média final do aluno é: ${resultado}`);

console.log('------------Resposta-do-professor------------');

let n1 = 5;
let n2 = 4;
let n3 = 7;
let media = 0

media = (n1*2 + n2*3 + n3*5)/10;
console.log('A média ponderada é: ' + media);