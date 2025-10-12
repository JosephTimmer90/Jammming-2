import React from 'react';
import { useNavigate } from 'react-router-dom';



function Header(props){

    const navigate = useNavigate();
    function handleHomeRouterNav(){
       navigate('/');
    }
    function handleTestRouterNav(){
        navigate('/test');
    }
    function handleAccessTokenDisplayRouterNav(){
        navigate('/accessTokenDisplay')
    }

    return(
        <header className="App-header">
            <div className='icon-container'>
                <img className='icon' src="https://cdn-icons-png.flaticon.com/512/174/174882.png" alt="Spotify Logo" />
            </div>
            <div className="app-title">
                <h1>Jammming!!!</h1>
                <h2>Create your own playlist!</h2>
            </div>
            <div role="button" className='navigation' onClick={props.handleOpenNavigationMenu}>
                <p>navigation</p>
            </div>
            <div className='navigation-menu-closed'>
                <div className='navigation-menu-header'>
                    <img className='close-icon' src='./Close Menu Icon.png' alt='Close Menu Icon' onClick={props.handleCloseNavigationMenu} />
                </div>
                <ul>
                    <li className='nav-button' role='button' onClick={props.handleChangeToHomeMode}>Home</li>
                    <li className='nav-button' role='button' onClick={props.handleChangeToBuildPlaylistMode}>Build Playlist</li>
                    <li className='nav-button' role='button' onClick={props.handleChangeToPlaylistFilterMode}>Filter Playlist</li>
                    <li className='nav-button' role='button' onClick={props.handleChangeToViewPlaylistsMode}>View Playlists</li>
                    <li className='nav-button' role='button' onClick={props.handleChangeToUpdatePlaylistNameMode}>Rename Current Playlist</li>
                    <li className='nav-button' role='button' onClick={props.handleChangeToSpotifyMode}>Spotify</li>
                    <li className='nav-button' role='button' onClick={props.handleChangeToObtainSpotifyAccessTokenMode}>Obtain Spotify Access Token</li>
                </ul>
            </div>
            <div role="button" className='router-navigation' onClick={props.handleOpenRouterNav} >
                <p>navigation</p>
            </div>
            <div id='router-navigation-menu-closed'>
                <div className='router-navigation-menu-header'>
                    <img className='router-close-icon' src='./Close Menu Icon.png' alt='Close Menu Icon' onClick={props.handleCloseRouterNav} />
                </div>
                <ul>
                    <li className='router-nav-button' role='button' onClick={handleHomeRouterNav}>r-Home</li>
                    <li className='router-nav-button' role='button' onClick={handleTestRouterNav}>r-test</li>
                    <li className='router-nav-button' role='button' onClick={handleAccessTokenDisplayRouterNav}>Access Token Display</li>
                    <li className='router-nav-button' role='button' onClick>r-View Playlists</li>
                    <li className='router-nav-button' role='button' onClick>r-Rename Current Playlist</li>
                    <li className='router-nav-button' role='button' onClick>r-Spotify</li>
                    <li className='router-nav-button' role='button' onClick>r-Obtain Spotify Access Token</li>
                </ul>
            </div>
            
            
        </header>
    )
}

export default Header;