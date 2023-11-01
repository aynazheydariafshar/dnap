import { configureStore } from "@reduxjs/toolkit";
import rtlReducer from "./slices/customize";

const store = configureStore({
  reducer: {
    rtl: rtlReducer,
  },
});
export default store;
