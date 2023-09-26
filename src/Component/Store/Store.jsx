import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "../studentSlice"


export default configureStore ({
    reducer:{
        student:StudentReducer
    }
})