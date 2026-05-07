//? Método forEach é usado para percorrer arrays, mas usa uma função de modo diferente do 'laço for' tradicional.
// a1.array.forEach(function(valor, indice, array) {
//     console.log(array[indice]);
// });

//numbers.forEach(number => console.log(number)); // Exemplo inline

// ou

let foods = ['bread', 'rice', 'meat', 'pizza'];

foods.forEach(function(food) {
    console.log(food);
});

console.log('-----------------Pode-ser-assim-------------------------------------------');

let a = [10, 20, 30, 40, 50, 60];

a.forEach(valor => console.log(valor));

console.log('-----------------Pode-ser-assim---------------------------------------------');

let total = 0;
a.forEach(valor => {
    total += valor;
})
console.log(total);
console.log('-----------------Pode-ser-assim----------------------------------------------');

a.forEach(function(valor, indice, array) {
    console.log(array[indice]);
});