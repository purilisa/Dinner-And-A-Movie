$(document).ready(function() {

    // $("#findplace").on("click", function() {
    //     var placeField = $("#placefield").val().trim()
    //     var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + placeField + "&inputtype=textquery&fields=photos,formatted_address,name,geometry&key=AIzaSyCFP0tqM6o9f2FoX3gInG3rF-5nGBZiKc8"

    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function(response) {
    //         console.log(response)
    //         console.log("Can you see this?")
    //     }).fail(function(err) {
    //         console.log(err)
    //     })
    // })

    var latitude
    var longitude
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: latitude, lng: longitude},
            zoom: 12
        })
    }

    function getLocation() {
        navigator.geolocation.getCurrentPosition(getPosition)
    }

    function getPosition(position) {
        latitude = position.coords.latitude
        longitude = position.coords.longitude

        console.log(latitude)
        console.log(longitude)

        initMap()
    }

    
    getLocation()

    $("#centermap").on("click", function(event) {
        event.preventDefault()
        navigator.geolocation.getCurrentPosition(getPosition)
        console.log("button is clicked")
    })

    $("#findcity").on("click", function(event) {
        event.preventDefault()

        var cityField = $("#cityfield").val().trim()
        var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + cityField + "&key=AIzaSyCFP0tqM6o9f2FoX3gInG3rF-5nGBZiKc8"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response)
            console.log(response.results[0].geometry.location.lat)
            console.log(response.results[0].geometry.location.lng)

            latitude = response.results[0].geometry.location.lat
            longitude = response.results[0].geometry.location.lng

            initMap()
        })
    })
})

