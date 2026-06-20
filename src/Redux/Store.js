import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        userState: userSlice,
        productState: productSlice
    }
});

export default store;