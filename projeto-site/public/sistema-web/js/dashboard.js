function dadosDashboard() {
    var id = "'DESKTOP-I3UCK4H'";
    axios.get("../dashboard/maquina/"+id).then(d => {
        var ultimaPosicao = d.data.length - 1;
        var dash = d.data[ultimaPosicao];

        //OS
        tempoAtivo.innerHTML = dash.data_Registro;

        //CPU
        data_Registro.innerHTML = dash.velocidade_cpu;
        threandsCPU.innerHTML = dash.threands;
        processosCPU.innerHTML = dash.processos;

        //RAM
        disponivelRAM.innerHTML = ` ${dash.disponivel_ram.toFixed(1)} GB`;

        //HD 
        tempoHD.innerHTML = ` ${dash.disponivel_ram} segundos`;

        //Chats Doughnut

        // "fk_Maquina": 1
    });
}