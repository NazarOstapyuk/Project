import React,{FC} from "react";
import styleFilms from "../AllFilms/allFilms.module.css";
import classNames from "classnames";

type PropsType={
    pageSize:number
    totalCounter:number
    currentPage:number
    onPageChanged: (p:number)=>void
}

const Pagination:FC<PropsType>= ({pageSize,totalCounter ,currentPage,onPageChanged})=>{
    let totalCount = Math.ceil(totalCounter/pageSize) ;
    let page= [];
    for (let i = 1; i <= totalCount; i++){
        page.push(i)
    }
    return(
        <div className={styleFilms.paginator}>
            {page.map(p =>{
                return <div className={classNames({[styleFilms.selectedPage]: currentPage === p},styleFilms.button)}
                             key={p} onClick={()=>{onPageChanged(p)}} >{p}</div>
            })}
        </div>
    )
}
export default Pagination

