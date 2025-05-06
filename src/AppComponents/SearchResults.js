import React from 'react';

function SearchResults(props){
    function formatResults(element, index){
        return (<div>
                    <h3>Song {index+1}: {element.songName}</h3>
                    <p>Artist: {element.artist}</p>
                    <p>Album: {element.album}</p>
                    <button>Add to playlist!</button>
                </div>)
    }

    return(
        <div>                                                               
            <p>Test Search Results: {props.FilteredSongsProp}</p>
        </div>
    )
}

export default SearchResults;