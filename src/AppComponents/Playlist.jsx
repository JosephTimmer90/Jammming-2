import React from 'react';
import PlaylistSearchBar from './PlaylistSearchBar';
import SelectPlaylist from './SelectPlaylist';

function Playlist(props){
    let playlistContent = <p>This is the default playlist content.</p>;
    if(props.appMode === 'Build Playlist'){
        playlistContent = 
            Array.isArray(props.playlistSongs) && props.playlistSongs.length > 0 ? props.playlistSongs.map((song) => (
                <div>
                    <p key={song.id}>
                    {song.songName} - {song.artist} ({song.album}) -- {song.testProperty}
                    </p>
                    <button type="button" onClick={() => props.deleteSongFromPlaylist(song.id)}>Delete From Playlist</button>
                </div>
            )) : <p>No songs in playlist.</p>
    }

        else if(props.appMode === 'Playlist Filter'){
        playlistContent = 
            Array.isArray(props.filteredPlaylistSongs) && props.filteredPlaylistSongs.length > 0 ? props.filteredPlaylistSongs.map((song) => (
                <div>
                    <p key={song.id}>
                    {song.songName} - {song.artist} ({song.album})
                    </p>
                    <button type="button" onClick={() => props.deleteSongFromPlaylist(song.id)}>Delete From Playlist</button>
                </div>
            )) : <p>No songs matching your criteria.</p>
    }

    return(
        <div className='playlist'>
            <h2>Playlist</h2>
            <SelectPlaylist
                selectPlaylistSearchBarValue={props.selectPlaylistSearchBarValue}
                onSelectPlaylistChange={props.onSelectPlaylistChange}
                selectPlaylist={props.selectPlaylist}
                onCreatePlaylistChange={props.onCreatePlaylistChange}
                createPlaylistSearchBarValue={props.createPlaylistSearchBarValue}
                onCreatePlaylistClick={props.onCreatePlaylistClick}
                currentPlaylist={props.currentPlaylist}
                handleSelectPlaylist={props.handleSelectPlaylist}
                onSavePlaylistClick={props.onSavePlaylistClick}
                onDeletePlaylistClick={props.onDeletePlaylistClick}
                handleChangePlaylistName={props.handleChangePlaylistName}
                switchToUpdatePlaylistName={props.switchToUpdatePlaylistName}
                handleSendPlaylistToSpotify={props.handleSendPlaylistToSpotify}
            />
            <PlaylistSearchBar
                onChange={props.onChange}
                playlistSearchBarValue={props.playlistSearchBarValue}
                filterPlaylistSongs={props.filterPlaylistSongs}
            />
            {playlistContent}
        </div>
    )
}

export default Playlist;