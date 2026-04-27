let nome = 'Jeferson';
console.log(typeof(nome));
console.log(nome.toLocaleUpperCase());
console.log("-------------------------------------");
let nome2 = 23;
console.log(typeof(nome2));

if (typeof(nome2) === 'string') {
    console.log(nome2.toLocaleUpperCase());
} else {
    console.log('Você precisa usar uma string para utilizar o método toLocaleUpperCase()');
}
console.log("-------------------------------------");

// condição ? valor1 : valor2
// let status = (idade >= 18) ? 'Adulto' : 'Menor de idade';

let n = 3;
//n = n - 10;
n -= 10;
console.log(n);

let x = 10;
x++;

b = 20;
c = 60;

console.log(x);
console.log(n > x);
console.log(n <= x && b !== c);
console.log(!(n <= x || b !== c));
console.log('-----------------------------------------');

// Verificar se a é maior que b e b é divisivel por 2
console.log('Exercício 1');
let a = 15;
b = 20;
let resultado1 = (a > b) && (b % 2 === 0);
console.log(resultado1);

// verificar se b é maior igual a ou b dividido por 2 o resultado é 2
console.log('Exercício 2');
resultado2 = (b >= a) || (b / 2 === 2);
console.log(resultado2);

// verificar se a é maior que b e b maior igual a 5;
console.log('Exercício 3');
resultado3 = (a >b) && (b >= 5);
console.log(resultado3);

// verificar se b é par ou impar usando ternario
console.log('Exercício 4');
resultado4 = (b % 2 === 0) ? 'Par' : 'Ímpar';
console.log(resultado4);