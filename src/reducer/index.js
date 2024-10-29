import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import filterSlice from "../slices/filterSlice";

const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    filter : filterSlice,
})

export default rootReducer