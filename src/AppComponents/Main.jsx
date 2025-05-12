import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function Main(props){
    return(
        <main className='side-by-side'>
          <SearchBar onChange={props.onChange} SearchBarValue={props.SearchBarValue} onClick={props.onClick} />
          <SearchResults filteredSongsProp={props.filteredSongsProp} newSong={props.newSong} />
          
          
        </main>
    )
}

export default Main;