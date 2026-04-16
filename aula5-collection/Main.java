package collection; // Definindo o pacote collection para organizar as classes relacionadas a coleções

import java.util.ArrayList; // Importando a classe ArrayList do pacote java.util
import java.util.Iterator; // Importando a classe Iterator do pacote java.util para iterar sobre os elementos da coleção

class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numeros = new ArrayList<>(); // Criando uma instância de ArrayList para armazenar objetos do tipo Integer
        numeros.add(1);
        numeros.add(3);
        numeros.add(2);

        System.out.println("ArrayList: " + numeros);

        // Criando uma instancia de Iterator
        Iterator<Integer> it = numeros.iterator(); // O método iterator() retorna um objeto do tipo Iterator que pode ser usado para iterar sobre os elementos da coleção

        int numero = it.next(); // O método next() retorna o próximo elemento da coleção e avança o cursor para o próximo elemento. Se não houver mais elementos, ele lança uma NoSuchElementException.
        System.out.println("Elemento: " + numero);

        while(it.hasNext()){ // O método hasNext() retorna true se houver mais elementos para iterar, caso contrário, retorna false. Ele é usado para controlar o loop de iteração.
            it.forEachRemaining((value) -> System.out.println(value + ",")); // O método forEachRemaining() é um método do Iterator que executa a ação especificada para cada elemento restante na coleção. Ele recebe um objeto do tipo Consumer, que é uma interface funcional que representa uma operação que aceita um único argumento e não retorna nenhum resultado. Neste caso, estamos usando uma expressão lambda para imprimir cada valor seguido de uma vírgula.
        }
    }
}

