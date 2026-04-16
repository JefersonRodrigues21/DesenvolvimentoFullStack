import java.util.Scanner;
public class estruturaDoWhile {
    public static void main(String[] args) {
        int opcao;
        Scanner entrada = new Scanner(System.in);

        do {
            System.out.println("Digite um valor ou 99 para sair");
            opcao = entrada.nextInt();

        } while (opcao != 99);
        
        entrada.close();
    }
}
// Este programa solicita ao usuário que digite um valor repetidamente até que ele insira 99 para sair.