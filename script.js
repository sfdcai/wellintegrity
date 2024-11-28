document.getElementById('integrityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const barrierType = document.getElementById('barrierType').value;
    const status = document.getElementById('status').value;
    
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Well Barrier Integrity'
        },
        xAxis: {
            categories: ['Barrier Type']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Status'
            }
        },
        series: [{
            name: barrierType,
            data: [parseFloat(status)]
        }]
    });
});