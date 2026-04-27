//Faça um algoritmo que efetue o cálculo da quantidade de litros de combustível gastos em uma viagem, sabendo-se que o carro faz 12km/litro. Deverão ser fornecidos o tempo gasto na viagem e a velocidade média. Utilizar fórmula:
//  DISTANCIA = TEMPO * VELOCIDADE
//  LITROS USADOS = DISTANCIA/12
// O algoritmo deverá apresentar os valores da velocidade média, tempo gasto na viagem, distância percorrida e a quantidade de litros utilizados na viagem.
 
let tempoViagem = 3;
let velocMedia = 80;
let distanciaPercorrida = (tempoViagem * velocMedia);
let litrosGastos = (distanciaPercorrida/12); // km/L = 12

console.log(`A velocidade média foi de ${velocMedia} km/h.`)
console.log(`O tempo gasto foi de ${tempoViagem} horas.`)
console.log(`A distância percorrida foi de ${distanciaPercorrida} km.`)
console.log(`A quantidade de litros gasto foi de ${litrosGastos} litros.`)