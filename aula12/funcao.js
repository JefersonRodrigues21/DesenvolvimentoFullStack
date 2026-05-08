function calcula(){
    return 2 * 2;
}
console.log(calcula());
console.log('--------------------------------------------------------');

function multiplicar(a,b) {
    return a * b;
};
let x = multiplicar(2,3);
console.log(x);
console.log('--------------------------------------------------------');

function funcao(a=3, b=2, c=4){ //Valores padrões para os parâmetros, caso não sejam passados.
    console.log(a + b + c);
}
funcao(); //Como não passamos nenhum valor, ele usará os valores padrões.
funcao(1,2,3); //Aqui passamos os valores, então ele usará os valores passados e não os padrões.
console.log('--------------------------------------------------------');

function teste(...args) { //O operador rest (...) permite que uma função aceite um número indefinido de argumentos como um array.
    console.log(args) 
}
teste(2,5,6,8,9); //Aqui passamos vários argumentos, e eles serão agrupados em um array dentro da função.