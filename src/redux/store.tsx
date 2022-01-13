
import { combineReducers, createStore } from "redux";

import allFilmsReducer from "./allFilms-reducer";


let reducers = combineReducers({
    pageAllFilms: allFilmsReducer,
})

type ReducerType = typeof reducers;
export type AppStateType = ReturnType<ReducerType>
let store = createStore(reducers)
export default store