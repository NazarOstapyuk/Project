import React, {useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {  getSimilars } from "../../redux/description-selected";
import { similarsType, thunkSimilars} from "../../redux/description-reducer";
import styleSimilars from './similars.module.css'




export const Similars = ()=>{
    const {id} = useParams()
    const similars = useSelector(getSimilars)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(thunkSimilars(id))
    },[id])

    return(
        <div >
            {similars && similars.items && similars.items.length >=1 ? <h2>Схожі фільми:</h2> : null}

            {similars && similars.items && similars.items.slice(0,5).map((f:similarsType)=> {
                return <NavLink to={`/FILM/${f.filmId}`}>
                    <img src={f.posterUrlPreview} alt="" className={styleSimilars.img}/>
                </NavLink>


            })}
        </div>
    )
}