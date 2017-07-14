$(document).ready(function(){
    function initMap() {
        var uluru = {lat: 40.7561122, lng: -73.9874107};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        console.log("ONE");
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        }); 
                console.log("ONE");

    }
    initMap();
});
