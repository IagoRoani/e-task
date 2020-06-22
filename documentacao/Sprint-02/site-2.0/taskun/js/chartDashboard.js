window.myCharts = [];
var ping, download, upload;
function gerarGrafico() {

    var valueCPU = parseInt(Math.random() * 99) + 1;
    var valueRAM = parseInt(Math.random() * 99) + 1;
    var valueHD = parseInt(Math.random() * 99) + 1;
    var valueGPU = parseInt(Math.random() * 99) + 1;

    console.log('Iniciando plotagem do gráfico...');  

    for(i =0 ; i < window.myCharts.length ;i++){
        if(window.myCharts[i] != undefined){
            window.myCharts[i].destroy();
        }
    }
    window.myCharts = [];

    const cpuGrafico = new ChartDoughnut("CPU", 70);
    window.myCharts.push( new Chart(document.getElementById('chartCPU'),
        cpuGrafico.dadosGrafico()
    ));

    const ramGrafico = new ChartDoughnut("RAM", 78);
    window.myCharts.push( new Chart(document.getElementById('chartRAM'),
        ramGrafico.dadosGrafico()
    ));

    const hdGrafico = new ChartDoughnut("HD", 30);
    window.myCharts.push( new Chart(document.getElementById('chartHD'),
        hdGrafico.dadosGrafico()
    ));

    const gpuGrafico = new ChartDoughnut("GPU", 10);
    window.myCharts.push(new Chart(document.getElementById('chartGPU'),
        gpuGrafico.dadosGrafico()
    ));
    

    const pingGrafico = new ChartDonutNetwork('⇌', '10');
    window.myCharts.push(new Chart(document.getElementById('chartPing'),
        pingGrafico.dadosGrafico()
    ));

    const downloadGrafico = new ChartDonutNetwork('⇓', '34.07');
    window.myCharts.push(new Chart(document.getElementById('charDownload'),
        downloadGrafico.dadosGrafico()
    ));

    const uploadGrafico = new ChartDonutNetwork('⇑', '2.80');
    window.myCharts.push(new Chart(document.getElementById('chartUpload'),
        uploadGrafico.dadosGrafico()
    ));

    
    const lineGrafico = new ChartLine();
    window.myCharts.push( new Chart(document.getElementById('chartLine'),
    lineGrafico.dadosGrafico()
    ));

    chartCPU.classList.remove('chartjs-render-monitor');
    chartRAM.classList.remove('chartjs-render-monitor');
    chartHD.classList.remove('chartjs-render-monitor');
    chartGPU.classList.remove('chartjs-render-monitor');

    chartPing.classList.remove('chartjs-render-monitor');
    charDownload.classList.remove('chartjs-render-monitor');
    chartUpload.classList.remove('chartjs-render-monitor');
    
    chartLine.classList.remove('chartjs-render-monitor');

   
    
    // window.myCharts[ window.myCharts.length - 1].h
    // console.log("Total de gráficos "+window.myCharts.length);
}
function networkData(){
    axios.get("http://localhost:3333/net").then(a => {
        ping = a.data.ping;
        download = a.data.download;
        upload = a.data.upload;
    });
}

window.onload = function atualizarGrafico() {
    gerarGrafico();
    setTimeout(() => {
        atualizarGrafico();
    },2000);
};