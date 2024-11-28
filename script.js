document.getElementById('integrityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const barrierType = document.getElementById('barrierType').value;
    const status = parseFloat(document.getElementById('status').value);
    
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Well Barrier Integrity'
        },
        xAxis: {
            categories: ['Surface', 'Intermediate', 'Production', 'Reservoir']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Integrity Status'
            }
        },
        series: [{
            name: barrierType,
            data: [status, status, status, status]
        }],
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true
                }
            }
        }
    });
});