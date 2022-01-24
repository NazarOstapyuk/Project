import {descriptionAPI} from "../api/Api";


const SET_BOX_OFFICE = 'SET-BOX-OFFICE'
const SIMILARS = 'SIMILARS'


export let initialState = {
    boxOffice:[] as any,
    similars:[] as any,


}
type InitialState = typeof initialState

const descriptionReducer=(state =initialState,action:any):InitialState=>{
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


type SetFactsType={
    type: typeof SET_BOX_OFFICE,
    money:any
}
export const setBoxOffice =(money:any):SetFactsType=>({type:SET_BOX_OFFICE,money})

export const thunkBoxOffice =(id:any)=>(dispatch:any)=>{
descriptionAPI.getBoxOffice(id).then(res=>{
    dispatch(setBoxOffice(res.data.items))
})}

type SimilarsType={
    type: typeof SIMILARS,
    similars:any
}
export const setSimilars =(similars:any):SimilarsType=>({type:SIMILARS,similars})

export const thunkSimilars =(id:any)=>(dispatch:any)=>{
    descriptionAPI.getSimilars(id).then(res=>{
        dispatch(setSimilars(res.data))
    })
}




export default descriptionReducer