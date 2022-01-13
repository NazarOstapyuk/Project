import preloader from "../image/Spin-1s-200px.svg";
import React from "react";
import stylePreloader from './preloader.module.css'
const Preloader= ()=>{
    return(
        <div className={stylePreloader.loader}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader