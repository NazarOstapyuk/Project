import {descriptionAPI} from "../api/Api";
import {Dispatch} from "redux";
const SET_BOX_OFFICE = 'SET-BOX-OFFICE'
const SIMILARS = 'SIMILARS'

export type boxOfficeType={
    type:string |any
    amount:number
}
export type similarsType={
    filmId:number
    posterUrlPreview:string
}



export let initialState = {
    boxOffice:[] as Array<boxOfficeType>,
    similars:[] as Array<similarsType>,


}
type InitialState = typeof initialState

const descriptionReducer=(state =initialState,action:ActionType):InitialState=>{
    switch (action.type) {

        case SET_BOX_OFFICE:{
            return {...state,boxOffice: action.money}
        }
        case SIMILARS:{
            return {...state,similars: action.similars}
        }

        default:
            return state
    }
}
type ActionType = SetFactsType |SimilarsType

type SetFactsType={
    type: typeof SET_BOX_OFFICE,
    money:Array<boxOfficeType>
}
export const setBoxOffice =(money:Array<boxOfficeType>):SetFactsType=>({type:SET_BOX_OFFICE,money})

export const thunkBoxOffice =(id:number)=>(dispatch:Dispatch<ActionType>)=>{
descriptionAPI.getBoxOffice(id).then(data=>{
    dispatch(setBoxOffice(data.data.items))
})}

type SimilarsType={
    type: typeof SIMILARS,
    similars:Array<similarsType>
}
export const setSimilars =(similars:Array<similarsType>):SimilarsType=>({type:SIMILARS,similars})

export const thunkSimilars =(id:any)=>(dispatch:Dispatch<ActionType>)=>{
    descriptionAPI.getSimilars(id).then(data=>{
        dispatch(setSimilars(data.data))
    })
}




export default descriptionReducer