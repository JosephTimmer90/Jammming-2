import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SubMainTest from './SubMainTest';

function Main(props){
    return(
        <main className='side-by-side'>
          <SearchBar onChange={props.onChange} SearchBarValue={props.SearchBarValue} onClick={props.onClick} />
          <SearchResults FilteredSongsProp={props.FilteredSongsProp} />
          <p>Test Main: {props.Variable}</p>
          <p>Test Main Array: {props.Array[0]}</p>
          <p>Test Main Object: {props.Object.first}</p>
          <p>Test Main Array of Objects: {props.arrayOfObjects[2].name3}</p>
          <p>Test Main Array of Objects: {props.arrayOfObjects[2].value}</p>
          <SubMainTest arrayOfObjects={props.arrayOfObjects} Variable={props.Variable} Array={props.Array} Object={props.Object} />
          
          
        </main>
    )
}

export default Main;