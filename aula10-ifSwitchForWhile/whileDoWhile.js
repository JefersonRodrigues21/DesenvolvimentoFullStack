// While é um laço que através de um bloco de código é executado enquanto um a condição           específica é verdadeira

// while ( condition ) {
//     code block to be executed
// }
//---------------------------------------------------------------------------------------------
// do...while = cria um laço que executa uma declaração até que o teste da condição for falsa(false). A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.

// do
//   declarações
// while (condição);

// let resultado ="";
// let i = 0;
// do {
//     i += 1;
//     resultado += i + '';
// } while (i < 5);
// document.getElementById('exemplo').innerHTML = resultado;

console.log('---------------------------------------------------------------------------------');

let c = 1;
while (c <= 10){
    console.log(c);
    c++;
}
console.log('---------------------------------------------------------------------------------');
let t = 1;

do{
    console.log(t);
    t++
}while(t < 1)