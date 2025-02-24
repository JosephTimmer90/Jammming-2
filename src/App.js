import './App.css';
import React, { useState } from 'react';
import Header from './AppComponents/Header';
import Main from './AppComponents/Main';
import Footer from './AppComponents/Footer';

let songs = [
  {
    songName: 'Hit Me Baby One More Time',
    artist: 'Brittany Spears',
    album: 'Greatest Hits'
  },
  {
    songName: 'Carry on My Wayward son',
    artist: 'Kansas',
    album: 'Coral'
  },
  {
    songName: 'The Sickness',
    artist: 'Disturbed',
    album: 'Seafoam'
  },
  {
    songName: 'Fernando',
    artist: 'Abba',
    album: 'Fern'
  },
  {
    songName: 'Mama Mia',
    artist: 'Abba',
    album: 'Mango'
  },
  {
    songName: 'The Sound of Silence',
    artist: 'Simon and Garfunkle',
    album: 'Sage'
  }
]

let filteredSongs = [];


function App() {
  let JsxReturn;

  const [appMode, setAppMode] = useState('Search results');
  const [searchBarValue, setSearchBarValue] = useState('');

  function handleSearchBarChange(event){
    setSearchBarValue(event.target.value);
  }

  function filterSongs(){
    function filterFunction(element){
      element.songName.includes(searchBarValue) || element.artist.includes(searchBarValue) ||element.album.includes(searchBarValue)
    }
    filteredSongs = songs.filter(filterFunction);
    console.log(filteredSongs);
  }



  if(appMode === 'Intro'){
    JsxReturn = (
      <div className="App">
        <Header />
        <Main onChange={handleSearchBarChange} SearchBarValue={searchBarValue}  filteredSongs={filteredSongs} />
        <Footer />
      </div>
    )
  }

  else if(appMode === "Search results"){
    JsxReturn = (
      <div className="App">
        <Header />
        <div className='Split-screen'>
          <Main onChange={handleSearchBarChange} SearchBarValue={searchBarValue} filteredSongs={filteredSongs} onClick={filterSongs}/>
          <Main onChange={handleSearchBarChange} SearchBarValue={searchBarValue} filteredSongs={filteredSongs} />
        </div>
        <Footer />
      </div>
    )
  }

  return JsxReturn;
}

export default App;
