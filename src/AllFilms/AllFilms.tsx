import React, { useEffect,FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styleFilms from "./allFilms.module.css";


import {getAllFilms, getCurrentPage, getIsFetching, getTotalCount, getTotalPages} from "../redux/allFilms-selected";
import {
    allFilmsType,
    setAllFilms,
    setCurrentPages, setIsFetching,
    thunkAllFilms
} from "../redux/allFilms-reducer";
import Preloader from "../preloader/Preloader";
import Pagination from "../Pagination/Pagination";
import { filmsAPI } from "../api/Api";
import classNames from "classnames";



const AllFilms = ()=> {
    const url = useLocation()
    const allFilms = useSelector(getAllFilms)
    const currentPage = useSelector(getCurrentPage)
    const totalPages = useSelector(getTotalPages)
    const totalCount = useSelector(getTotalCount)
    const isFetching = useSelector(getIsFetching)
    const dispatch = useDispatch()
    const filmsPath = 'film';
    const serialPath = 'tv_show';

    const  path = url.pathname === '/film' ?  filmsPath: serialPath

    useEffect(() => {
      dispatch(thunkAllFilms(path))
        },[path])

    const onPageChanged = (pageNumber:number)=>{

        dispatch(setCurrentPages(pageNumber));
        filmsAPI.getPaginatorFilms(path,pageNumber).then(data => {
            dispatch(setAllFilms(data.items))
        })
    };
    if (isFetching){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <Pagination  currentPage={currentPage} pageSize={totalPages} totalCounter={totalCount}
                            onPageChanged={onPageChanged} portionSize = '10'/>
            </div>
            <div className={styleFilms.display}>
                {allFilms.map((f: allFilmsType )=>
                    <div key={f.filmId} >
                        <div className={styleFilms.hover}>
                            <div className={classNames({[styleFilms.green]:f.ratingKinopoisk >=9,[styleFilms.orange]:f.ratingKinopoisk >5,
                                [styleFilms.red]:f.ratingKinopoisk <=4 },styleFilms.raiting)}>
                           <span>{ f.ratingKinopoisk}</span>
                            </div>
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