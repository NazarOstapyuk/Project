
import { combineReducers, createStore } from "redux";

import allFilmsReducer from "./allFilms-reducer";


let reducers = combineReducers({
    pageAllFilms: allFilmsReducer,
})


let store = createStore(reducers)
export default store