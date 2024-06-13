fetch("https://alerts.ttc.ca/api/alerts/live-alerts")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Error fetching data:', error)
    });