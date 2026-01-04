let usageChart = null;

function renderChart(labels, electricityData, waterData) {
    const ctx = document.getElementById('usageChart').getContext('2d');

    // Destroy old chart if it exists
    if (usageChart) {
        usageChart.destroy();
    }

    usageChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Electricity Usage (kWh)',
                    data: electricityData,
                    borderColor: 'blue',
                    fill: false
                },
                {
                    label: 'Water Usage (Litres)',
                    data: waterData,
                    borderColor: 'green',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            tension: 0.3
        }
    });
}


/*new Chart(document.getElementById("costChart"), {
  type: "bar",
  data: {
    labels: ["Water", "Electricity"],
    datasets: [{
      data: [140, 399],
      backgroundColor: ["#1e90ff", "#2ecc71"]
    }]
  }
});*/
fetch("getDashboard.php")
  .then(res => res.json())
  .then(rows => {
    const labels = rows.map(r => r.reading_date);
    const water = rows.map(r => r.water_usage);
    const electricity = rows.map(r => r.electricity_usage);

    renderChart(labels, electricity, water);
  }
  );