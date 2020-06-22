public class Main {

    public static void main(String[] args) {
        // codigo teste de comparação
        // anotações: biblioteca jSensors
        // serão 3 tabelas no banco de dados, sendo elas:
        // informações de placas de video
        // informações de processadores
        // informações de jogos com seus requisitos minimos

        // ideias
        // ferramenta para registrar cpu, gpu, ou um jogo que não está no banco

        // infos do pc
        String cpuNome = "Intel Core i3";
        Integer cpuFreq = 2400;
        Integer potenciaCpu = 35;

        String placaVideo = "GTX 750 TI";
        Integer memoriaPlaca = 2048;
        Integer potenciaGPU = 41;

        Integer ram = 8336;

        // infos do jogo
        String cpuNomeMin = "Intel core i3";
        Integer cpuFreqMin = 2100;

        // com esses valores ele irá consultar o banco de dados e retornar a potência (um calculo proprio)
        Integer potenciaCpuBD = 31;

        String placaVideoMin = "GTX 650 TI";
        Integer memoriaPlacaMin = 1024;
        Integer potenciaGPUBD = 30;
        Integer ramMin = 8336;

        if (potenciaCpu >= potenciaCpuBD) {
            if (potenciaGPU >= potenciaGPUBD) {
                if (ram >= ramMin) {
                    System.out.println("O seu computador roda esse jogo!");
                }
                else {
                    System.err.println("O seu computador não suporta esse jogo!");
                }
            }
            else {
                System.err.println("O seu computador não suporta esse jogo!");
            }
        }
        else {
            System.err.println("O seu computador não suporta esse jogo!");
        }

    }
}
