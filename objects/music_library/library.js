const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       let arr = [];
       for (let element in library['playlists']){
       let phrase = library['playlists'][element];
       arr.push(`${phrase.id}: ${phrase.name} - ${phrase.tracks.length} tracks`);
       }
       return arr.join('\n');
}


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       let arrT = [];
       for (let element in library['tracks']){
         let phrase = library['tracks'][element];
         arrT.push(`${phrase.name} by ${phrase.artist} ( ${phrase.album} )`);
       }
       return arrT.join('\n');
}


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       let arrP = [];
       let phrase = library['playlists'][playlistId];
       arrP.push(`${phrase.id}: ${phrase.name} - ${phrase.tracks.length}`);
       for (let i = 0; i < phrase.tracks.length; i++){
         arrP.push(`${phrase.tracks[i]}: ${library['tracks'][`${phrase.tracks[i]}`].name} by ${library['tracks'][`${phrase.tracks[i]}`].artist} ( ${library['tracks'][`${phrase.tracks[i]}`].album} )`);
       }
       return arrP.join('\n');
}


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       library[playlistId]['p01']['tracks'].push(trackId);
       return library[playlistId]['p01']['tracks'];
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  let newId = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return newId;
}


// adds a track to the library
const addTrack = function(newName, newArtist, newAlbum) {
      const newId = generateUid();
      library.tracks[`${newId}`] = {
       Id: newId,
       name: newName,
       artist: newArtist,
       album: newAlbum
      };
      return library.tracks;
}


// adds a playlist to the library
const addPlaylist = function(newName) {
       const newId = generateUid();
       library.playlists[`${newId}`] = {
              name: newName,
             };
             return library.playlists;
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
    
}

console.log(printPlaylists());
console.log(printTracks());
console.log(printPlaylist("p01"));
console.log(addTrackToPlaylist('t03', 'playlists'));
console.log(generateUid());
console.log(addTrack("Honey, Honey", "Abba", "Waterloo"));
console.log(addPlaylist("For Ever"));