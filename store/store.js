import { configureStore } from "@reduxjs/toolkit";
import ScreenSlice from "./Slices/ScreenSlice";
import PlaybarSlice from "./Slices/PlaybarSlice";
import MusicInfoSlice from "./Slices/MusicInfoSlice";

const sotre = configureStore({
    reducer: {
        ScreenSlice,
        PlaybarSlice,
        MusicInfoSlice,
    },
});
export default sotre;
