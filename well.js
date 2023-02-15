<!-- Add a canvas element to your HTML page to hold the chart -->
<canvas id="well-integrity-chart"></canvas>

<!-- Include the Chart.js library -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
  // Define the well integrity data as an array of objects
  const wellIntegrityData = [
    { depth: 100, casingPressure: 50, cementBondLog: 90 },
    { depth: 200, casingPressure: 60, cementBondLog: 85 },
    { depth: 300, casingPressure: 70, cementBondLog: 80 },
    { depth: 400, casingPressure: 80, cementBondLog: 75 },
    { depth: 500, casingPressure: 90, cementBondLog: 70 },
    { depth: 600, casingPressure: 100, cementBondLog: 65 },
    { depth: 700, casingPressure: 110, cementBondLog: 60 }
  ];

  // Create an array to hold the chart labels and data
  const chartData = {
    labels: [],
    datasets: [
      {
        label: 'Casing Pressure',
        data: [],
        borderColor: 'blue',
        fill: false
      },
      {
        label: 'Cement Bond Log',
        data: [],
        borderColor: 'green',
        fill: false
      }
    ]
  };

  // Populate the chart data array with the well integrity data
  wellIntegrityData.forEach(dataPoint => {
    chartData.labels.push(dataPoint.depth);
    chartData.datasets[0].data.push(dataPoint.casingPressure);
    chartData.datasets[1].data.push(dataPoint.cementBondLog);
  });

  // Create a new Chart.js chart
  const ctx = document.getElementById('well-integrity-chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
      title: {
        display: true,
        text: 'Well Integrity'
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Depth (ft)'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Pressure (psi)'
          }
        }]
      }
    }
  });
</script>
