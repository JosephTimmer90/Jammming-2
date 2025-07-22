import './App.css';
import React, { useState } from 'react';
import Header from './AppComponents/Header';
import Main from './AppComponents/Main';
import Footer from './AppComponents/Footer';
import Playlist from './AppComponents/Playlist';
import UpdatePlaylistName from './AppComponents/UpdatePlaylistName';
import Playlists from './AppComponents/Playlists';
import Spotify from './AppComponents/Spotify';

export function add(num1, num2) {
  return num1 + num2;
}

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
  const [playlistSearchBarValue, setPlaylistSearchBarValue] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [filteredPlaylistSongs, setFilteredPlaylistSongs] = useState([]);
  const [selectPlaylistSearchBarValue, setSelectPlaylistSearchBarValue] = useState('');
  const [selectPlaylist, setSelectPlaylist] = useState([]);
  const [createPlaylistSearchBarValue, setCreatePlaylistSearchBarValue] = useState('');
  const [currentPlaylist, setCurrentPlaylist] = useState('');
  const [playlistNameChangeSearchBarValue, setPlaylistNameChangeSearchBarValue] = useState('');
  const [updatePlaylistNameSelectPlaylistSearchBarValue, setUpdatePlaylistNameSelectPlaylistSearchBarValue] = useState('');
  const [spotifyURIs, setSpotifyURIs] = useState([]);

  function handleOpenNavigationMenu(event){
    event.preventDefault();
    const navigationMenu = document.querySelector('.navigation-menu-closed');
    if(navigationMenu.classList.contains('navigation-menu-closed')){
      navigationMenu.classList.remove('navigation-menu-closed');
      navigationMenu.classList.add('navigation-menu-open');
    } else {
      navigationMenu.classList.remove('navigation-menu-open');
      navigationMenu.classList.add('navigation-menu-closed');
    }
  }

  function handleCloseNavigationMenu(event){
    event.preventDefault();
    const navigationMenu = document.querySelector('.navigation-menu-open');
    if(navigationMenu.classList.contains('navigation-menu-open')){
      navigationMenu.classList.remove('navigation-menu-open');
      navigationMenu.classList.add('navigation-menu-closed');
    }
  }
  
  function handleSearchBarChange(event){
    setSearchBarValue(event.target.value);
  }

  function handlePlaylistSearchBarChange(event){
    setPlaylistSearchBarValue(event.target.value)
  }

  function handleSelectPlaylistSearchBarChange(event){
    setSelectPlaylistSearchBarValue(event.target.value);
  }

  function handleCreatePlaylistSearchBarChange(event){
    setCreatePlaylistSearchBarValue(event.target.value);
  }

  function handlePlaylistNameChangeSearchBarValueChange(event){
    setPlaylistNameChangeSearchBarValue(event.target.value);
  }

  function handleUpdatePlaylistNameSelectPlaylistSearchBarChange(event){
    setUpdatePlaylistNameSelectPlaylistSearchBarValue(event.target.value);
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
    tempSongs.forEach(song => {song.testProperty = song.id;});
    setFilteredSongs(tempSongs);
    setAppMode('Build Playlist');
  }

  function filterPlaylistSongs(event){
    event.preventDefault();
    function filterFunction(element){
      let searchTerm = playlistSearchBarValue.toLowerCase();
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
    let tempSongs = [...playlistSongs.filter(filterFunction)];
    setFilteredPlaylistSongs(tempSongs);
    setAppMode('Playlist Filter');
  }

  function addSongToPlaylist(index){
    let tempSong = filteredSongs[index];
    setPlaylistSongs([...playlistSongs, tempSong]);
  }

  function deleteSongFromPlaylist(songID){
    let tempPlaylist = [...playlistSongs];
    const index = tempPlaylist.findIndex(song => song.id === songID);
    tempPlaylist.splice(index, 1);
    setPlaylistSongs(tempPlaylist);
    setAppMode('Build Playlist');
  }

  function handleSelectPlaylist(event){
    event.preventDefault();
    let tempPlaylistName = selectPlaylistSearchBarValue;
    setCurrentPlaylist(tempPlaylistName);
    let songArray = [];
    for(let i=0; i<selectPlaylist.length; i++){
      if(selectPlaylist[i].playlistName === tempPlaylistName){
        songArray = selectPlaylist[i].songs;
        break;
      }
    }
    setPlaylistSongs(songArray);
  }

  function handleUpdatePlaylistNameSelectPlaylist(event){
    event.preventDefault();
    let tempPlaylistName = updatePlaylistNameSelectPlaylistSearchBarValue;
    setCurrentPlaylist(tempPlaylistName);
    let songArray = [];
    for(let i=0; i<selectPlaylist.length; i++){
      if(selectPlaylist[i].playlistName === tempPlaylistName){
        songArray = selectPlaylist[i].songs;
        break;
      }
    }
    setPlaylistSongs(songArray);
  }
  
  function handleSavePlaylist(event){
    event.preventDefault();
    let tempPlaylistList = [...selectPlaylist];
    let tempPlaylist = {playlistName: currentPlaylist, songs: playlistSongs};
    if(currentPlaylist !== ''){
      const index = tempPlaylistList.findIndex(playlist => playlist.playlistName === currentPlaylist);
      if(index !== -1){
        tempPlaylistList[index] = tempPlaylist;
      } else {
        tempPlaylistList.push(tempPlaylist);
      }
      setSelectPlaylist(tempPlaylistList);
      setAppMode('Playlist Filter');
    }
  }

  function createPlaylist(event){
    event.preventDefault();
    let tempPlaylistList = [...selectPlaylist];
    let tempPlaylist = {playlistName: createPlaylistSearchBarValue, songs: []};
    if(createPlaylistSearchBarValue !== ''){
      tempPlaylistList.push(tempPlaylist);
      setSelectPlaylist(tempPlaylistList);
      setCurrentPlaylist(createPlaylistSearchBarValue);
      setCreatePlaylistSearchBarValue('');
      setAppMode('Playlist Filter'); 
    }
  }

  function handleDeletePlaylist(){
    let tempPlaylistName = currentPlaylist;
    let tempPlaylistList = [...selectPlaylist];
    for(let i=0; i<tempPlaylistList.length; i++){
      if(tempPlaylistList[i].playlistName ===  tempPlaylistName){
        tempPlaylistList.splice(i, 1);
      }
    }
    setSelectPlaylist(tempPlaylistList);
    setCurrentPlaylist('');
    setPlaylistSongs([]);
    setCreatePlaylistSearchBarValue('');
    setSelectPlaylistSearchBarValue('');
  }

  function handleSendPlaylistToSpotify(event){
    event.preventDefault();
    setSpotifyURIs([]);
    let URIs = [];
    let tempPlaylistName = '';
    tempPlaylistName = currentPlaylist;
    for(let i=0; i<selectPlaylist.length; i++){
      if(selectPlaylist[i].playlistName === tempPlaylistName){
        for(let j = 0; j<selectPlaylist[i].songs.length; j++){
          URIs.push(selectPlaylist[i].songs[j].id);
        }
      break;
      }
    }
    setSpotifyURIs(URIs)
  }

  function switchToUpdatePlaylistName(event){
    event.preventDefault();
    setAppMode('Update Playlist Name');
  }

  function handleChangePlaylistName(event){
    event.preventDefault();
    let tempPlaylistList = [...selectPlaylist];
    if(currentPlaylist !== ''){
      const index = tempPlaylistList.findIndex(playlist => playlist.playlistName === currentPlaylist);
      if(index !== -1){
        tempPlaylistList[index].playlistName = playlistNameChangeSearchBarValue;
      }

      setSelectPlaylist(tempPlaylistList);
    }
    if(appMode === 'Update Playlist Name'){
    }
    else{setAppMode("Build Playlist")}
  }

  function handleChangeToViewPlaylistsMode(event){
    event.preventDefault();
    setAppMode('View Playlists');
  }

  function handleChangeToHomeMode(event){
    event.preventDefault();
    setAppMode('Intro');
    setSearchBarValue('');
    setPlaylistSearchBarValue('');
    setFilteredSongs([]);
    setPlaylistSongs([]);
    setFilteredPlaylistSongs([]);
    setSelectPlaylistSearchBarValue('');
    setSelectPlaylist([]);
    setCreatePlaylistSearchBarValue('');
    setCurrentPlaylist('');
  }

  function handleChangeToUpdatePlaylistNameMode(event){
    event.preventDefault();
    setAppMode('Update Playlist Name');
  }

  function handleChangeToBuildPlaylistMode(event){
    event.preventDefault();
    setAppMode('Build Playlist');
  }

  function handleChangeToPlaylistFilterMode(event){
    event.preventDefault();
    setAppMode('Playlist Filter');
  }

  function handleChangeToSpotifyMode(event){
    event.preventDefault();
    setAppMode('Spotify');
  }

  if(appMode === 'Intro'){
    JsxReturn = (
      <div className="App">
        <Header
          handleOpenNavigationMenu={handleOpenNavigationMenu}
          handleCloseNavigationMenu={handleCloseNavigationMenu}
          handleChangeToViewPlaylistsMode={handleChangeToViewPlaylistsMode}
          handleChangeToHomeMode={handleChangeToHomeMode}
          handleChangeToUpdatePlaylistNameMode={handleChangeToUpdatePlaylistNameMode}
          handleChangeToBuildPlaylistMode={handleChangeToBuildPlaylistMode}
          handleChangeToPlaylistFilterMode={handleChangeToPlaylistFilterMode}
          handleChangeToSpotifyMode={handleChangeToSpotifyMode}
        />
        <Main
          onChange={handleSearchBarChange}
          SearchBarValue={searchBarValue}
          onClick={filterSongs}/>
        <Footer />
      </div>
    )
  }

  else if(appMode === "Build Playlist"){
    JsxReturn = (
      <div className="App">
        <Header 
          handleOpenNavigationMenu={handleOpenNavigationMenu}
          handleCloseNavigationMenu={handleCloseNavigationMenu}
          handleChangeToViewPlaylistsMode={handleChangeToViewPlaylistsMode}
          handleChangeToHomeMode={handleChangeToHomeMode}
          handleChangeToUpdatePlaylistNameMode={handleChangeToUpdatePlaylistNameMode}
          handleChangeToBuildPlaylistMode={handleChangeToBuildPlaylistMode}
          handleChangeToPlaylistFilterMode={handleChangeToPlaylistFilterMode}
          handleChangeToSpotifyMode={handleChangeToSpotifyMode}
        />
        <div className='Split-screen'>
          <Main 
            onChange={handleSearchBarChange}
            SearchBarValue={searchBarValue}
            filteredSongsProp={filteredSongs}
            onClick={filterSongs}
            addSongToPlaylist={addSongToPlaylist}
            songSearch={true}
          />
          <Playlist
            deleteSongFromPlaylist={deleteSongFromPlaylist}
            playlistSongs={playlistSongs}
            playlistSearchBarValue={playlistSearchBarValue}
            onChange={handlePlaylistSearchBarChange}
            filterPlaylistSongs={filterPlaylistSongs}
            filteredPlaylistSongs={filteredPlaylistSongs}
            appMode={appMode}
            selectPlaylistSearchBarValue={selectPlaylistSearchBarValue}
            onSelectPlaylistChange={handleSelectPlaylistSearchBarChange}
            selectPlaylist={selectPlaylist}
            onCreatePlaylistChange={handleCreatePlaylistSearchBarChange}
            createPlaylistSearchBarValue={createPlaylistSearchBarValue}
            onCreatePlaylistClick={createPlaylist}
            currentPlaylist={currentPlaylist}
            handleSelectPlaylist={handleSelectPlaylist}
            onSavePlaylistClick={handleSavePlaylist}
            onDeletePlaylistClick={handleDeletePlaylist}
            handleChangePlaylistName={handleChangePlaylistName}
            switchToUpdatePlaylistName={switchToUpdatePlaylistName}
            handleSendPlaylistToSpotify={handleSendPlaylistToSpotify}
          />
        </div>
        <Footer />
      </div>
    )
  }

  else if(appMode === 'Playlist Filter'){
    JsxReturn = (
      <div className='App'>
        <Header 
          handleOpenNavigationMenu={handleOpenNavigationMenu}
          handleCloseNavigationMenu={handleCloseNavigationMenu}
          handleChangeToViewPlaylistsMode={handleChangeToViewPlaylistsMode}
          handleChangeToHomeMode={handleChangeToHomeMode}
          handleChangeToUpdatePlaylistNameMode={handleChangeToUpdatePlaylistNameMode}
          handleChangeToBuildPlaylistMode={handleChangeToBuildPlaylistMode}
          handleChangeToPlaylistFilterMode={handleChangeToPlaylistFilterMode}
          handleChangeToSpotifyMode={handleChangeToSpotifyMode}
        />
        <div className='Split-screen'>
          <Main
            onChange={handleSearchBarChange}
            SearchBarValue={searchBarValue}
            filteredSongsProp={filteredSongs}
            onClick={filterSongs}
            addSongToPlaylist={addSongToPlaylist}
            songSearch={true}
          />
          <Playlist
            playlist={playlistSongs}
            deleteSongFromPlaylist={deleteSongFromPlaylist}
            playlistSearchBarValue={playlistSearchBarValue}
            onChange={handlePlaylistSearchBarChange}
            filterPlaylistSongs={filterPlaylistSongs}
            filteredPlaylistSongs={filteredPlaylistSongs}
            appMode={appMode}
            selectPlaylistSearchBarValue={selectPlaylistSearchBarValue}
            onSelectPlaylistChange={handleSelectPlaylistSearchBarChange}
            selectPlaylist={selectPlaylist}
            onCreatePlaylistChange={handleCreatePlaylistSearchBarChange}
            createPlaylistSearchBarValue={createPlaylistSearchBarValue}
            onCreatePlaylistClick={createPlaylist}
            currentPlaylist={currentPlaylist}
            handleSelectPlaylist={handleSelectPlaylist}
            onSavePlaylistClick={handleSavePlaylist}
            onDeletePlaylistClick={handleDeletePlaylist}
            handleSendPlaylistToSpotify={handleSendPlaylistToSpotify}

          />
        </div>
        <Footer />
      </div>
      

    )
  }
  else if(appMode === 'Update Playlist Name'){
    JsxReturn = (
      <div className='App'>
        <Header
          handleOpenNavigationMenu={handleOpenNavigationMenu}
          handleCloseNavigationMenu={handleCloseNavigationMenu}
          handleChangeToViewPlaylistsMode={handleChangeToViewPlaylistsMode}
          handleChangeToHomeMode={handleChangeToHomeMode}
          handleChangeToUpdatePlaylistNameMode={handleChangeToUpdatePlaylistNameMode}
          handleChangeToBuildPlaylistMode={handleChangeToBuildPlaylistMode}
          handleChangeToPlaylistFilterMode={handleChangeToPlaylistFilterMode}
          handleChangeToSpotifyMode={handleChangeToSpotifyMode}
        />
        <UpdatePlaylistName
          handleSelectPlaylist={handleSelectPlaylist}
          handleSelectPlaylistSearchBarChange={handleSelectPlaylistSearchBarChange}
          selectPlaylistSearchBarValue={selectPlaylistSearchBarValue}
          currentPlaylist={currentPlaylist}
          handleChangePlaylistName={handleChangePlaylistName}
          playlistNameChangeSearchBarValue={playlistNameChangeSearchBarValue}
          handlePlaylistNameChangeSearchBarValueChange={handlePlaylistNameChangeSearchBarValueChange}
          updatePlaylistNameSelectPlaylistSearchBarValue={updatePlaylistNameSelectPlaylistSearchBarValue}
          handleUpdatePlaylistNameSelectPlaylistSearchBarChange={handleUpdatePlaylistNameSelectPlaylistSearchBarChange}
          handleUpdatePlaylistNameSelectPlaylist={handleUpdatePlaylistNameSelectPlaylist}
          

        />
        <Footer />
      </div>
    )
  
  }

  else if(appMode === 'View Playlists'){
    JsxReturn = (
      <div className='App'>
        <Header
          handleOpenNavigationMenu={handleOpenNavigationMenu}
          handleCloseNavigationMenu={handleCloseNavigationMenu}
          handleChangeToViewPlaylistsMode={handleChangeToViewPlaylistsMode}
          handleChangeToHomeMode={handleChangeToHomeMode}
          handleChangeToUpdatePlaylistNameMode={handleChangeToUpdatePlaylistNameMode}
          handleChangeToBuildPlaylistMode={handleChangeToBuildPlaylistMode}
          handleChangeToPlaylistFilterMode={handleChangeToPlaylistFilterMode}
          handleChangeToSpotifyMode={handleChangeToSpotifyMode}
        />
        <Playlists 
          selectPlaylist = {selectPlaylist}
        /> 
        <Footer />
      </div>
    )
  
  }

  else if(appMode === 'Spotify'){
    JsxReturn = (
      <div className='App'>
        <Header
          handleOpenNavigationMenu={handleOpenNavigationMenu}
          handleCloseNavigationMenu={handleCloseNavigationMenu}
          handleChangeToViewPlaylistsMode={handleChangeToViewPlaylistsMode}
          handleChangeToHomeMode={handleChangeToHomeMode}
          handleChangeToUpdatePlaylistNameMode={handleChangeToUpdatePlaylistNameMode}
          handleChangeToBuildPlaylistMode={handleChangeToBuildPlaylistMode}
          handleChangeToPlaylistFilterMode={handleChangeToPlaylistFilterMode}
          handleChangeToSpotifyMode={handleChangeToSpotifyMode}
        />
        <Spotify
          spotifyURIs={spotifyURIs}
        />
        <Footer />
      </div>
    )

  }

  return JsxReturn;
}

export default App;