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

function App() {
  let JsxReturn;
  let testSong = {
    songName: 'Mama Mia',
    artist: 'Abba',
    album: 'Mango'
  };

  let newSong = {
    songName: 'The Sound of Silence',
    artist: 'Simon and Garfunkle',
    album: 'Sage'
  };

  let testVarProps = 'testVarProps1';
  let testArrProps = ['testArrProps1', 'testArrProps2', 'testArrProps3'];
  let testObjProps = {
    songName: 'The Sound of Silence',
    artist: 'Simon and Garfunkle',
    album: 'Sage'
  };

  let testSearchResults = 'testSearchResults1';

  const [appMode, setAppMode] = useState('Intro');
  const [searchBarValue, setSearchBarValue] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([testSong]);
  const [testMainOnClick, setTestMainOnClick] = useState(newSong);

  function handleSearchBarChange(event){
    setSearchBarValue(event.target.value);
    
  }

  function filterSongs(){
    function filterFunction(element){
      return element.songName.includes(searchBarValue);
    }
    let tempSong = songs.filter(filterFunction);
    setFilteredSongs(tempSong[0]);
    setAppMode('test mode');
    
  }



  if(appMode === 'Intro'){
    JsxReturn = (
      <div className="App">
        <Header />
        <Main onChange={handleSearchBarChange} SearchBarValue={searchBarValue} onClick={filterSongs}/>
        <Footer />
      </div>
    )
  }

  else if(appMode === "Search Results"){
    JsxReturn = (
      <div className="App">
        <Header />
        <div className='Split-screen'>
          <Main onChange={handleSearchBarChange}
            SearchBarValue={searchBarValue}
            FilteredSongsProp={filteredSongs}
            onClick={filterSongs}
            testArrProps={testArrProps} />
          <Main onChange={handleSearchBarChange} SearchBarValue={searchBarValue} filteredSongsProp={testSong.songName} />
          {newSong.songName}
          {testSong.songName}
          
        </div>
        <Footer />
      </div>
    )
  }

  else if(appMode === "test mode"){
    JsxReturn = (
      <div className="App">
        <Header />
        <div className='Split-screen'>
          <Main onChange={handleSearchBarChange}
            SearchBarValue={searchBarValue}
            filteredSongsProp={filteredSongs}
            onClick={filterSongs}
            testArrProps={testArrProps}
            newSong={newSong} />
          
        </div>
        <Footer />
      </div>
    )
  }

  return JsxReturn;
}

export default App;
