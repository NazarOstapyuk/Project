// import React,{FC} from "react";
// import styleFilms from "../AllFilms/allFilms.module.css";
// import classNames from "classnames";
//
// type PropsType={
//     pageSize:number
//     totalCounter:number
//     currentPage:number
//     onPageChanged: (p:number)=>void
// }
//
// const Pagination:FC<PropsType>= ({pageSize,totalCounter ,currentPage,onPageChanged})=>{
//     let totalCount = Math.ceil(totalCounter/pageSize) ;
//     let page= [];
//     for (let i = 1; i <= totalCount; i++){
//         page.push(i)
//     }
//     return(
//         <div className={styleFilms.paginator}>
//             {page.map(p =>{
//                 return <div className={classNames({[styleFilms.selectedPage]: currentPage === p},styleFilms.button)}
//                              key={p} onClick={()=>{onPageChanged(p)}} >{p}</div>
//             })}
//         </div>
//     )
// }
// export default Pagination

import React, {FC, useState} from "react";
import classNames from "classnames";
import styleFilms from "../AllFilms/allFilms.module.css";
type PropsType={
    pageSize:number
    totalCounter:number
    currentPage:number
    onPageChanged: (p:number)=>void
    portionSize:any
}
const Pagination:FC<PropsType>= ({pageSize,totalCounter ,currentPage,onPageChanged,portionSize=10})=>{
    let totalCount = Math.ceil(totalCounter/pageSize) ;
    let page= [];
    for (let i = 1; i <= totalCount; i++){
        page.push(i)
    }

    let portionCount = Math.ceil(totalCount / portionSize);
    let [portionNumber,setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return(
        <div className={styleFilms.paginator}>
            {portionNumber > 1 &&
            <button onClick={()=>{setPortionNumber(portionNumber - 1)}} className={styleFilms.prev}>&#60;</button>}
            {page
                .filter(p=>p>= leftPortionPageNumber && p<= rightPortionPageNumber)
                .map((p)=>{
                    return <span className={classNames({[styleFilms.selectedPage]: currentPage === p},styleFilms.button)} key={p} onClick={(e)=>{
                        onPageChanged(p)}}>{p}</span>})}
            {portionCount > portionNumber &&
            <button onClick={()=>{setPortionNumber(portionNumber + 1)}} className={styleFilms.prev}>&#62;</button>}
        </div>
    )
}
export default Pagination