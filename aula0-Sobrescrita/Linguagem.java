package Sobrescrita;

public class Linguagem {
    public void exibir() {
        System.out.println("Linguagem de Programação");
    }
}

class Java extends Linguagem { // A classe Java estende a classe Linguagem, ou seja, é uma subclasse de Linguagem
    public void exibir() {
        System.out.println("Linguagem Java"); // Sobrescreve o método exibir() da classe Linguagem
    }
}

class Main {
    public static void main(String[] args) {
        // Criar um objeto da classe Java
        Java j1 = new Java(); //
        j1.exibir(); // Chama o método exibir() da classe Java

        Linguagem l1 = new Linguagem(); // Criar um objeto da classe Linguagem
        l1.exibir(); // Chama o método exibir() da classe Linguagem
    }
}
