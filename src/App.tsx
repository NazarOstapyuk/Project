import {Routes, Route} from 'react-router-dom'

import styleApp from './app.module.css'
import React from "react";
import AllFilms from "./AllFilms/AllFilms";
import AllFilmsProfile from "./AllFilms/AllFilmsProfile";
import SearchType from "./filter/Filter";
import Navbar from "./Navbar/Navbar";

const App = ()=>{
    return(
        <div className={styleApp.wrapper}>
            <Navbar/>
            <div className={styleApp.wrapperContent}>
                <Routes>
                    <Route path ='FILM' element={<AllFilms/>}/>
                    <Route path ='TV_SHOW' element={<AllFilms/>}/>
                    <Route path ='FILM/:id' element={<AllFilmsProfile/>}/>
                    <Route path ='TV_SHOW/:id' element={<AllFilmsProfile/>}/>
                    <Route path ='/filter' element={<SearchType/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
