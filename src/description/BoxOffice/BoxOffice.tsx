import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getBoxOffice } from "../../redux/description-selected";
import {  thunkBoxOffice } from "../../redux/description-reducer";


export const BoxOffice = ()=>{
    const {id} = useParams()
    const boxOffice = useSelector(getBoxOffice)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(thunkBoxOffice(id))
    },[id])

    return(
        <>
            {boxOffice.filter(budget=>budget.type === 'BUDGET')
                .map(p=>{
                    return <tr>
                        <td>Бюджет:</td>
                        <td> {p.amount} $</td>
                    </tr>
                })}
            {boxOffice.filter(world=>world.type === 'WORLD')
                .map(p=>{
                    return <tr>
                        <td>Світові збори:</td>
                        <td> {p.amount} $</td>
                    </tr>
                })}


        </>
    )
}