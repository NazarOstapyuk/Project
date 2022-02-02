import {Routes, Route} from 'react-router-dom'

import styleApp from './app.module.css'
import React from "react";
import AllFilms from "./AllFilms/AllFilms";
import AllFilmsProfile from "./AllFilms/AllFilmsProfile";
import Navbar from "./Navbar/Navbar";



const App = ()=>{
    return(
        <div className={styleApp.container}>
        <div className={styleApp.navbar}>
            <Navbar/>
        </div>
            <div className={styleApp.wrapperContent}>
                <Routes>
                    <Route path ='film' element={<AllFilms/>}/>
                    <Route path ='tv_show' element={<AllFilms/>}/>
                    <Route path ='film/:id' element={<AllFilmsProfile/>}/>
                    <Route path ='tv_show/:id' element={<AllFilmsProfile/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
