window.myCharts = []
function gerarGrafico() {

    for(i =0 ; i < window.myCharts.length ;i++){
        if(window.myCharts[i] != undefined){
            window.myCharts[i].destroy();
        }
    }
    window.myCharts = [];

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

    console.log("Total de gráficos "+window.myCharts.length);
}

window.onload = function atualizarGrafico() {
    gerarGrafico();

    setTimeout(() => {
        atualizarGrafico();
    }, 7000);
};