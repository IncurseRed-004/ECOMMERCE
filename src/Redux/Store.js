import {configureStore} from "@reduxjs/toolkit" ;
import userSlice from "./userSlice";

const Store = configureStore({
    reducer:{
        userState:userSlice
    }
});

export default Store;