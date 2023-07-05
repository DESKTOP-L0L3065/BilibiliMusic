import { createSlice } from "@reduxjs/toolkit";

const PlaybarSlice = createSlice({
    name: "PlaybarSlice",
    initialState: {
        showPlaybar: null,
    },
    reducers: {
        setShowPlaybar(state, action) {
            state.showPlaybar = action.payload;
        },
    },
});
export const { setShowPlaybar } = PlaybarSlice.actions;
export default PlaybarSlice.reducer;
