import React from 'react';

function UpdatePlaylistName(props) {

    return (
        <div className='Update-Playlist-Name'>
            <h2>Update Playlist Name</h2>
            <form>
                <label> Select Playlist: </label>
                <input type='text' placeholder='Select Playlist' onChange={props.handleUpdatePlaylistNameSelectPlaylistSearchBarChange} />
                <button type='button' onClick={props.handleUpdatePlaylistNameSelectPlaylist}>Select Playlist</button>
            </form>
            <p>Search Bar Value: {props.updatePlaylistNameSelectPlaylistSearchBarValue}</p>
            <h3>Current Playlist: {props.currentPlaylist}</h3>
            <form>
                <label> Enter New Playlist Name: </label>
                <input type='text' placeholder='New Playlist Name' onChange={props.handlePlaylistNameChangeSearchBarValueChange} />
                <button type='button' onClick={props.handleChangePlaylistName}>Update Playlist Name</button>
            </form>
            <p>Search Bar Value: {props.playlistNameChangeSearchBarValue}</p>
        </div>
    )
}

export default UpdatePlaylistName;
