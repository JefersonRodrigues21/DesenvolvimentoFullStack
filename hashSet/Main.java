package hashSet;

import java.util.HashSet; // A classe HashSet é uma implementação da interface Set que utiliza uma tabela hash para armazenar os elementos. Ela não permite elementos duplicados e não mantém a ordem de inserção dos elementos. O HashSet é eficiente para operações de busca, adição e remoção de elementos, mas não garante a ordem dos elementos ao iterar sobre eles.
import java.util.Iterator; // A interface Iterator é usada para percorrer os elementos de uma coleção, como um HashSet. Ela fornece métodos para verificar se há mais elementos (hasNext()), obter o próximo elemento (next()) e remover o elemento atual (remove()). O Iterator é uma maneira conveniente de acessar os elementos de uma coleção sem expor a estrutura subjacente da coleção.

class Main {  
    public static void main(String[] args) {  
        HashSet<Integer> numeros = new HashSet<>(); // HashSet é uma coleção que não permite elementos duplicados e não mantém a ordem de inserção.
        numeros.add(2);  
        numeros.add(5);  
        numeros.add(8);  
        
        Iterator<Integer> it = numeros.iterator(); // O método iterator() retorna um iterador para percorrer os elementos do HashSet. O iterador é uma interface que permite acessar os elementos de uma coleção de forma sequencial, sem expor a estrutura subjacente da coleção.
        while(it.hasNext()){ // O método hasNext() verifica se há mais elementos para iterar. Ele retorna true se houver um próximo elemento e false caso contrário.
            System.out.println(it.next());
        }
    }    
}
