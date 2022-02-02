import axios, {AxiosResponse} from "axios";
import {allFilmsType} from "../redux/allFilms-reducer";


const instance = axios.create({

    headers: {
        'X-API-KEY': '4e66236d-ad1c-42bd-91ca-9da213f544f7',
        'Content-Type': 'application/json',

    },
    baseURL:'https://kinopoiskapiunofficial.tech/api/',

})

export const filmsAPI = {
    getFilms(path:string){
        return instance.get(`v2.2/films/?type=${path}`).then(res=>res.data)
    },
    getPaginatorFilms(path:string,pageNumber:number){
        return instance.get(`v2.2/films/?type=${path}&page=${pageNumber}`).then(res=>res.data)
    },
    getDetailsFilms(id:number){
        return instance.get(`v2.2/films/${id}`).then(res=>res.data)
    },
    getFilterFilms(searchTerm:string){
        return instance.get(`v2.1/films/search-by-keyword?keyword=${searchTerm}&page=1`)
    },


}
export const descriptionAPI={
    getSimilars(id:number){
        return instance.get(`v2.2/films/${id}/similars`)
    },
    getBoxOffice(id:number){
        return instance.get(`v2.2/films/${id}/box_office`)
    },


}