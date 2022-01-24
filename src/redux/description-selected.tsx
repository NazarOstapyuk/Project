import {AppStateType} from "./store";

export const getBoxOffice=(state:AppStateType)=>{
    return state.pageDescription.boxOffice
}
export const getSimilars=(state:AppStateType)=>{
    return state.pageDescription.similars
}
