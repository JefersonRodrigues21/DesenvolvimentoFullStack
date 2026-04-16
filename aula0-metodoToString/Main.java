package metodoToString;

class Main {
    public static void main(String[] args) {
        String primeira = "Java"; // Criando uma String usando literal
        String segunda = "Csharp"; // Criando uma String usando literal
        String terceira = new String ("Python"); // Criando um objeto String usando o construtor

        System.out.println(primeira.toUpperCase()); // Imprime a string em maiúsculas
        System.out.println(segunda.length()); // Imprime o comprimento da string
        System.out.println(terceira);

        // Comparar a primeira com a segunda, String, usando equals
        boolean result = primeira.equals(segunda); // O método equals compara o conteúdo das strings, retornando true ou false
        System.out.println("Primeira é igual a segunda?" + " " + result); // Imprime a pergunta

        // Comparar a segunda com a terceira, String, usando equals
        result = segunda.equals(terceira);
        System.out.println("Segunda é igual a terceira?" +" " + result);

    }
}
