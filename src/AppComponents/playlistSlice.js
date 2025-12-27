import {createSlice} from '@reduxjs/toolkit';

const playlist = {
    name: 'playlist',
    initialState: [],
    reducers: {
        updatePlaylistSearchBar: (state, action) => {
            return action.payload;
        },

        addPlaylistSong: (state, action) => {
            return [...state, action.payload]
        },

        removePlaylistSong: (state, action) => {
            return state.filter(song => song.id !==action.payload.id)
        },

        updateselectPlaylistSearchBarValue: (state, action) => {
            return action.payload;
        },

        addPlaylistToselectPlaylist: (state, action) => {
            return [...state, action.payload];
        },

        removePlaylistFromselectPlaylist: (state, action) => {
            return state.filter(playlist=>playlist.playlistName !== action.payload.playlistName)
        },

        updatecreatePlaylistSearchBarValue: (state, action) => {
            return action.payload;
        },

        updatecurrentPlaylist: (state, action) => {
            return action.payload;
        },
        
        updateplaylistNameChangeSearchBarValue: (state, action) => {
            return action.payload;
        },

        updateupdatePlaylistNameSelectPlaylistSearchBarValue: (state, action) => {
            return action.payload;
        }
    }
}

export const playlistSlice = createSlice(playlist);

export const {updatePlaylistSearchBar, addPlaylistSong, removePlaylistSong, updateselectPlaylistSearchBarValue, addPlaylistToselectPlaylist, 
    removePlaylistFromselectPlaylist, updatecreatePlaylistSearchBarValue, updatecurrentPlaylist, updateplaylistNameChangeSearchBarValue, 
    updateupdatePlaylistNameSelectPlaylistSearchBarValue} = playlistSlice.actions;
export default playlistSlice.reducer;