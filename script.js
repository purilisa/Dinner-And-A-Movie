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





function searchActivity() {
    var containerD = $(".display");
    var key = "RV4NvAwbBzuZbhVQwIFhqOZ3fZehiGIP";
    var fromDate = "2020-07-11"; //$("#startDate").val();
    var toDate = "2020-12-11"; //$("#endDate").val();
    var citySearch = "Richmond" //$("#addressCity").val();
    var state = "VA";
    var queryURL = url = "https://app.ticketmaster.com/discovery/v2/events.json?&apikey=" + key + "&city=" + citySearch + "&startDateTime=" + fromDate + "T14:00:00Z" + "&endDateTime=" + toDate + "T14:00:00Z";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        // Printing the entire object to console
        console.log(response);
        var eventArray = response._embedded.events;
        jQuery.each(eventArray, function(index, val) {
            var eventName = $("<h1>").text("EventName: " + val.name);
            var artistURL = $("<a>").attr("href", val.url).text(val.url); //.append(eventName);
            var upcomingEvents = $("<h2>").text("Start Date: " + val.dates.start.localDate);
            var long = $("<h2>").text("Long: " + val._embedded.venues[0].location.longitude);
            var lat = $("<h2>").text("lat: " + val._embedded.venues[0].location.latitude);

            // Empty the contents of the artist-div, append the new artist content
            $(containerD).empty();
            $(containerD).append(eventName, artistURL, upcomingEvents, long, lat);


        });
    });
}




$("#searchEvent").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    //var inputArtist = $("#artist-input").val().trim();

    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchActivity();
});