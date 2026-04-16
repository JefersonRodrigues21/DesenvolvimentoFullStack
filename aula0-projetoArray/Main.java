package projetoArray;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> linguagens = new ArrayList<>(); // Criando um ArrayList para armazenar as linguagens de programação
        linguagens.add("Java");
        linguagens.add("CSharp");
        linguagens.add("Python");
        linguagens.add("JavaScript");
        System.out.println("Linguagens de Programação: " + linguagens);

        String[] arr = new String[linguagens.size()]; // Criando um array de String com o mesmo tamanho do ArrayList
        linguagens.toArray(arr); // Convertendo o ArrayList para um array de String usando o método toArray()
        System.out.println("Array de Linguagens:");

        for (String item:arr) { // Iterando sobre o array de String e imprimindo cada item
            System.out.println(item + ",");
        }
    }
}
