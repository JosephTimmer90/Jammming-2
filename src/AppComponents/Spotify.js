import React from 'react';

function Spotify(props) {
    let spotifyReturn = ''
    if (!props.spotifyURIs || props.spotifyURIs.length < 1) {
        spotifyReturn = <h2>No Spotify URIs available.</h2>;
    }
    else if (props.spotifyURIs || props.spotifyURIs.length > 0){
        spotifyReturn = (
            <>
                <h2>This is the Array of uris that could be sent to Spotify</h2>
                <ul>
                    {props.spotifyURIs.map((uri, index) => (
                        <li key={index}>{uri}</li>
                    ))}
                </ul>
            </>
        )
    }

    return spotifyReturn;
}

export default Spotify;