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
  let testSong = [{
    songName: 'The Sound of Silence',
    artist: 'Simon and Garfunkle',
    album: 'Sage'
  }];
  let testVariable = 'This is the test variable.';
  let testArray = ['this ', 'is ', 'the ', 'test ', 'array'];
  let testObject = {first: 'this',
    second: 'is',
    third: 'the',
    fourth: 'test',
    fifth: 'object'
  }

  let arrayOfObjects = [
    {name: 'this', value: 1},
    {name: 'is', value: 2},
    {name: 'the', value: 3},
    {name: 'test', value: 4},
    {name: 'object array', value: 5}
  ];

  const [appMode, setAppMode] = useState('Intro');
  const [searchBarValue, setSearchBarValue] = useState('');
  const [filteredSongs, setFilteredSongs] = useState(['this is the initial value']);

  function handleSearchBarChange(event){
    setSearchBarValue(event.target.value);
  }

  function filterSongs(){
    function filterFunction(element){
      return element.songName.includes(searchBarValue);
    }
    setFilteredSongs(songs.filter(filterFunction));
    
  }



  if(appMode === 'Intro'){
    JsxReturn = (
      <div className="App">
        <Header />
        <Main arrayOfObjects={arrayOfObjects} Variable={testVariable} Array={testArray} Object={testObject} onChange={handleSearchBarChange} SearchBarValue={searchBarValue}  filteredSongsProp={filteredSongs} />
        <Footer />
      </div>
    )
  }

  else if(appMode === "Search results"){
    JsxReturn = (
      <div className="App">
        <Header />
        <div className='Split-screen'>
          <Main onChange={handleSearchBarChange} SearchBarValue={searchBarValue} FilteredSongsProp={filteredSongs} onClick={filterSongs} testSongTest={testSong} testVariable={testVariable} arr={testArray}/>
          <p>Test App: {testSong[0].songName}</p>
          <Main onChange={handleSearchBarChange} SearchBarValue={searchBarValue} FilteredSongsProp={filteredSongs} />
          
        </div>
        <Footer />
      </div>
    )
  }

  return JsxReturn;
}

export default App;
