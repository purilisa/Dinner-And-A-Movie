//var key = "Ua4fdRniaWe1M9DCQadoa31tN61njAr6JQDel3Y3";
//var searchAddress = $("#addressZip").val();
//var queryURL = "https://developer.movieglu.com/api-index/cinemasnearby/?key=" + key + "&" + searchAddress;

var latitude = ""
var longitude = ""
var thisGeoLocation = ""
var movieSearch = ""

var filmsNowShowing = {
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=10",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "api-version": "v200",
        "Authorization": "Basic RE9LVF9YWDptRVZESHp4WGdpU0o=",
        "client": "DOKT",
        "x-api-key": "Ua4fdRniaWe1M9DCQadoa31tN61njAr6JQDel3Y3",
        "device-datetime": "2018-09-14T08:30:17.360Z",
        "territory": "US",
        "geolocation": thisGeoLocation
    }
};


var filmLiveSearch = {
    "url": "https://api-gate2.movieglu.com/filmLiveSearch/?query=Bad&n=5",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "api-version": "v200",
        "Authorization": "Basic RE9LVF9YWDptRVZESHp4WGdpU0o=",
        "client": "DOKT",
        "x-api-key": "Ua4fdRniaWe1M9DCQadoa31tN61njAr6JQDel3Y3",
        "device-datetime": "2020-07-07T20:30:17.360Z",
        "territory": "US",
        "geolocation": thisGeoLocation
    }
};

function getLocation() {
    navigator.geolocation.getCurrentPosition(getPosition)
}

function getPosition(position) {
    latitude = position.coords.latitude
    longitude = position.coords.longitude

    latitude.toString()
    longitude.toString()

    thisGeoLocation = latitude + ";" + longitude

    console.log(thisGeoLocation)
}




getLocation();


$("#getmovies").on("click", function() {

    movieSearch = $("#addressZip").val().trim()

    console.log(movieSearch)

        $.ajax(filmLiveSearch).done(function(response) {
            console.log(response);


    // $.ajax(filmsNowShowing).done(function(response) {
    //     console.log(response);
    });
    
})





/*
client:	DOKT
x-api-key:	Ua4fdRniaWe1M9DCQadoa31tN61njAr6JQDel3Y3
authorization:	Basic RE9LVF9YWDptRVZESHp4WGdpU0o=
territory:	XX
api-version:	v200
geolocation:	-22.0;14.0 (Recommended location)
device-datetime:	Use ISO 8601 format: 2018-09-14T08:30:17.360Z
*/

// var tBody = $("tbody");
// var tRow = $("<tr>");
// // Methods run on jQuery selectors return the selector they we run on
// // This is why we can create and save a reference to a td in the same statement we update its text
// var titleTd = $("<td>").text(response.Title);
// var yearTd = $("<td>").text(response.Year);
// var actorsTd = $("<td>").text(response.Actors);
// // Append the newly created table data to the table row
// tRow.append(titleTd, yearTd, actorsTd);
// // Append the table row to the table body
// tBody.append(tRow);
//});


/*

var settings = {
"url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=10",
"method": "GET",
"timeout": 0,
"headers": {
"api-version": "v200",
"Authorization": "Basic A1B2c3D4E5f6H7I8j911M12=",
"client": "ABCD",
"x-api-key": "IyrBUDT7CuTTc6LH45mI5aAoG8",
"device-datetime": "2020-06-18T12:07:57.296Z",
"territory": "UK",
},
};

$.ajax(settings).done(function (response) {
console.log(response);
});

*/