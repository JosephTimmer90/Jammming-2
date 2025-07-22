import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function Main(props){
    return(
        <main className='Main-Search-Results'>
          {props.songSearch ? <h2>Song Search</h2> : <p></p>}
          <SearchBar
            onChange={props.onChange}
            SearchBarValue={props.SearchBarValue}
            onClick={props.onClick}
          />
          <SearchResults
            filteredSongsProp={props.filteredSongsProp}
            addSongToPlaylist={props.addSongToPlaylist}
          />
          
          
        </main>
    )
}

export default Main;
