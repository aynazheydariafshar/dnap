import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  rtlLayout: false,
  navType: "light",
};

// ==============================|| SLICE - MENU ||============================== //

const rtl = createSlice({
  name: "rtl",
  initialState,
  reducers: {
    onChangeRtl: (state) => {
      state.rtlLayout = !state.rtlLayout;
    },
    onChangeTheme: (state, action) => {
      state.navType = action.payload;
    },
  },
});

export const { onChangeRtl, onChangeTheme } = rtl.actions;
export default rtl.reducer;
