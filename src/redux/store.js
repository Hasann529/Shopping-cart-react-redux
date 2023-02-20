import { legacy_createStore } from "redux";
import { Reducer } from "./Reducer";


const store = legacy_createStore(Reducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store