import { createSlice } from "@reduxjs/toolkit";
import { StatusBar } from "react-native";

const ScreenSlice = createSlice({
    name: "ScreenSlice",
    initialState: {
        StatusBarHeight: StatusBar.currentHeight,
    },
});
export default ScreenSlice.reducer;
