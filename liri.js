require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
//var Spotify = require("node-spotify-api");


//var spotify = new Spotify(keys.spotify);

"concert-this"
"spotify-this-song"
"movie-this"
"do-what-it-says"

//bands in town api axios

//spotify api no axios

// Function for omdb api using axios
var nodeArgs = process.argv;
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
    


//fs node package