import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filmsAPI } from "../api/Api";
import {allFilmsType, setFilter, setIsFetching} from "../redux/allFilms-reducer";
import {getFilter, getIsFetching} from "../redux/allFilms-selected";
import styleFilter from './filter.module.css'
import Preloader from "../preloader/Preloader";


export const Search=()=> {
    const filter = useSelector(getFilter)
    const isFetching = useSelector(getIsFetching);
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
        filmsAPI.getFilterFilms(searchTerm).then(res => {
            dispatch(setFilter(res.data.films));
        })

    },[searchTerm]);



    return (
        <div >
            <form >
                <input type="search" placeholder='search' onChange={(e)=>{
                    setSearchTerm(e.currentTarget.value)
                }} value={searchTerm} className={styleFilter.input}/>


            </form>
            <div className={styleFilter.wrapper} >
                <div  className={styleFilter.display}  onClick={()=>{setSearchTerm('')}}>
                    {filter.slice(0,5).map((f:allFilmsType)=>
                        <div className={styleFilter.container}>
                        <Link to={`/TV_SHOW/${f.filmId}`}>
                            <img src={f.posterUrl} alt="" className={styleFilter.img}/>
                        </Link>
                            <div className={styleFilter.text}>
                                {f.nameRu !=null ? f.nameRu : f.nameOriginal}
                            </div>
                        </div>
                    )}

                </div>
            </div>


        </div>
    );
}




