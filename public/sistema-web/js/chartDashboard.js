window.myCharts = [];
var id_Cliente = localStorage.getItem("id_Cliente");
var nameMaquina = localStorage.getItem("nameMaquina");
var valueCPU,valueRAM, valueHD, valueGPU;
var lineCPU, lineRAM, lineHD, lineGPU;

function gerarGrafico() {
    for (i = 0; i < window.myCharts.length; i++) {
        if (window.myCharts[i] != undefined) {
            window.myCharts[i].destroy();
        }
    }
    window.myCharts = [];

    const cpuGrafico = new ChartDoughnut("CPU", Number(valueCPU));
    window.myCharts.push(new Chart(document.getElementById('chartCPU'),
        cpuGrafico.dadosGrafico()
    ));

    const ramGrafico = new ChartDoughnut("RAM", Number(valueRAM));
    window.myCharts.push(new Chart(document.getElementById('chartRAM'),
        ramGrafico.dadosGrafico()
    ));

    const hdGrafico = new ChartDoughnut("HD", Number(valueHD));
    window.myCharts.push(new Chart(document.getElementById('chartHD'),
        hdGrafico.dadosGrafico()
    ));

    const gpuGrafico = new ChartDoughnut("GPU", Number(valueGPU));
    window.myCharts.push(new Chart(document.getElementById('chartGPU'),
        gpuGrafico.dadosGrafico()
    ));

    const lineGrafico = new ChartLine(lineCPU,lineRAM,lineHD,lineGPU);
    window.myCharts.push(new Chart(document.getElementById('chartLine'),
        lineGrafico.dadosGrafico()
    ));



    chartCPU.classList.remove('chartjs-render-monitor');
    chartRAM.classList.remove('chartjs-render-monitor');
    chartHD.classList.remove('chartjs-render-monitor');
    chartGPU.classList.remove('chartjs-render-monitor');



    chartLine.classList.remove('chartjs-render-monitor');

    if(valueCPU != undefined ){
        var div = document.getElementsByClassName("tudo_junto");
        for (var i = 0; i < div.length; i++) {
            div[i].style.visibility = "visible";
        }
    }

    // window.myCharts[ window.myCharts.length - 1].h
    // console.log("Total de gráficos "+window.myCharts.length);
}
function dadosDashboard() {
    axios.get("../dashboard/maquina/"+nameMaquina).then(d => {
        var ultimaPosicao = d.data.length - 1;
        var dash = d.data[ultimaPosicao];

        //OS
        tempoAtivo.innerHTML = dash.data_Registro;

        //CPU
        data_Registro.innerHTML = dash.velocidade_cpu;
        threandsCPU.innerHTML = dash.threands;
        processosCPU.innerHTML = dash.processos;
        valueCPU = dash.desempenho_cpu;

        //RAM
        disponivelRAM.innerHTML = ` ${dash.disponivel_ram.toFixed(1)} GB`;
        valueRAM = dash.desempenho_ram;

        //HD 
        tempoHD.innerHTML = ` ${dash.disponivel_ram.toFixed(0)} segundos`;
        valueHD = dash.ocupado_hd;

        //GPU
        valueGPU = dash.desempenho_GPU;
        // "fk_Maquina": 1

    });
}

function dadosGraficoLinha() {
    axios.get("../chartline/cpu/" + nameMaquina).then(l => {
        lineCPU = l.data[0].cpu;
        // console.log(lineCPU);
    });

    axios.get("../chartline/ram/" + nameMaquina).then(l => {
        lineRAM = l.data[0].ram;
        // console.log(lineRAM);
    });

    axios.get("../chartline/hd/" + nameMaquina).then(l => {
        lineHD = l.data[0].hd;        
    });
    
    axios.get("../chartline/gpu/" + nameMaquina).then(l => {
        lineGPU = l.data[0].gpu;
    });
}
window.onload = function () {
    dadosMaquina(id_Cliente);
    speedTest();
    loopGrafico();
};
function loopGrafico() {
    dadosDashboard(nameMaquina);
    dadosGraficoLinha();
    gerarGrafico();
    setTimeout(() => {
        // console.log("AAAAA");
        loopGrafico();
    }, 500);
}