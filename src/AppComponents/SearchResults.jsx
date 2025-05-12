import React from 'react';

function SearchResults(props){
    return(
        <div>                                                              
            Search Results: 
            <h3>Song 1: {props.filteredSongsProp ? props.filteredSongsProp.songName : "No song found"}</h3>
            <p>Artist: {props.filteredSongsProp ? props.filteredSongsProp.artist : "No song found"}</p>
            <p>Album: {props.filteredSongsProp ? props.filteredSongsProp.album : "No song found"}</p>
            <button>Add to playlist!</button>
        </div>
    )
}

export default SearchResults;