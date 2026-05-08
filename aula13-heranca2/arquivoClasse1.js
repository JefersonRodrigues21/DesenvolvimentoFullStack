class DipositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log('Já está ligado')
            return;
        }
        this.ligado = true;
    }
}

class SmartPhone extends DipositivoEletronico { // extends é a palavra reservada para herdar a classe pai
    constructor(nome, cor, modelo){
        super(nome);                 // super é a palavra reservada para chamar o construtor da classe pai
        this.cor = cor;
        this.modelo = modelo;
    }
}

let s1 = new SmartPhone('Samsung', 'Preto', 'A71');
console.log(s1);
s1.ligar();
s1.ligar();