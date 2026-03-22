package heranca;

public class Main {
    public static void main(String[] args) {
        Pessoa p = new Pessoa();
        p.nome = "Yan";
        //  p.comissao = 8.4; // Erro de compilação, pois a classe Pessoa não tem o atributo comissao

        Vendedor v = new Vendedor();
        v.nome = "Lais";
        v.comissao = 8.6;
    }
}
