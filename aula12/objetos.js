let pessoa = {
    nome:'Jeferson',
    sobrenome: 'Rodrigues'
};
console.log(pessoa.nome);

// Ou pode ser assim.

let pessoa1 = new Object();
pessoa1.nome = 'Jeferson';
pessoa1.sobrenome = 'Rodrigues';
pessoa1.falarSobrenome = function(){   //Função para o objetos
    console.log(`O nome é: ${this.sobrenome}`)
}

pessoa1.falarSobrenome();

console.log('------------Outra-forma-de-criar-objeto-------------------------------------');

function criarPessoa(nome, sobrenome) {
    return {nome, sobrenome};
};

let p1 = criarPessoa('Lucas', 'Silva');
let p2 = criarPessoa('João', 'Assis');

console.log(p1);