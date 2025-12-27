import { createSlice } from "@reduxjs/toolkit";

const spotify = {
    name: 'spotify',
    initialState: [],
    reducers: {

        addspotifyURI: (state, action) => {
            return [...state, action.payload]
        },

        removespotifyURI: (state, action) => {
            return state.filter(URI => URI !== action.payload)
        },

        updatesavedAccessToken: (state, action) => {
            return action.payload;
        }
    }
}

export const spotifySlice = createSlice(spotify);

export const {addspotifyURI, removespotifyURI, updatesavedAccessToken} = spotifySlice.actions;

export default spotifySlice.reducer;