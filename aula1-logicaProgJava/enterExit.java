// package logicaProgJava;
import java.util.Scanner;

public class enterExit {
    public static void main(String[] args) {
        System.out.println("Informe seu nome: ");

        String palavra;
        Scanner entrada = new Scanner(System.in);
        palavra = entrada.next();
        entrada.close();
        
        System.out.println("Palavra: " + palavra);
    }
}
