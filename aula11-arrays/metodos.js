//? ALGUSN MÉTODOS

//? SORT - ordena os elementos de um Array.
//? SLICE - retorna os elementos selecionados de um Array.
//? LENGTH - indica o número de elementos em um Array.

let valores1 = [1,3,5,7,9];

console.log(`Array invertido: ${valores1.reverse()}`); //? REVERSE - inverte a ordem dos elementos. O primeiro se torna o último e vice-versa.
console.log('------------------------------------------------------------------------------');

let valores2 = [1,2,3,4,5,6];

console.log(valores2.join(' - ')); //? JOIN - junta sequencialmente os elementos de um Array usando o caractere (ou caracteres) passado por parâmetro. Se ele não é indicado, usa-se a vírgula como DEFAULT.
console.log('------------------------------------------------------------------------------');

let retirarElem = valores2.shift(); //? SHIFT - retorna o primeiro valor de uma Array e remove os demais.

console.log(retirarElem);
console.log('------------------------------------------------------------------------------');

console.log(valores2);
console.log(`Posição do número 3: ${valores2.indexOf(3)}`); //? Diz a posição do valor indicado.
console.log('------------------------------------------------------------------------------');

valores2.push(7); //? adiciona um ou mais elementos (valor1, valor2, etc.) ao final de um Array, retornando o seu novo tamanho.

console.log(valores2)
console.log('------------------------------------------------------------------------------');

valores2.pop(); //? remove o último elemento de uma array e retorna esse elemento.

console.log(valores2);
console.log('------------------------------------------------------------------------------');

let arr2 = [1,2,3,4,5,6,7];
let arr3 = [0,1,2,3,4,5,6]
arr2.splice(1,1);// Retira o item da posição 1 e somente 1 a partir dele(1 - primeiro nº)
console.log(arr2); // retirou o nº 2 nesse exemplo.
arr3.splice(2,3)
console.log(arr3);

let nomes = ['Maria','João', 'Lucas', 'Pedro'];
let novos = nomes.splice(1,1,'Jeferson');

console.log(novos); //? Item retirado.
console.log(nomes); //? Lista atualizada.
console.log('------------------------------------------------------------------------------')

let pais = ['Brasil', 'Argentina', 'colombia'];

pais.unshift('Uruguai'); //? Acrescenta item na posição 0
console.log(pais);