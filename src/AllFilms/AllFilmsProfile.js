import React, { useEffect,FC } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styleProfile from './allFilmsProfile.module.css'
import {filmsAPI} from "../api/Api";
import Preloader from "../preloader/Preloader";
import {detailsType, setDetails, setIsFetching} from "../redux/allFilms-reducer";
import {getDetails, getIsFetching} from "../redux/allFilms-selected";




const AllFilmsProfile = ()=>{
    const {films,serials} = useParams();
    const details = useSelector (getDetails);
    const dispatch = useDispatch();
    const isFetching = useSelector(getIsFetching)
    useEffect(()=>{
dispatch(setIsFetching(true))
     filmsAPI.getDetailsFilms (!films ? serials : films).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setDetails(data))
        })

    },[films,serials]);
if (isFetching){
    return <Preloader/>
}
    return(
        <div>

            <div className={styleProfile.display}>
                <div className={styleProfile.left}>
                    <img src={details.posterUrlPreview} alt='' className={styleProfile.img}/>
                </div>
                <div className={styleProfile.main}>
                    <h1>{details.nameOriginal !=null ?
                        details.nameOriginal : details.nameRu}</h1>
                    <div>
                        <p className={styleProfile.description}>{details.description}</p>
                    </div>
                </div>
                <div className={styleProfile.right}>
                    <div className={styleProfile.flex}>
                        <span className={styleProfile.basik}>жанр:</span>
                        <div>
                            {details && details.genres && details.genres.map(genre=> {
                                return  <li key={details.kinopoiskId} className={styleProfile.li}>{genre.genre}</li>
                            })}
                        </div>
                    </div>
                    <div className={styleProfile.flex}>
                        <span className={styleProfile.basik}>Год:</span>
                        <span>{details.year}</span>
                    </div>
                    <div className={styleProfile.flex}>
                        <span className={styleProfile.basik}>Страна:</span>
                        <div>{details && details.countries && details.countries.map(country=> {
                                return <span key={details.kinopoiskId} >{country.country}</span>
                            }
                        )}</div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default AllFilmsProfile