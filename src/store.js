import { configureStore } from "@reduxjs/toolkit";
import RegisterReducer from "./Redux/Registerslice";


export default configureStore({
    reducer: {
        register: RegisterReducer
    },
});