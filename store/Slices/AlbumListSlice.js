import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AlbumListSlice = createSlice({
    name: "AlbumListSlice",
    initialState: {
        album: [],
    },
    reducers: {
        setState: (state, action) => {
            state.album = [...action.payload];
        },
        addAlbum: (state, action) => {
            state.album.push(action.payload);
            (async () => {
                await AsyncStorage.setItem(
                    "albumList",
                    JSON.stringify(state.album)
                );
            })();
            console.log(state.album);
        },
        removeAlbum: (state, action) => {
            state.album.splice(action.payload, 1);
            (async () => {
                await AsyncStorage.setItem(
                    "albumList",
                    JSON.stringify(state.album)
                );
            })();
        },
    },
});
export const { setState, addAlbum, removeAlbum } = AlbumListSlice.actions;
export default AlbumListSlice.reducer;
