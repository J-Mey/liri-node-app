# liri-node-app


LIRI is a node application that allow the user to search Spotify, Bands in Town for concerts, and IMDB for movies. LIRI is a Language Interpretation and Recongnition Interface. LIRI will be a command line node app that takes in parameters and gives the user back data.

Give a high-level overview of how the app is organized



# Liri.js can take in one of the following commands:

## concert-this
*node liri.js concert-this '<artist/band name here>'*

![Bands In Town API](https://github.com/J-Mey/liri-node-app/blob/master/Images/bandsintown.JPG?raw=true)

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")

## spotify-this-song
*node liri.js spotify-this-song '<song name here>'*

This will show the following information about the song in your terminal/bash window:

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

## movie-this
*node liri.js movie-this '<movie name here>'*

This will output the following information to your terminal/bash window:

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.


## do-what-it-says
*node liri.js do-what-it-says*

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.


Include screenshots, gifs or videos of the app functioning
Contain a link to a deployed version of the app
Clearly list the technologies used in the app

Technologies used includes:

Node
Axios
Moment
Bands in Town API
Spotify API
OMDB API




State your role in the app development