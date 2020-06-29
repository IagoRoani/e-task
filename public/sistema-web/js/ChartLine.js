class ChartLine {
    constructor(dataCPU, dataRAM, dataHD,dataGPU) {
        this.dataCPU = dataCPU;
        this.dataRAM = dataRAM;
        this.dataHD = dataHD;
        this.dataGPU = dataGPU;
    }

    labelDataGrafico() {
        var label = ['00:00', '01:00:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
            '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
        ];

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
                data: this.dataCPU
                
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
                data: this.dataRAM
              
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
                data: this.dataGPU
              
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
                data: this.dataHD

                
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
                        return "Desempenho: "+data['labels'][tooltipItem[0]['index']]+"";
                    },
                    label: function (tooltipItem, data) {

                        var dataLabel = data.datasets[tooltipItem.datasetIndex].label.toLocaleString();
                        var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();
                        return `${dataLabel} : ${value} %`;
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