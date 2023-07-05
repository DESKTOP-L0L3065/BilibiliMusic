import { configureStore } from "@reduxjs/toolkit";
import ScreenSlice from "./Slices/ScreenSlice";
import PlaybarSlice from "./Slices/PlaybarSlice";
const sotre = configureStore({
    reducer: {
        ScreenSlice,
        PlaybarSlice,
    },
});
export default sotre;
