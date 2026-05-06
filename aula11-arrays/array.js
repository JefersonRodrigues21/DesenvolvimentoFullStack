// Lista de objetos
// Objetos que contem múltiplos valores armazenados em uma lista de itens separada por vírgulas.
// Um objeto arry pode ser armazenado em variáveis e ser tratado de forma muito similar a qualquer outro tipo de valor.
// JavaScript não possoui um tipo de dados array específico.

// let = [item 01, item 02, item 03, ..., item n]

let valores = [8,1,7,2,9];

console.log(valores[3]);

console.log(`Array invertido ${valores.reverse()}`); // Coloca os elementos em ordem contrária.

for(let pos = 0; pos < valores.length; pos++){ // length - número de elementos da array.
    console.log(`Posição: ${pos} valor: ${valores[pos]}`);
};

let carros = [];
carros[0] = 'Volvo';
carros[1] = 'Jeep';
// ou
let motos = new Array('BMW', 'YAMAHA', 'HONDA');

// CALCULAR A MÉDIA DE TODOS SO NÚMEROS DE UMA ARRAY
console.log('---------------------------------------------------');

let soma = 0;

for (let pos = 0; pos < valores.length; pos++){
    soma += valores[pos];
}

let media = soma/valores.length;

console.log(media);

let arr = new Array (10,20,30);
console.log("arr.constructor é: " + arr.constructor);