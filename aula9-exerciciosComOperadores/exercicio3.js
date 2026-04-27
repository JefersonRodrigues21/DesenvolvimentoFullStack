// O custo de um carro novo ao consumidor é a soma do custo de fábrica com o percentual do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escreva um algoritmo para ler o custo de fábrica de um carro e escrever o custo ao consumidor.
let custoFabrica = 35000;
let percentualDistribuidor = 0.28;
let impostos = 0.45;
let custoFinal = (custoFabrica + (custoFabrica * percentualDistribuidor) + (custoFabrica * impostos));

console.log(`O custo final ao consumidor é no valor de: R$ ${custoFinal.toFixed(2)} reais.`);

console.log("--------------------------------------------------");

let custoFabrica2 = 20000;
let percentualDistribuidor2 = 0.28;
let percentualImpostos = 0.45;

let custoDistribuidor2 = custoFabrica2 * percentualDistribuidor2;
let custoImpostos = custoFabrica2 * percentualImpostos;
let custoConsumidor = custoFabrica2 + custoDistribuidor2 + custoImpostos;

console.log("O custo ao consumidor é: R$ " + custoConsumidor.toFixed(2));

console.log("--------------Resposta-do-professor-----------------------------");

let custoFabrica3 = 40000;
let porcDist;
let porcImp;
let custoFinal3;

porcDist = custoFabrica3 * 28/100;
porcImp = custoFabrica3 * 45/100;
custoFinal3 = custoFabrica3 + porcDist + porcImp;

console.log('O custo final ao consumidor é: ' + custoFinal3);
