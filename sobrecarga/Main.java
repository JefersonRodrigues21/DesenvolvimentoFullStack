class Desenho {
    public void mostrar() {
        // Método sem parâmetros.
        for (int i = 0; i < 5; i ++) {
                System.out.println("*");
        
        }
    }

    // Método Sem parâmetros.
    public void mostrar(char simb) {
        for (int i = 0; i < 5; i ++) {
                System.out.println(simb);
        
        }
    }

    // Método com dois parâmetros.
    public void mostrar(char simb, int n){
        for (int i = 0; i < n; i ++){
            System.out.println(simb);
        }
    }
}

class Main {
    public static void main(String[] args) {
        Desenho d1 = new Desenho();

        d1.mostrar();

        d1.mostrar('#');

        d1.mostrar('$', 3);

    }
}