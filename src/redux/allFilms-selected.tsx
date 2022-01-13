import {AppStateType} from "./store";

export const getAllFilms=(state:AppStateType)=>{
    return state.pageAllFilms.allFilms
}
export const getDetails=(state:AppStateType)=>{
    return state.pageAllFilms.details
}
export const getTotalPages=(state:AppStateType)=>{
    return state.pageAllFilms.totalPages
}
export const getTotalCount=(state:AppStateType)=>{
    return state.pageAllFilms.totalCount
}
export const getCurrentPage=(state:AppStateType)=>{
    return state.pageAllFilms.currentPage
}
export const getIsFetching=(state:AppStateType)=>{
    return state.pageAllFilms.isFetching
}
export const getFilter=(state:AppStateType)=>{
    return state.pageAllFilms.filter
}
