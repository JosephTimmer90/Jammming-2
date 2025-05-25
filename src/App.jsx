import './App.css';
import React, { useState } from 'react';
import Header from './AppComponents/Header';
import Main from './AppComponents/Main';
import Footer from './AppComponents/Footer';
import Playlist from './AppComponents/Playlist';



function App() {
  let JsxReturn;

  const [songs] = useState(
    [
  {
    songName: 'Hit Me Baby One More Time',
    artist: 'Brittany Spears',
    album: 'Greatest Hits',
    id: 'a'
  },
  {
    songName: 'Carry on My Wayward son',
    artist: 'Kansas',
    album: 'Coral',
    id: 'b'
  },
  {
    songName: 'The Sickness',
    artist: 'Disturbed',
    album: 'Seafoam',
    id: 'c'
  },
  {
    songName: 'Fernando',
    artist: 'Abba',
    album: 'Fern',
    id: 'd'
  },
  {
    songName: 'Mama Mia',
    artist: 'Abba',
    album: 'Fern',
    id: 'e'
  },
  {
    songName: 'The Sound of Silence',
    artist: 'Simon and Garfunkle',
    album: 'Sage',
    id: 'f'
  }
]

  )
  const [appMode, setAppMode] = useState('Intro');
  const [searchBarValue, setSearchBarValue] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [playlistSongs, setPlaylistSongs] = useState([]);

  function handleSearchBarChange(event){
    setSearchBarValue(event.target.value);
    
  }

  function filterSongs(event){
    event.preventDefault();
    function filterFunction(element){
      let searchTerm = searchBarValue.toLowerCase();
      let elementName = element.songName.toLowerCase();
      let elementArtist = element.artist.toLowerCase();
      let elementAlbum = element.album.toLowerCase();
      if(searchTerm === ''){
        return true;
      }
      else if(elementName.includes(searchTerm) || elementArtist.includes(searchTerm) || elementAlbum.includes(searchTerm)){
        return true;
      }
    }
    let tempSongs = [...songs.filter(filterFunction)];
    setFilteredSongs(tempSongs);
    setAppMode('Search Results');
  }

  function addSongToPlaylist(index){
    let tempSong = filteredSongs[index];
    let tempPlaylist = [...playlistSongs, tempSong];
    setPlaylistSongs(tempPlaylist);
    setAppMode('Search Results');
}

  function deleteSongFromPlaylist(index){

    let tempPlaylist = [...playlistSongs];
    tempPlaylist.splice(index, 1);
    setPlaylistSongs(tempPlaylist);
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
            filteredSongsProp={filteredSongs}
            onClick={filterSongs}
            addSongToPlaylist={addSongToPlaylist}
          />
          <Playlist
            playlist={playlistSongs}
            deleteSongFromPlaylist={deleteSongFromPlaylist}
            
          />
        </div>
        <Footer />
      </div>
    )
  }

  return JsxReturn;
}

export default App;
