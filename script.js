// var key = "RV4NvAwbBzuZbhVQwIFhqOZ3fZehiGIP";
// //var searchAddress = $("#addressZip").val();
// var fromDate = "2020-07-11"; //$("#startDate").val();
// var toDate = "2020-12-11"; //$("#endDate").val();
// var citySearch = "Richmond" //$("#addressCity").val();
// var state = "VA";
// console.log($("#addressCity").val());

// var url = "https://app.ticketmaster.com/discovery/v2/events.json?&apikey=" + key + "&city=" + citySearch + "&startDateTime=" + fromDate + "T14:00:00Z" + "&endDateTime=" + toDate + "T14:00:00Z";
// console.log("url  :  " + url);

// var containerD = $(".display");

// $(document).on("ready", function() {

//     $.ajax({
//         url: url,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response);
//     });
// });



// $("#searchEvent").on("click", function() {
//     $.ajax({
//         url: url,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response);
//         var eventArray = response._embedded.events;
//         console.log("evenarray : " + eventArray);
//         jQuery.each(eventArray, function(index, val) {
//             console.log(index + ": " + val.name);
//             var activityName = val.name;
//             console.log(index + ": " + val.url);
//             var eventName = $("<h1>").text("EventName: " + val.name);
//             var artistURL = $("<a>").attr("href", val.url).text(val.url); //.append(eventName);
//             var upcomingEvents = $("<h2>").text("Start Date: " + val.dates.start.localDate);
//             var long = $("<h2>").text("Long: " + val._embedded.venues[0].location.longitude);
//             var lat = $("<h2>").text("lat: " + val._embedded.venues[0].location.latitude);
//             console.log(index + ": " + val._embedded.venues[0].location.longitude);
//             console.log(index + ": " + val.url);
//             console.log(index + ": " + val._embedded.venues[0].location.latitude);
//             // console.log(index + ": " + val._embedded.venues[0].address.line1);
//             // console.log(index + ": " + val._embedded.venues[0].images[0].url); //image
//             // console.log(index + ": " + val.dates.start.localDate); //startdate
//             // console.log(index + ": " + val.dates.status.code); //current status of event

//             // Constructing HTML containing the artist information
//             //var eventName = $("<h1>").text(response.name);
//             // var artistURL = $("<a>").attr("href", response.url).append(artistName);
//             // var artistImage = $("<img>").attr("src", response.thumb_url);
//             // var trackerCount = $("<h2>").text(response.tracker_count + " fans tracking this artist");
//             // var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
//             // var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

//             // Empty the contents of the artist-div, append the new artist content
//             $(containerD).empty();
//             $(containerD).append(eventName, artistURL, upcomingEvents, long, lat);

//         });

//     });
// });

// Close the dropdown if the user clicks outside of it


// $(".dropbtn").on("click", function() {
//     $("#myDropdown").toggleClass("show");
// });

// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }


// $(".concert").on("click", function() {
//     $("#myDropdown").css("display", "show");
// });




// $(".concert").on("click", function() {
//     // $(".concertDisplay").css("display", "block");
//     $(".grid-container").show();
//     $(".concertDisplay").show();
//     $(".gamingDisplay").hide();
//     $(".restaurantDisplay").hide();
// });

// $(".gaming").on("click", function() {
//     $(".grid-container").show();
//     $(".gamingDisplay").css("display", "block");
//     $(".concertDisplay").hide();
//     $(".restaurantDisplay").hide();
// });

// $(".restaurant").on("click", function() {
//     $(".grid-container").show();
//     $(".restaurantDisplay").css("display", "block");
//     $(".concertDisplay").hide();
//     $(".gamingDisplay").hide();
// });

// var url = "https://app.ticketmaster.com/discovery/v2/events.json?&apikey=RV4NvAwbBzuZbhVQwIFhqOZ3fZehiGIP&city=Richmond&startDateTime=2020-07-11T14:00:00Z&endDateTime=2020-12-11T14:00:00Z&State=virginia&zip=23294&radius=10";
// $("#searchEvent").on("click", function() {



$(document).ready(function() {



    var latitude
    var longitude
    var map;
    var service

    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: latitude, lng: longitude },
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

    function createMarker(markerLat, markerLng, locName, locAddr, locPhone, locRating) {
        var contentString = '<div class="infoWinMain">' +
            '<div class="infoWinContent">' +
            '</div>' +
            '<h4 class="infoWinHeading">' + locName + '</h4>' +
            '<div id="bodyContent">' +
            '<p>Address: ' + locAddr + '</p>' +
            '<p>Phone #: ' + locPhone + '</p>' +
            '<p>User rating: ' + locRating + '</p>' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: { lat: markerLat, lng: markerLng },
            title: locName
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        marker.setMap(map);
    }

    function findDate() {
        var distMiles = $("#searchradius").val()
        var distMeters = distMiles * 1610
        var cuisine = $("#cuisine").val()
        var currentMapCoords = map.getCenter()
        latitude = currentMapCoords.lat()
        longitude = currentMapCoords.lng()
        var searchLocation = new google.maps.LatLng(latitude, longitude)
        var mapZoom = 12

        console.log(distMiles)
        console.log(distMeters)
        console.log(cuisine)
        console.log(latitude + ", " + longitude)
        console.log(searchLocation)

        if (distMiles >= 10) {
            mapZoom = 10
        } else if (distMiles >= 20) {
            mapZoom = 9
        } else if (distMiles >= 25) {
            mapZoom = 8
        } else {
            mapZoom = 12
        }

        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: latitude, lng: longitude },
            zoom: mapZoom
        })


        var request = {
            location: searchLocation,
            radius: distMeters.toString(),
            type: ["restaruant"],
            query: cuisine.toString()
        };

        service = new google.maps.places.PlacesService(map);
        service.textSearch(request, callback);
    }

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                console.log(place)
                var placeAddr = place.formatted_address

                var placeDetailId = place.place_id

                var requestDetail = {
                    placeId: placeDetailId,
                    fields: ['name', 'rating', 'formatted_phone_number', 'geometry', 'photo', 'url']
                };

                service = new google.maps.places.PlacesService(map);
                service.getDetails(requestDetail, callback);

                function callback(placeDetail, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        console.log(placeDetail)
                        var placeLat = placeDetail.geometry.location.lat()
                        var placeLng = placeDetail.geometry.location.lng()
                        var placeName = placeDetail.name
                        var placePhone = placeDetail.formatted_phone_number
                        var placeRating = placeDetail.rating
                        createMarker(placeLat, placeLng, placeName, placeAddr, placePhone, placeRating);
                    }
                }
            }
        }
    }




    getLocation()

    $("#centermap").on("click", function(event) {
        event.preventDefault()
        navigator.geolocation.getCurrentPosition(getPosition)
            // console.log("button is clicked")
    })

    $("#findcity").on("click", function(event) {
        event.preventDefault()

        var cityField = $("#cityfield").val().trim()
        var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + cityField + "&key=AIzaSyCFP0tqM6o9f2FoX3gInG3rF-5nGBZiKc8"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            // console.log(response)
            // console.log(response.results[0].geometry.location.lat)
            // console.log(response.results[0].geometry.location.lng)

            latitude = response.results[0].geometry.location.lat
            longitude = response.results[0].geometry.location.lng
            console.log("latitute" + latitude)
            console.log("longitude" + longitude)

            initMap()
        })
    })

    $("#findrestaurant").on("click", function(event) {
        event.preventDefault()
        findDate();
        searchActivity();
    })




    function searchActivity() {
        var containerD = $(".activityDisplay");
        var key = "RV4NvAwbBzuZbhVQwIFhqOZ3fZehiGIP";
        var fromDate = moment().format("YYYY-MM-DD");
        var toDate = moment("12-31-2020").format("YYYY-MM-DD");
        var citySearch = "Richmond";
        var state = "VA";

        console.log(queryURL);
        var latlong = latitude + "," + longitude;
        console.log("latlong" + latlong);
        console.log(moment("12-31-2020").format("YYYY-MM-DD"));
        var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?&apikey=" + key + "&radius=5" + "&latlong=" + latlong + "&startDateTime=" + fromDate + "T14:00:00Z" + "&endDateTime=" + toDate + "T14:00:00Z";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // Printing the entire object to console
            console.log(response);
            var eventArray = response._embedded.events;
            var activityContainer = $("<div>");
            jQuery.each(eventArray, function(index, val) {
                var eventName = $("<h1>").text("EventName: " + val.name);
                var artistURL = $("<a>").attr("href", val.url).text(val.url); //.append(eventName);
                var upcomingEvents = $("<h2>").text("Start Date: " + val.dates.start.localDate);
                var long = val._embedded.venues[0].location.longitude // $("<h2>").text("Long: " + val._embedded.venues[0].location.longitude);
                var lat = val._embedded.venues[0].location.latitude //$("<h2>").text("lat: " + val._embedded.venues[0].location.latitude);
                var venue = $("<h2>").text("Long: " + val._embedded.venues[0].name);
                // Empty the contents of the artist-div, append the new artist content
                // $(containerD).empty();
                $(containerD).append(activityContainer);
                $(activityContainer).append(eventName, artistURL, upcomingEvents, venue);


            });
        });
    }


    // $("#searchEvent").on("click", function(event) {
    //     // Preventing the button from trying to submit the form
    //     event.preventDefault();
    //     // Storing the artist name
    //     //var inputArtist = $("#artist-input").val().trim();

    //     // Running the searchBandsInTown function(passing in the artist as an argument)
    //     searchActivity();
    // });


});