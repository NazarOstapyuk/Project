
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styleFilms from "../AllFilms/allFilms.module.css";
import { filmsAPI } from "../api/Api";
import Preloader from "../preloader/Preloader";
import {setFilter, setIsFetching} from "../redux/allFilms-reducer";
import {getFilter, getIsFetching} from "../redux/allFilms-selected";





export const SearchNorm = (props)=>{
    const [tempSearch,setTempSearch] = useState('')

    useEffect(()=>{
        setTempSearch(props.value)
    },[props.value])


    return (
        <div className={styleFilms.index}>
            <input type="text" placeholder='search' onChange={(e)=>{
                setTempSearch(e.currentTarget.value)
            }} value={tempSearch}/>
            <button onClick={()=>{
                props.onSubmit(tempSearch)
            }}> find </button>


        </div>
    )
};
function SearchType() {
    const filter = useSelector(getFilter)
    const isFetching = useSelector(getIsFetching);
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState("home");


    useEffect(()=>{
        dispatch(setIsFetching(true))
     filmsAPI.getFilterFilms(searchTerm).then(res => {
            dispatch(setIsFetching(false))
            dispatch(setFilter(res.data.films));
        })

    },[searchTerm]);


    if (isFetching){
        return <Preloader/>
    }
    return (
        <div>
            <SearchNorm value={searchTerm} onSubmit={(value)=>{setSearchTerm(value)}}/>
            <div className={styleFilms.display}>
                {filter.map(f=>
                    <div key={f.filmId} >
                        <div>
                            <Link to={`/TV_SHOW/${f.filmId}`}>
                                <img src={f.posterUrl} alt="" className={styleFilms.img}/>
                            </Link>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
}
export default SearchType