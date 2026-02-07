import { configureStore } from '@reduxjs/toolkit';
import mainSearchSliceReducer from './AppComponents/mainSearchSlice';
import playlistSliceReducer from './AppComponents/playlistSlice';
import filterSliceReducer from './AppComponents/filterSlice';
import spotifySliceReducer from './AppComponents/spotifySlice';
import gameSliceReducer from './AppComponents/gameSlice';

export const store = configureStore({
    reducer: {
        mainSearch: mainSearchSliceReducer,
        playlist: playlistSliceReducer,
        filter: filterSliceReducer,
        spotify: spotifySliceReducer,
        game: gameSliceReducer
    }
});

export default store;