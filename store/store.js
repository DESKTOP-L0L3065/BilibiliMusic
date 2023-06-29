import { configureStore } from "@reduxjs/toolkit";
import ScreenSlice from "./Slices/ScreenSlice";
const sotre = configureStore({
    reducer: {
        ScreenSlice,
    },
});
export default sotre
