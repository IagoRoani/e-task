window.chartsNetwork = [];
function speedTest() {
    var obj = new Object();
    obj.conntype = undefined;
    obj.bufferbloat = true;
    obj.hz = 4;
    obj.apiKey = '12345678';
    var processando= document.getElementById("processando");

    obj.oncomplete = function (obj) {
        ping = obj.ping;
        download = obj.download;
        upload = obj.upload;
        graficosNetwork(ping, download, upload);
        processando.innerHTML = "";
        console.log("Speed test funcionou");
    };

    obj.onstatus = function (e) {
        if (e.direction) {
            var ping = e.ping;
            var download = Number(e.down) ? Number(e.down) : 0;
            var upload = Number(e.up) ? Number(e.up) : 0;
            graficosNetwork(ping, download, upload);
            processando.innerHTML = "Processando <img class='looad' src='../sistema-web/img/simple_loading.gif'>";
            console.log("Speed test em andamento ignore os erros. Calma vai funcionar");
        }
    };
    dslr_speedtest({
        op: 'start',
        params: obj
    });
}
function processando(){
    // alert("AA");
    
}

function graficosNetwork(ping, download, upload) {
    for (i = 0; i < window.chartsNetwork.length; i++) {
        if (window.chartsNetwork[i] != undefined) {
            window.chartsNetwork[i].destroy();
        }
    }
    window.chartsNetwork = [];

    const pingGrafico = new ChartDonutNetwork('⇌', ping);
    window.chartsNetwork.push(new Chart(document.getElementById('chartPing'),
        pingGrafico.dadosGrafico()
    ));

    const downloadGrafico = new ChartDonutNetwork('⇓', Number(download).toFixed(2));
    window.chartsNetwork.push(new Chart(document.getElementById('charDownload'),
        downloadGrafico.dadosGrafico()
    ));

    const uploadGrafico = new ChartDonutNetwork('⇑', Number(upload).toFixed(2));
    window.chartsNetwork.push(new Chart(document.getElementById('chartUpload'),
        uploadGrafico.dadosGrafico()
    ));

    chartPing.classList.remove('chartjs-render-monitor');
    charDownload.classList.remove('chartjs-render-monitor');
    chartUpload.classList.remove('chartjs-render-monitor');
}