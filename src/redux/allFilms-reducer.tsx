
const SET_ALLFILMS = 'SET-ALLFILMS';
const SET_DETAILS = 'SET-DETAILS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_COUNT = 'TOTAL-COUNT';
const IS_FETCHING = 'IS_FETCHING';
const FILTER = 'FILTER';

// type genreType ={
//     genre:string
// }
// type countryType={
//     country:string
// }
// type allFilmsType ={
//     kinopoiskId:number
//     posterUrl:string
// }
// type detailsType={
//     posterUrlPreview:string
//     nameOriginal?:string|null
//     nameRu?:string
//     description:string
//     genres:genreType
//     year:number
//     countries:countryType
//
// }
// let initialState = {
//     filter:[] as Array<allFilmsType>,
//     allFilms:[] as Array<allFilmsType>,
//     details:[] as Array<detailsType>,
//     totalPages:20,
//     totalCount: 0,
//     currentPage: 1,
//     isFetching: false,
// }
let initialState = {
    filter:[] ,
    allFilms:[] ,
    details:[] ,
    totalPages:20,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
}
// type InitialState = typeof initialState

const allFilmsReducer=(state =initialState,action)=>{
    switch (action.type) {
        case SET_ALLFILMS:{
            return{...state,allFilms:action.films}
        }
        case SET_DETAILS:{
            return {...state,details: action.details}
        }
        case SET_CURRENT_PAGE:{
            return {...state,currentPage:action.currentPage}
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
// type SetAllFilmsType ={
//     type: typeof SET_ALLFILMS,
//     films:Array<SetAllFilmsType>
// }
export  const setAllFilms = (films) =>({type:SET_ALLFILMS,films})
// type SetDetailsType ={
//     type: typeof SET_DETAILS,
//     details:Array<SetDetailsType>
// }
export  const setDetails = (details) =>({type:SET_DETAILS,details})
//
// type SetCurrentPagesType ={
//     type: typeof SET_CURRENT_PAGE,
//     currentPage:number
// }
export const setCurrentPages =(currentPage)=>({type:SET_CURRENT_PAGE,currentPage})
// type SetTotalCountType ={
//     type: typeof TOTAL_COUNT,
//     totalCount:number
// }
export const setTotalCount = (totalCount) =>({type:TOTAL_COUNT,totalCount})
// type SetIsFetchingType ={
//     type: typeof IS_FETCHING,
//     isFetching:boolean
// }
export const setIsFetching = (isFetching)=>({type:IS_FETCHING, isFetching})
// type SetFilterType ={
//     type: typeof FILTER,
//     term:Array<SetAllFilmsType>
// }
export const setFilter = (term)=>({type:FILTER,term})



export default allFilmsReducer