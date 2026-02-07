import React from 'react';
import { useNavigate } from 'react-router-dom';



function Header(props){

    const navigate = useNavigate();
    function handleHomeClick(){
        navigate('/');
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
    function handleReactResponsiveWithHooksNav(){
        navigate('/ReactResponsiveWithHooks')
    }
    function handleReactResponsiveWithComponents(){
        navigate('/ReactResponsiveWithComponents')
    }
    function handleNewTest(){
        navigate('/NewTest')
    }

    return(
        <header className="App-header">
            <div className='icon-container'>
                <img className='icon' src="https://cdn-icons-png.flaticon.com/512/174/174882.png" alt="Spotify Logo" />
            </div>
            <div className="app-title">
                <h1>Joe Timmer's Portfolio Website</h1>
            </div>
            <div className='hoverzone' >
                <div className='spacer'>
                </div>
                <div className='tight-navigation'>
                    <p className='Navigation-p'>Navigation</p>
                    <div className='three-bars'>|||</div>
                 </div>
                <ul className='menu' style={{listStyleType: 'none'}}>
                    <li className='router-nav-button' role='button' onClick={handleHomeClick}>Home</li>
                    <li className='router-nav-button' role='button' onClick={handleAccessTokenDisplayRouterNav}>Access Token Display</li>
                    <li className='router-nav-button' role='button' onClick={handleGameRouterNav}>Game</li>
                    <li className='router-nav-button' role='button' onClick={handleObtainSpotifyAccessTokenNav}>Obtain Spotify Access Token</li>
                    <li className='router-nav-button' role='button' onClick={handleMainNav}>Main</li>
                    <li className='router-nav-button' role='button' onClick={handleOldAppNav}>Old App</li>
                    <li className='router-nav-button' role='button' onClick={handleObtainSpotifyAccessTokenNav}>Obtain Spotify Access Token</li>
                    <li className='router-nav-button' role='button' onClick={handleReactResponsiveWithHooksNav}>React-Responsive With Hooks</li>
                    <li className='router-nav-button' role='button' onClick={handleReactResponsiveWithComponents}>React-Responsive With Components</li>
                    <li className='router-nav-button' role='button' onClick={handleNewTest}>NewTest</li>
                    <li className='router-nav-button' role='button'><a href='./TicTacJoeIndex.html' target='_blank'>TicTacJoe2 4</a></li>
                    <li className='router-nav-button' role='button'><a href='./Portfolio Website.html' target="_blank">Portfolio Website</a></li>
                </ul>
            </div>
            
            
        </header>
    )
}

export default Header;