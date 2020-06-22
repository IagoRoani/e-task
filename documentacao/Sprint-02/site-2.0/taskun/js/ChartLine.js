class ChartLine {
    constructor() {

    }

    datasDataGraficoCPU() {
        var data = [
            null, 75, 65, 76, 80, 86, 87, 75, 61, 65, 70, 76, 56, 51, 65, 78, 65, 74, 61, 52, 76, 74,63,74
        ];
        return data;
    }
    datasDataGraficoRAM() {
        var data = [
            null, 90,86, 76, 86, 83, 70, 90, 65, 78, 79, 88, 64, 65, 71, 86, 80, 86, 78, 63,85,89,78,81
        ];
        return data;
    }
    datasDataGraficoGPU() {
        var data = [
            null, 10,15, 2, 1, 1, 2, 3, 4, 6, 6, 2, 3, 7, 11, 11, 10, 12, 10, 11, 9, 9, 8, 7
        ];
        return data;
    }
    datasDataGraficoHD() {
        var data = [
            null, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60
        ];
        return data;
    }

    labelDataGrafico() {
        var label = ['00 hr', '01 hr', '02 hr', '03 hr', '04 hr', '05 hr', '06 hr', '07 hr', '08 hr', '09 hr', '10 hr', '11 hr', '12 hr',
            '13 hr', '14 hr', '15 hr', '16 hr', '17 hr', '18 hr', '19 hr', '20 hr', '21 hr', '22 hr', '23 hr',
        ];
        // labels: ['00 hr', '02 hr', '04 hr', '06 hr', '08 hr', 
        //          '10 hr', '12 hr','14 hr', '16 hr','18 hr', '20 hr', '22 hr',
        // ],

        return label;
    }

    dataGrafico() {
        var data = {
            labels: this.labelDataGrafico(),
            datasets: [{
                label: "CPU",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(240, 240, 240, 0)",
                borderColor: "rgba(87, 199, 186, 0.94)",
                borderWidth: 1.7,
                pointBackgroundColor: "rgba(87, 199, 186, 0.94)",
                pointBorderWidth: 1.7,
                pointHoverRadius: 2.5,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.datasDataGraficoCPU()
                
            }, {
                label: "RAM",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(240, 240, 240, 0)",
                borderColor: "rgba(252, 201, 34, 0.94)",
                borderWidth: 1.7,
                pointBackgroundColor: "rgba(252, 201, 34, 0.94)",
                pointBorderWidth: 1.7,
                pointHoverRadius: 2.5,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.datasDataGraficoRAM()
              
            },
            {
                label: "GPU",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(240, 240, 240, 0)",
                borderColor: "rgba(199, 84, 201, 0.94)",
                borderWidth: 1.7,
                pointBackgroundColor: "rgba(199, 84, 201, 0.94)",
                pointBorderWidth: 1.7,
                pointHoverRadius: 2.5,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.datasDataGraficoGPU()
              
            },
            {
                label: "HD",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(240, 240, 240, 0)",
                borderColor: "rgba(107, 209, 77, 0.94)",
                borderWidth: 1.7,
                pointBackgroundColor: "rgba(107, 209, 77, 0.94)",
                pointBorderWidth: 1.7,
                pointHoverRadius: 2.5,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.datasDataGraficoHD()
                
            }
            ],

        };
        return data;
    }
    scalesOpGrafico() {
        var scales = {
            yAxes: [{
                lineThickness: 0,
                lineColor: 'rgba(255, 255, 255, 0)',
                gridLines: {
                    drawBorder: false,
                    beginAtZero: false,
                    tickMarkLength: 1,
                    zeroLineColor: 'rgba(79, 79, 79, 0.93)',
                    color: 'rgba(79, 79, 79, 0.93)'
                    // color:'rgba(209, 209, 209, 0.40)'
                },

                ticks: {
                    // stepSize: 2, 
                    fontColor: "rgba(255, 255, 255, 0.95)",
                    backdropColor: "rgba(255, 255, 255, 0)",
                    suggestedMin: 0,
                    suggestedMax: 100,
                    maxTicksLimit: 7,
                    callback: function (value) {
                        value = value.toString().split(/(?=(?:...)*$)/).join('.');
                        return `${value} % `;
                    },
                    padding: 8,
                    // fontStyle: "bold",
                    // fontSize: 12
                },
            }],
            xAxes: [{
                lineWidth: 10,
                gridLines: {
                    beginAtZero: true,
                    tickMarkLength: 0,
                    drawTicks: true,
                    color: ['rgba(255, 255, 255, 0)'],
                    lineWidth: 1.9
                    // tickMarkLength: 15,
                },
                ticks: {
                    fontColor: "rgba(255, 255, 255, 0.95)",
                    padding: 15,
                    autoskip: true,
                    autoSkipPadding: 3,
                    maxRotation: 0,
                    minRotation: 0

                    // fontStyle: "bold",
                    // fontSize: 12
                },
            }]
        }
        return scales;
    }
    optionGrafico() {
        var options = {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            layout: {
                padding: {
                    top: 15
                }
            },
            tooltips: {
                backgroundColor: 'rgba(209, 209, 209, 0.96)',
                titleFontColor: "rgba(0, 0, 0, 0.87)",
                callbacks: {
                    title: function (tooltipItem, data) {
                        return "Às " + data['labels'][tooltipItem[0]['index']];
                    },
                    label: function (tooltipItem, data) {

                        var dataLabel = data.datasets[tooltipItem.datasetIndex].label.toLocaleString();
                        var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
                        return `${dataLabel} desempenho: ${value} %`;
                        ;
                    },
            
                    labelTextColor: function (tooltipItem, chart) {
                        return 'rgba(0, 0, 0, 0.9)';
                    }
                },
                intersect: true,
                displayColors: false,
                rtl: true,
            },
            hover: {
                mode: 'nearest',
                intersect: true,
                filter: {
                    type: 'none'
                },
                mode: 'index'
            },
            elements: { 
                line: {
                    borderWidth: 2,
                    tension: 0 
                } 
            },
            scales: this.scalesOpGrafico(),
            text: 'Custom Chart Title'
        }
        return options;
    }

    dadosGrafico() {
        var dados = {
            type: 'line',
            data: this.dataGrafico(),
            options: this.optionGrafico()
        }

        return dados;
    }

}