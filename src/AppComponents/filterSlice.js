import {createSlice} from '@reduxjs/toolkit';

const filter = {
    name: filter,
    initialState: [],
    reducers: {
        updatefilteredSongs: (state, action) =>{
            return action.payload;
        },

        updatefilteredPlaylistSongs: (state, action) => {
            return action.payload;
        }
    }
}

export const filterSlice = createSlice(filter);

export const {updatefilteredSongs, updatefilteredPlaylistSongs} = filterSlice.actions;