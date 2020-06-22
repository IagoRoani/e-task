class ChartDoughnut {

    constructor(componente, porcentagem) {
        this.componente = componente;
        this.porcentagem = porcentagem;
    }

    colorEscala() {
        var color;

        // color = "#0089eb";
        if (this.porcentagem >= 0 && this.porcentagem <= 25) {
            color = "#17ad00";
        } else if (this.porcentagem > 25 && this.porcentagem <= 50) {
            color = "#f5b800";
        } else if (this.porcentagem > 50 && this.porcentagem <= 75) {
            color = "#ff5d05";
        } else {
            color = "#c0161f";
        }

        return color;
    }
    dataGrafico() {


        var data = {
            fillOpacity: -99.3,
            datasets: [
                {
                    data: [this.porcentagem, 100 - this.porcentagem],
                    backgroundColor: [
                        this.colorEscala(),
                        "rgba(61, 61, 61, 0.97)"
                    ],
                    borderColor: "#42413f",
                    borderWidth: 0,

                }]
        };
        return data;
    }

    optionGrafico() {
        var options = {
            rotation: 0.75 * Math.PI,
            circumference: 1.5 * Math.PI,
            cutoutPercentage: 80,
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            layout: {
                padding: {
                    bottom: 10
                }
            },
            tooltips: {
                enabled: false,
            },
            hover: {
                mode: null 
            },
            responsiveAnimationDuration: 0
        }
        return options;
    }

    pluginsGrafico() {

        var porcentagem = this.porcentagem,
            componente = this.componente;
        var color = this.colorEscala();

        var plugins = {
            beforeDraw: function (chart) {
                var width = chart.chart.width,
                    height = chart.chart.height,
                    ctx1 = chart.chart.ctx,
                    ctx2 = chart.chart.ctx;
                ctx1.restore();

                var fontSize1 = (height / 114).toFixed(2);
                var fontSize2 = (height / 170).toFixed(2);


                ctx1.font = fontSize1 + "em sans-serif";
                ctx1.textAlign = 'center';
                ctx1.textBaseline = 'middle';
                ctx1.fillStyle = color;
                var centerXnumb = width / 2;
                var centerYnumb = height / 2;
                ctx1.fillText(`${porcentagem}%`, centerXnumb, centerYnumb);

                ctx2.font = fontSize2 + "em sans-serif";
                ctx2.textAlign = 'center';
                ctx2.textBaseline = 'top';
                ctx2.fillStyle = 'rgba(255, 255, 255, 0.9)';
                var centerX = width / 2;
                var centerY = height / 1.7;
                ctx2.fillText(componente, centerX, centerY);
                ctx2.save();
            }
        }
        return plugins;
    }

    dadosGrafico() {
        Chart.defaults.RoundedDoughnut = Chart.helpers.clone(Chart.defaults.doughnut);
        Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
            draw: function (ease) {
                var ctx = this.chart.ctx;
                var easingDecimal = ease || 1;
                var arcs = this.getMeta().data;
                Chart.helpers.each(arcs, function (arc, i) {
                    arc.transition(easingDecimal).draw();

                    var pArc = arcs[i === 0 ? arcs.length - 1 : i - 1];
                    var pColor = pArc._view.backgroundColor;

                    var vm = arc._view;
                    var radius = (vm.outerRadius + vm.innerRadius) / 2;
                    var thickness1 = (vm.outerRadius - vm.innerRadius) / 2.09;
                    var thickness2 = (vm.outerRadius - vm.innerRadius) / 2;
                    var startAngle = Math.PI - vm.startAngle - Math.PI / 2;
                    var angle = Math.PI - vm.endAngle - Math.PI / 2;

                    ctx.save();
                    ctx.translate(vm.x, vm.y);

                    //Bolinha da direira 
                    ctx.fillStyle = vm.backgroundColor;
                    ctx.beginPath();
                    ctx.arc(radius * Math.sin(angle), radius * Math.cos(angle), thickness1, 0, 4 * Math.PI);
                    ctx.fill();

                    //Bolinha da esquerda
                    ctx.fillStyle = i === 0 ? vm.backgroundColor : pColor;
                    ctx.lineWidth = 0;
                    ctx.strokeStyle = "rgba(10, 199, 39, 0)";
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(radius * Math.sin(startAngle), radius * Math.cos(startAngle), thickness2, 0, 2 * Math.PI);
                    ctx.fill();

                    ctx.restore();
                });
            }
        });

        var dados = {
            type: 'RoundedDoughnut',
            data: this.dataGrafico(),
            options: this.optionGrafico(),
            plugins: this.pluginsGrafico()
        }

        return dados;
    }
}