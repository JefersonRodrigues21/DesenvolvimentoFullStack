public class exercicioVetor {
    public static void main(String[] args) {
        int[] passarosPorDia = {2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1};

        int totalPassaros = 0;
        int passarosSemana1 = 0;
        int passarosSemana2 = 0;


        for(int i=0; i<14; i++){
            totalPassaros = totalPassaros + passarosPorDia[i];
        }
        System.out.println(totalPassaros);

        for(int i=0; i<7; i++){
            passarosSemana1 = passarosSemana1 + passarosPorDia[i];
        }
        System.out.println(passarosSemana1);

        for(int i=7; i<14; i++){
            passarosSemana2 = passarosSemana2 + passarosPorDia[i];
        }
        System.out.println(passarosSemana2);
    }

}
