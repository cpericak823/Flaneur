module.exports = {
    initMap: initMap,
    calculateAndDisplayRoute: calculateAndDisplayRoute
};
function saveItinerary(id){
    //save the Itinerary to the database and call the nodemailer function

}
function initMap(component) {
    return function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        console.log(component.refs);

        var map = new google.maps.Map(component.refs.map.getDOMNode(), {
            zoom: 6,
            center: { lat: 41.85, lng: -87.65 }
        });
        directionsDisplay.setMap(map);

        document.getElementById('submit').addEventListener('click', function () {
            calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
    };
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var waypts = [];
    var checkboxArray = document.getElementById('waypoints');
    for (var i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray.options[i].selected) {
            waypts.push({
                location: checkboxArray[i].value,
                stopover: true
            });
        }
    }

    directionsService.route({
        origin: document.getElementById('start').value,
        destination: document.getElementById('end').value,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: 'WALKING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
            var summaryPanel = document.getElementById('directions-panel');
            summaryPanel.innerHTML = '';
            // For each route, display summary information.
            for (var i = 0; i < route.legs.length; i++) {
                var routeSegment = i + 1;
                summaryPanel.innerHTML += '<b>Segment ' + routeSegment + ' to: </b>' + route.legs[i].end_address + '<br /><br />';
                summaryPanel.innerHTML += '<b>Directions: </b> Start at: ' + route.legs[i].start_address + '<br /><br />' + route.legs[i].steps[i].instructions + '<br /><br />';
                summaryPanel.innerHTML += '<b>End At: </b>' + route.legs[i].end_address + '<br />'
                summaryPanel.innerHTML += '<b><em>Total Distance: </b>' + route.legs[i].distance.text + '</em><br /><br /><hr />';
            }
            var btn = document.createElement("BUTTON");
            var text = document.createTextNode("Save Itinerary");
            btn.appendChild(text);
            var summaryPanel = document.getElementById('directions-panel').appendChild(btn);
            // btn.onclick = saveItinerary();

        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
