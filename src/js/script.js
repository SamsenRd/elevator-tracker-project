// Map Info
function addMapInfo() {
    const mapContent = document.getElementById("map")
    mapContent.innerHTML = `
        <div class="mapHeader">
            <h2>Real-time Elevator Updates</h2>
            <div class="mapLegend">
                <p>O --- Out of service</p>
                <p>O --- In service</p>
            </div>
            <p class="timeStamp"><i>Last updated:</i></p>
        </div>
        <div class="distribution-map">
            <img src="/src/assets/images/TTC_Subway_Map.png" alt="TTC Subway and Streetcar Map" />
        </div>
    `
}

    document.addEventListener('DOMContentLoaded', (event) => {
    addMapInfo()
})

// Fetching API & Image Points

document.addEventListener('DOMContentLoaded', () => {
    fetch("https://alerts.ttc.ca/api/alerts/live-alerts")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Error fetching data:', error)
    });

})
