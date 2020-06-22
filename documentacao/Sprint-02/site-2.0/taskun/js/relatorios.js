var relatorio = 0;

var reportImg = ["../taskun/img/report.png"];
var reportText = ["2020-01-01", "2020-02-01", "2020-03-01", "2020-04-01", "2020-05-01", "2020-06-01", "2020-07-01",
"2020-08-01","2020-09-01","2020-10-01","2020-11-01","2020-12-01"];


function loadingRelatorios() {
    // for (relatorio; relatorio < 14; relatorio++) {
    for (relatorio; relatorio < reportText.length; relatorio++) {
        relatorios.innerHTML +=
            `<div key="${relatorio}"  class="div_relatorio">
                <img class="icon_relatorio" src="img/report.png" alt="">
                <div class="legenda_relatorio">
                    <span class="text_relatorio">report-${reportText[relatorio]}.txt</span>     
                    <button class="botao_download">
                        <img class="download" src="img/save_alt-white-48dp.svg">
                    </button>
                </div>
            </div>`;
    }
    // console.log(jogosList);
    // <span class="text_relatorio">report-2020-01-01.txt</span>
}
window.onload = function atualizarRelatorios() {
    loadingRelatorios();
    setTimeout(() => {
        atualizarRelatorios();
    }, 10000);
};