import React from 'react';

function PlaylistSearchBar(props) {
    return (
        <form className='playlistSearchBarForm'>
            <label >Search Playlist: </label>
            <input onChange={props.onChange}></input>
            <p>{props.playlistSearchBarValue}</p>
            <button type="button" className='playlistSearchButton' onClick={props.filterPlaylistSongs}>Search Playlist</button>
        </form>

    )
}

export default PlaylistSearchBar;