import { createSlice } from "@reduxjs/toolkit";

const MusicInfoSlice = createSlice({
    name: "MusicInfoSlice",
    initialState: {
        musicTitle: null,
        musicUrl: null,
        musicCover: null,
        duration: null,
        musicHeaders: null,
        musicCid: null,
    },
    reducers: {
        setMusicTitle: (state, action) => {
            state.musicTitle = action.payload;
        },
        setMusicUrl: (state, action) => {
            state.musicUrl = action.payload;
        },
        setMusicCover: (state, action) => {
            state.musicCover = action.payload;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
        setMusicHeaders: (state, action) => {
            state.musicHeaders = action.payload;
        },
        setMusicCid: (state, action) => {
            state.musicCid = action.payload;
        },
    },
});

export const {
    setMusicTitle,
    setMusicUrl,
    setDuration,
    setMusicCover,
    setMusicHeaders,
    setMusicCid,
} = MusicInfoSlice.actions;
export default MusicInfoSlice.reducer;
