import React from 'react';

function SearchResults(props) {
  return (
    <div className="Main-Search-Results">
      {props.filteredSongsProp && props.filteredSongsProp.length > 0 ? (
        props.filteredSongsProp.map((song, index) => (
          <div key={song.id || index}>
            <p>{song.songName} - {song.artist} ({song.album})</p>
            <button onClick={() => props.addSongToPlaylist(index)}>
              Add to Playlist
            </button>
          </div>
        ))
      ) : (
        <p>No search results.</p>
      )}
    </div>
  );
}

export default SearchResults;