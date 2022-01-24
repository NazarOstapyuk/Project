import React, {useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {  getSimilars } from "../../redux/description-selected";
import { thunkSimilars } from "../../redux/description-reducer";
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
           <h2>Схожі фільми:</h2>
            {similars && similars.items && similars.items.map(f=> {
                return <NavLink to={`/FILM/${f.filmId}`}>
                    <img src={f.posterUrlPreview} alt="" className={styleSimilars.img}/>
                </NavLink>


            })}
        </div>
    )
}