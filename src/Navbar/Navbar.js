import React from 'react';
import { NavLink } from "react-router-dom";
import hdrezka from '../image/Sgdo_u2j.png'
import styleNavbar from './navbar.module.css'

const Navbar = ()=>{
    return(
        <nav className={styleNavbar.main}>
            <div className={styleNavbar.positin}>
                <div>
                    <NavLink to ='/filter'><img src={hdrezka} alt="" className={styleNavbar.img}/></NavLink>
                </div>
                <div >
                    <NavLink to ='/FILM' className={styleNavbar.text}>Films</NavLink>
                </div>
                <div>
                    <NavLink to ='/TV_SHOW' className={styleNavbar.text}>Series</NavLink>
                </div>

            </div>
        </nav>
    )
}
export default Navbar