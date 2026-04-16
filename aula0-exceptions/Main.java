package exceptions;

// public class Main {
    
// }
import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        try { // bloco de código que pode gerar uma exceção
        System.out.print("Digite um valor ");
        int numero1 = s.nextInt();

        System.out.print(numero1);
        } catch (Exception ex) {
            System.out.println("Erro: Valor não é um número ");
        }
    }
}