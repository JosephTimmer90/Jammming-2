import React from 'react';

function SearchResults(props){
    return(
        <div>                                                              
            Search Results:
            {(Array.isArray(props.filteredSongsProp) ? props.filteredSongsProp : []).map((song, index) => (
                <div key={song.id || index} className='searchResult'>
                    <h3>Song {index+1}: {song ? song.songName : "No song name found"}</h3>
                    <p>Artist: {song ? song.artist : "No artist found"}</p>
                    <p>Album: {song ? song.album : "No album found"}</p>
                    <button onClick={() => props.addSongToPlaylist(index)}>Add element {index} to playlist!</button>
                </div>
            ))}
        </div>
    )
}

export default SearchResults;