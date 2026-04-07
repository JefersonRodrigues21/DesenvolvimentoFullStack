package treeSet;

import java.util.TreeSet; // Importa a classe TreeSet do pacote java.util, que é uma implementação da interface Set que armazena elementos em ordem crescente.

public class Main {
    public static void main(String[] args) {
        TreeSet<Integer> numeros = new TreeSet<>(); // TreeSet é uma coleção que armazena elementos em ordem crescente e não permite elementos duplicados.
        numeros.add(8);
        numeros.add(6);
        numeros.add(9);
        System.out.println("TreeSet: " + numeros);

        boolean result = numeros.remove(6); // O método remove() é usado para remover um elemento específico do TreeSet. Ele retorna true se o elemento foi removido com sucesso, ou false se o elemento não estava presente no TreeSet.
        System.out.println("Elemento 6 removido? " + result + "." + "TreeSet: " + numeros); // O método remove() é usado para remover um elemento específico do TreeSet. Ele retorna true se o elemento foi removido com sucesso, ou false se o elemento não estava presente no TreeSet.
        //System.out.println("TreeSet: " + numeros);

        result = numeros.removeAll(numeros); // O método removeAll() é usado para remover todos os elementos de uma coleção específica do TreeSet. Ele retorna true se o TreeSet foi modificado como resultado da operação, ou false se o TreeSet não foi modificado.
        System.out.println("Todos os elementos removidos? " + result + "." + "TreeSet: " + numeros);
    }
}
