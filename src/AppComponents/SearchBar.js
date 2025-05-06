import React from 'react'

function SearchBar(props){
    return(
        <form className='searchBarForm'>
            <div>
                <label>Song Search: </label>
                <input onChange={props.onChange}></input>
                <p>{props.SearchBarValue}</p>
            </div>
            <button className='searchButton' onClick={props.onClick}>Search</button>
        </form>
    )
}

export default SearchBar;