import React from 'react';

function Playlist(props){
    return(
        <div>
            <h2>Playlist</h2>
                {Array.isArray(props.playlist) && props.playlist.length > 0 ? props.playlist.map((song, index) => (
                    <div>
                        <p key={song.id || index}>
                        {song.songName} - {song.artist} ({song.album})
                        </p>
                        <button onClick={() => props.deleteSongFromPlaylist(index)}>Delete From Playlist</button>
                    </div>
                    
                )) : <p>No songs in playlist</p>}
        </div>
    )
}

export default Playlist;