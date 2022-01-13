import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styleFilms from "./allFilms.module.css";


import {getAllFilms, getCurrentPage, getIsFetching, getTotalCount, getTotalPages} from "../redux/allFilms-selected";
import {setAllFilms, setCurrentPages, setIsFetching, setTotalCount} from "../redux/allFilms-reducer";
import Preloader from "../preloader/Preloader";
import Pagination from "../Pagination/Pagination";
import { filmsAPI } from "../api/Api";




const AllFilms = ()=> {
    const url = useLocation()
    const allFilms = useSelector(getAllFilms)
    const currentPage = useSelector(getCurrentPage)
    const totalPages = useSelector(getTotalPages)
    const totalCount = useSelector(getTotalCount)
    const isFetching = useSelector(getIsFetching)
    const dispatch = useDispatch()
    const filmsPath = 'TV_SHOW';
    const serialPath = 'FILM';
    const  path = url.pathname === '/FILM' ? serialPath : filmsPath

    useEffect(() => {
        dispatch(setIsFetching(true))
        filmsAPI.getFilms(path).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setAllFilms(data.items))
            dispatch(setTotalCount(data.total))

        })
    }, [path])


    const onPageChanged = (pageNumber)=>{
        dispatch(setIsFetching(true))
        dispatch(setCurrentPages(pageNumber));
        filmsAPI.getPaginatorFilms(path,pageNumber).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setAllFilms(data.items))
        })
    };
    if (isFetching){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <Pagination currentPage={currentPage} pageSize={totalPages} totalCounter={totalCount}
                            onPageChanged={onPageChanged} />
            </div>
            <div className={styleFilms.display}>
                {allFilms.map(f=>
                    <div key={f.kinopoiskId} >
                        <div>

                            <Link to={`/${path}/${f.kinopoiskId}`} >
                                <img  src={f.posterUrl} alt="" className={styleFilms.img} />
                            </Link>
                        </div>

                    </div>)
                }

            </div>
        </div>
    )
}


export default AllFilms