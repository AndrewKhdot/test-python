         var mymap = L.map('mapid').setView([53.905, 27.567], 13);

     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5kcmV3a2giLCJhIjoiY2s5bm5pbHo3MDFzMzNncG10dGJvMTY5eiJ9.O1sEEaxlpOBgDFflrOv2Dw'
}).addTo(mymap);
    function onMapClick(e) {
        var data = {lat: e.latlng.lat, lng : e.latlng.lng }
            $.ajax({
                method: "GET",
                url: "/add-point/",
                data: data ,
                dataType: 'json',
                success: function(data) {
                    $('#mess').html(data.mess)
                    console.log(data);
                },
                error: function(error) {
                    console.log(error);
                }
            });
        };


mymap.on('click', onMapClick);

