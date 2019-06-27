require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");


var spotify = new Spotify(keys.spotify);






//spotify api no axios

// Function for omdb api using axios
/*var nodeArgs = process.argv;
var movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {
    if(i > 2 && i < nodesArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }else {
        movieName += nodeArgs[i];
    }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//console.log(queryUrl);

axios.get(queryUrl).then(
    function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes Ratings: " + response.data.Ratings[1].Value);
        console.log("Country Produced: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);

    })
    .catch(function(error) {
        if(error.response) {
            console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    });
    */


var userCase = process.argv[2];
var userCommand = process.argv[3];

// Switch case
var switchCase = function(userCase, userCommand){
  switch(userCase) {
    case "concert-this":
      var queryUrl = "https://rest.bandsintown.com/artists/" + userCommand + "/events?app_id=codingbootcamp";
      axios.get(queryUrl)
      .then (function(response) {
          for (var i = 0; i < response.data.length; i++){
            console.log("Venue Name: " + response.data[i].venue.name);
            console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
            console.log("Event Date: " + response.data[i].datetime);
            console.log("----------------------");
          }
        }
      ) 
    
    break;

    case "spotify-this-song":
      searchSpotify(userCommand)
    break;

    case "movie-this":
      var queryUrl = "http://www.omdbapi.com/?t=" + userCommand + "&y=&plot=short&apikey=trilogy";
      axios.get(queryUrl)
      .then (function(response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes Ratings: " + response.data.Ratings[1].Value);
            console.log("Country Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
          });
    break;

    case "do-what-it-says":
      console.log("fsnode")
  

  }
}

switchCase(userCase, userCommand);


//bands in town api axios


//fs node package