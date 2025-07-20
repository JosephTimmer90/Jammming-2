import React from 'react';

function SelectPlaylist(props) {

    return (
        <div className='red-border'>
            <form className='select-playlist'>
                <label>Select Playlist:  </label>
                <input placeholder='Playlist Name' onChange={props.onSelectPlaylistChange}>
                </input>
                <p>This is the select playlist search bar value: {props.selectPlaylistSearchBarValue}</p>
                <button type="button" onClick={props.handleSelectPlaylist}>Select Playlist</button>
                <label>Create Playlist: </label>
                <input placeholder={'New Playlist Name'} onChange={props.onCreatePlaylistChange}></input>
                <p>{props.createPlaylistSearchBarValue}</p>
                <button type="button" onClick={props.onCreatePlaylistClick}>Create Playlist</button>
                <button type="button" onClick={props.onSavePlaylistClick}>Save Playlist</button>
                <button type="button" onClick={props.onDeletePlaylistClick}>Delete Playlist</button>
                <button type="button" onClick={props.handleSendPlaylistToSpotify}>Send Playlist To Spotify</button>
            </form>
            <div className='h3-container' role='button' onClick={props.switchToUpdatePlaylistName}>
                <h3 >Current Playlist: {props.currentPlaylist && props.currentPlaylist.length > 0 ? props.currentPlaylist : 'No playlist selected.'}</h3>
            </div>
        </div>
    )

}

export default SelectPlaylist;