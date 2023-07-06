import { createSlice } from "@reduxjs/toolkit";

const MusicInfoSlice = createSlice({
    name: "MusicInfoSlice",
    initialState: {
        musicTitle: null,
        musicUrl: null,
        musicCover: null,
        duration: null,
    },
    reducers: {
        setMusicTitle: (state, action) => {
            state.musicTitle = action.payload;
        },
        setUrl: (state, action) => {
            state.url = action.payload;
        },
    },
});

export const { setMusicTitle, setUrl } = MusicInfoSlice.actions;
export default MusicInfoSlice.reducer;
