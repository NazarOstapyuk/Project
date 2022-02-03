import React from 'react';
import {NavLink} from "react-router-dom";
import {Search} from '../filter/Search';
import hdrezka from '../image/Sgdo_u2j.png'
import styleNavbar from './navbar.module.css'
import {useTheme} from "../Hooks/useTheme";
import {Theme} from "../context/ThemeContext";

const Navbar = ()=>{
    const theme = useTheme()

    const changeTheme=()=>{
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)

    }

    return(
        <nav className={styleNavbar.main}>
            <div className={styleNavbar.positin}>
                <div className={styleNavbar.changeTheme} onClick={changeTheme}>
                    <img src={hdrezka} alt="" className={styleNavbar.img}/>
                </div>

                <div >
                    <NavLink to ='/film' className={styleNavbar.text}>Films</NavLink>
                </div>
                <div>
                    <NavLink to ='/tv_show' className={styleNavbar.text}>Series</NavLink>
                </div>

                <div>
                    <Search/>
                </div>

            </div>
        </nav>
    )
}
export default Navbar