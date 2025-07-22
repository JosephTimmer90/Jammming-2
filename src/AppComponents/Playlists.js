import React from 'react';

function Playlists(props) {
  return (
    <div>
      <h1>Playlists</h1>
      <p>Here you can view your playlists.</p>
      {props.selectPlaylist && props.selectPlaylist.length > 0 ? (props.selectPlaylist.map((playlist, index) => (
        <ul>
            <li key={index}>{playlist.playlistName}</li>
        </ul>
        ))) : (<p> No playlists available.</p>)}
    </div>
  );
};

export default Playlists;