import { configureStore } from "@reduxjs/toolkit";
import ScreenSlice from "./Slices/ScreenSlice";
import PlaybarSlice from "./Slices/PlaybarSlice";
import MusicInfoSlice from "./Slices/MusicInfoSlice";
import AlbumListSlice from "./Slices/AlbumListSlice";

const sotre = configureStore({
    reducer: {
        ScreenSlice,
        PlaybarSlice,
        MusicInfoSlice,
        AlbumListSlice,
    },
});
export default sotre;
