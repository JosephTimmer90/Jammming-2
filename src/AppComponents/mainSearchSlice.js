import {createSlice} from '@reduxjs/toolkit';

const mainSearch = {
    name: 'mainSearch',
    initialState: [],
    reducers: {
        updateSearchBar: (state, action) => {
            return action.payload;
        }
    }
}

export const mainSearchSlice = createSlice(mainSearch);

export const {updateSearchBar} = mainSearchSlice.actions;

export default mainSearchSlice.reducer;