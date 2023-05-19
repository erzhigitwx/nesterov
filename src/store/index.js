import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { burgerChange } from "./burgerMenu";

const rootReducer = combineReducers({
    burgerChange: burgerChange.reducer,
})
export const store = configureStore({
    reducer: rootReducer
})