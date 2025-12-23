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
    function handleGameRouterNav(){
        navigate('/Game')
    }
    function handleObtainSpotifyAccessTokenNav(){
        navigate('/obtainSpotifyAccessToken')
    }
    function handleMainNav(){
        navigate('/main')
    }
    function handleOldAppNav(){
        navigate('/OldApp')
    }
    function handleIntroNav(){
        navigate('/intro')
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
                    <li className='router-nav-button' role='button' onClick={handleGameRouterNav}>Game</li>
                    <li className='router-nav-button' role='button' onClick={handleObtainSpotifyAccessTokenNav}>Obtain Spotify Access Token</li>
                    <li className='router-nav-button' role='button' onClick={handleMainNav}>Main</li>
                    <li className='router-nav-button' role='button' onClick={handleOldAppNav}>Old App</li>
                    <li className='router-nav-button' role='button' onClick={handleIntroNav}>Intro</li>
                    <li className='router-nav-button' role='button' onClick>r-Obtain Spotify Access Token</li>
                </ul>
            </div>
            
            
        </header>
    )
}

export default Header;