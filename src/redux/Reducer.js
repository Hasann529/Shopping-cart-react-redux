import { combineReducers } from "redux";
import productReducer from "./productReducer";



export const Reducer = combineReducers({
        products : productReducer
})