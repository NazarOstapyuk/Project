import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styleProfile from './allFilmsProfile.module.css'
import Preloader from "../preloader/Preloader";
import { thunkDetails } from "../redux/allFilms-reducer";
import {getDetails, getIsFetching} from "../redux/allFilms-selected";
import { Description } from "../description/Description";

import { BoxOffice } from "../description/BoxOffice/BoxOffice";






const AllFilmsProfile = ()=>{
    const {id} = useParams();
    const details = useSelector (getDetails);
    const dispatch = useDispatch();
    const isFetching = useSelector(getIsFetching)
    useEffect(()=>{
        dispatch(thunkDetails(id))

    },[id]);

    if (isFetching){
        return <Preloader/>
    }
    return(
        <div >
            <div className={styleProfile.main}>
                <div>
                    <h1>{details.nameRu !=null ?
                        details.nameRu : details.nameOriginal}</h1>
                </div>


                <div className={styleProfile.display}>
                    <div >
                        <img src={details.posterUrlPreview} alt='' className={styleProfile.img}/>
                    </div>
                    <div className={styleProfile.table}>
                        <table>
                            <tbody>
                            <tr>
                                <td>Рейтинг:</td>
                                <td> Кінопошук: {details.ratingKinopoisk} ({details.ratingKinopoiskVoteCount})</td>
                            </tr>
                            {details.slogan ? <tr>
                                <td>Слоган:</td>
                                <td>{details.slogan}</td>
                            </tr>:null}

                            <tr>
                                <td>Тривалість:</td>
                                <td>{details.filmLength} хв.</td>
                            </tr>
                            <tr>
                                <td>жанр:</td>
                                <td >{details && details.genres && details.genres.map(genre=> {
                                    return  <span  className={styleProfile.td} >{genre.genre}</span>
                                })}</td>
                            </tr>
                            <tr >
                                <td >Год:</td>
                                <td>{details.year}</td>
                            </tr>

                            <tr >
                                <td className={styleProfile.i}>Страна: </td>
                                <td>
                                    {details && details.countries && details.countries.map(country=> {
                                            return <span key={details.filmId} >{country.country}</span>
                                        }
                                    )}
                                </td>
                            </tr>
                            <BoxOffice/>


                            </tbody>
                        </table>

                    </div>

                </div>

                <div>
                    <div>
                       <h2>Про що фільм "{details.nameRu !=null ? details.nameRu : details.nameOriginal}"</h2>
                    </div>
                   <div>
                       <p className={styleProfile.description}>{details.description}</p>
                   </div>
                </div>
                <Description/>
            </div>
        </div>
    )
}
export default AllFilmsProfile


