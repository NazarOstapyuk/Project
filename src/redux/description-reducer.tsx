import {descriptionAPI} from "../api/Api";
import {Dispatch} from "redux";
const SET_BOX_OFFICE = 'SET-BOX-OFFICE'
const SIMILARS = 'SIMILARS'


export type boxOfficeType={
    type:string
    amount:number
}
export  type similarsType={
    filmId:number
    posterUrlPreview:string
}





export let initialState = {
    boxOffice:[] as Array<boxOfficeType>,
    similars:[] as any,


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

// export const thunkBoxOffice =(id:any)=>(dispatch:Dispatch<ActionType>)=>{
// descriptionAPI.getBoxOffice(id).then(data=>{
//     dispatch(setBoxOffice(data.data.items))
// })}

export const thunkBoxOffice =(id:any)=>async (dispatch:Dispatch<ActionType>)=>{

    try {
        const res = await descriptionAPI.getBoxOffice(id)
        const url =res.data.items

        dispatch(setBoxOffice(url))
    }
    catch (e) {
        console.log(e)
    }

    }

type SimilarsType={
    type: typeof SIMILARS,
    similars:Array<similarsType>
}
export const setSimilars =(similars:Array<similarsType>):SimilarsType=>({type:SIMILARS,similars})

// export const thunkSimilars =(id:any)=>(dispatch:Dispatch<ActionType>)=>{
//     descriptionAPI.getSimilars(id).then(data=>{
//         dispatch(setSimilars(data.data))
//     })
// }

export const thunkSimilars =(id:any)=> async (dispatch:Dispatch<ActionType>)=>{
    try {
        const res = await descriptionAPI.getSimilars(id)
        const url = res.data
        dispatch(setSimilars(url))
    }
    catch (e) {
        console.log(e)
    }


}



export default descriptionReducer