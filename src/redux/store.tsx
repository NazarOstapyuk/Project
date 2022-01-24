
import {applyMiddleware, combineReducers, createStore} from "redux";

import allFilmsReducer from "./allFilms-reducer";
import descriptionReducer from "./description-reducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
    pageAllFilms: allFilmsReducer,
    pageDescription:descriptionReducer
})

type ReducerType = typeof reducers;
export type AppStateType = ReturnType<ReducerType>
let store = createStore(reducers,applyMiddleware(thunk))
export default store