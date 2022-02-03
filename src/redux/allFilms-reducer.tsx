import {filmsAPI} from "../api/Api";
import {Dispatch} from "redux";
const SET_ALLFILMS = 'SET-ALLFILMS';
const SET_DETAILS = 'SET-DETAILS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_COUNT = 'TOTAL-COUNT';
const IS_FETCHING = 'IS_FETCHING';
const FILTER = 'FILTER';
export  type genreType ={
    genre:string
}
export type countryType={
    country:string
}
export  type allFilmsType ={
    kinopoiskId?:number
    posterUrl?:string
    filmId:number
    nameOriginal?:string
    nameRu?:string
    ratingImdb?:number
    ratingKinopoisk:number
}
export  type detailsType={
    posterUrlPreview:string
    nameOriginal?:string
    nameRu:string
    description:string
    year:number
    filmLength:number
    genres:genreType
    countries:countryType
}



export let initialState = {
    filter:[] as Array<allFilmsType>,
    allFilms:[] as Array<allFilmsType>,
    details:[] as any,
    totalPages:20,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
}
type InitialState = typeof initialState

const allFilmsReducer=(state =initialState,action:ActionsType):InitialState=>{
    switch (action.type) {
        case SET_ALLFILMS:{
            return{...state,allFilms:action.films,}
        }
        case SET_DETAILS:{
            return {...state,details: action.details}
        }
        case SET_CURRENT_PAGE:{
            return {...state,currentPage:action.currentPage }
        }
        case TOTAL_COUNT:{
            return {...state,totalCount:action.totalCount}
        }
        case IS_FETCHING:{
            return {...state,isFetching:action.isFetching}
        }
        case FILTER:{
            return {...state,filter:action.term}
        }

        default:
            return state
    }
}

type ActionsType = SetAllFilmsType | SetDetailsType | SetCurrentPagesType| SetTotalCountType | SetIsFetchingType|SetFilterType

type SetAllFilmsType ={
    type: typeof SET_ALLFILMS,
    films:Array<allFilmsType>
}
export  const setAllFilms = (films:Array<allFilmsType>):SetAllFilmsType =>({type:SET_ALLFILMS,films})

type SetDetailsType ={
    type: typeof SET_DETAILS,
    details:Array<detailsType>
}
export  const setDetails = (details:Array<detailsType>):SetDetailsType =>({type:SET_DETAILS,details})


type SetCurrentPagesType ={
    type: typeof SET_CURRENT_PAGE,
    currentPage:number
}
export const setCurrentPages =(currentPage:number):SetCurrentPagesType=>({type:SET_CURRENT_PAGE,currentPage})


type SetTotalCountType ={
    type: typeof TOTAL_COUNT,
    totalCount:number
}
export const setTotalCount = (totalCount:number):SetTotalCountType=>({type:TOTAL_COUNT,totalCount})


type SetIsFetchingType ={
    type: typeof IS_FETCHING,
    isFetching:boolean
}
export const setIsFetching = (isFetching:boolean):SetIsFetchingType=>({type:IS_FETCHING, isFetching})


type SetFilterType ={
    type: typeof FILTER,
    term:Array<allFilmsType>
}
export const setFilter = (term:Array<allFilmsType>):SetFilterType=>({type:FILTER,term})


export const thunkAllFilms =(path:string)=> async (dispatch:Dispatch<ActionsType>)=>{
    dispatch(setIsFetching(true))
    try {
        const res = await filmsAPI.getFilms(path);
        const filmsUrl = res
        dispatch(setAllFilms(filmsUrl.items))
        dispatch(setTotalCount(filmsUrl.total))

        dispatch(setIsFetching(false))
    }
    catch (e) {
        console.log(e)
    }

}

export const thunkDetails =(id:any)=>async (dispatch:Dispatch<ActionsType>)=> {
    dispatch(setIsFetching(true))
    try {
        const res = await filmsAPI.getDetailsFilms(id)
        const detailsUrl = res
        dispatch(setIsFetching(false))
        dispatch(setDetails(detailsUrl))
        dispatch(setIsFetching(false))
    }
    catch (e) {
        console.log(e)
    }

}
export default allFilmsReducer