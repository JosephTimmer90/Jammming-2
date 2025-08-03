import React from 'react';

function generateRandomString(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function getAccessTokenFromUrl() {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  return params.get('access_token');
}

function ObtainSpotifyAccessToken() {
  const handleLogin = () => {
    const stateKey = 'spotify_auth_state';
    const clientId = '7ae841bdd9a84068b8d66beabc392e10';
    const redirectUri = 'http://localhost:3000/' //'https://joejammming-2-redirect.netlify.app/';
    const state = generateRandomString(16);
    localStorage.setItem(stateKey, state);
    const scope = 'user-read-private user-read-email';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientId);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirectUri);
    url += '&state=' + encodeURIComponent(state);

    window.location = redirectUri;
  };

  if(accessToken !== '') {
    const accessToken = getAccessTokenFromUrl();
  }

  return (
    <div>
      <button onClick={handleLogin}>Login with Spotify</button>
      <p>Access Token: {accessToken}</p>
    </div>
  );
}

export default ObtainSpotifyAccessToken;
