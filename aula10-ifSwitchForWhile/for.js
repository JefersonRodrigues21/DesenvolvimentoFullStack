// for, for/in, for/of
let carros = [
  { id: 1, modelo: "Corsa", marca: "Chevrolet", preco: 45000, cod: 478156 },
  { id: 2, modelo: "Punto", marca: "Fiat", preco: 120000, cod: 478161 },
];
let total, carro;

for (let i = 0; i < carros.length; i++) {
  total += carros[i].preco;
}

for (let i in carro) {
  total += carros[i].preco;
}

for (let carro of carros) {
  total += carro.preco;
}

console.log('-----------------------------------------------------------------------');

let a = [10, 20, 30, 40, 50, 60];

a.forEach((valor) => console.log(valor));

let tot = 0;
a.forEach((valor) => {
  tot += valor;
});

console.log(tot);

a.forEach(function (valor, indice, array) {
  console.log(array[indice]);
});

console.log("-------------------------------------------------------------");

let car = [
  { marca: "Volvo", modelo: "Xc 60", ano: 2026 },
  { marca: "Audi", modelo: "Audi A3", ano: 2025 },
];

for (let característica in car) {
  console.log(car[característica].marca);
}

for (let c of car){
    console.log(c.ano)
}

let c = 5;
while (c <= 10){
    console.log(c);
    c++;
}