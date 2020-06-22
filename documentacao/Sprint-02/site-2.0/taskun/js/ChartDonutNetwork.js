class ChartDonutNetwork {
    constructor(caracter, value) {
        this.caracter = caracter;
        this.value = value;
    }

    colorEscala() {
        var color;

        // color = "#0089eb";
        if (this.caracter == '⇌') {
            color = "#0089eb";
        } else if (this.caracter == '⇓') {
            color = "#51d93f";
        }else {
            color = "#6a59ee";
        }

        return color;
    }
    pluginsGrafico() {
        var value = this.value,
            caracter = this.caracter,
            color = this.colorEscala();

        var plugins = {
            beforeDraw: function(chart) {
                var width = chart.chart.width,
                    height = chart.chart.height,
                    ctx1 = chart.chart.ctx,
                    ctx2 = chart.chart.ctx;
                ctx1.restore();

                var fontSize1 = (height / 80).toFixed(2);
                var fontSize2 = (height / 80).toFixed(2);


                ctx1.font = fontSize1 + "em sans-serif";
                ctx1.textAlign = 'center';
                ctx1.textBaseline = 'middle';
                ctx1.fillStyle = color;
                var centerXnumb = width / 2;
                var centerYnumb = height / 1.12;
                ctx1.fillText(value, centerXnumb, centerYnumb);
                
                ctx2.font = fontSize2 + "em sans-serif";
                ctx2.textAlign = 'center';
                ctx2.textBaseline = 'top';
                ctx2.fillStyle = color;
                var centerX = width / 2;
                var centerY = height / 2;
                ctx2.fillText(caracter, centerX, centerY);
                ctx2.save();
            }
        }
        return plugins;
    }

    dadosGrafico() {

        var dados = {

            type: 'doughnut',
            data: {
                datasets: [{
                    data: [this.value, 100 - this.value],
                    backgroundColor: [
                        this.colorEscala(),
                        "rgba(199, 76, 10, 0)"
                    ],
                    borderColor:  this.colorEscala(),
                    borderWidth: 1,

                }]
            },
            options: {
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI,
                cutoutPercentage: 80,
                animation: false,
                responsive: true,
                legend: {
                    display: false
                },
                layout: {
                    padding: {
                        bottom: 10
                    },
                    margin: {
                        bottom: 10
                    }
                },
                tooltips: {
                    enabled: false,
                },
                hover:{
                    mode:null
                }
            },
            plugins: this.pluginsGrafico()

        }

        return dados;
    }
}