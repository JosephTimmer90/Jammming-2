import React from 'react';

function generateRandomString(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function ObtainSpotifyAccessToken({ savedAccessToken }) {
  const handleLogin = () => {
    const stateKey = 'spotify_auth_state';
    const clientId = '7ae841bdd9a84068b8d66beabc392e10'; // keep private in production
    const redirectUri = 'https://localhost:3000/accessTokenRetrieval/'; // must be registered in Spotify dashboard
    const state = generateRandomString(16);
    localStorage.setItem(stateKey, state);

    const scope = 'user-read-private user-read-email';
    const params = new URLSearchParams({
      response_type: 'token',
      client_id: clientId,
      scope,
      redirect_uri: redirectUri,
      state
    });

    const url = `https://accounts.spotify.com/authorize?${params.toString()}`;
    // redirect the browser to Spotify's authorize endpoint
    window.location.href = url;
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Spotify</button>
      <p>Access Token: {savedAccessToken ? savedAccessToken : 'The access token has not been retrieved yet.'}</p>
    </div>
  );
}

export default ObtainSpotifyAccessToken;
