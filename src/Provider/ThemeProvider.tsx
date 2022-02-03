import React, {ReactNode, useState} from "react";
import {Theme, ThemeContext} from "../context/ThemeContext";
import {changeCss} from "../model/changeCss";
import {storage} from "../model/Storege";

interface Props {
    children:ReactNode
}

export const ThemeProvider = ({children, ...props}:Props)=>{
    const [theme,setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT)
    changeCss(theme)
    function changeTheme (theme:Theme){
        storage.setItem('theme',theme)
        setTheme(theme)
        changeCss(theme)
    }


    return(
        <ThemeContext.Provider value={{
        theme,
        changeTheme
    }} {...props}>{children}</ThemeContext.Provider>)
}