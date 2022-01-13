import axios from "axios";


const instance = axios.create({
    headers: {
        'X-API-KEY': '4e66236d-ad1c-42bd-91ca-9da213f544f7',
        'Content-Type': 'application/json',
    },
    baseURL:'https://kinopoiskapiunofficial.tech/api/'
})

export const filmsAPI = {
    getFilms(path:string){
        return instance.get(`v2.2/films/?type=${path}`).then(res=>res.data)
    },
    getPaginatorFilms(path:string,pageNumber:number){
        return instance.get(`v2.2/films/?type=${path}&page=${pageNumber}`).then(res=>res.data)
    },
    getDetailsFilms(params:string){
        return instance.get(`v2.2/films/${params}`).then(res=>res.data)
    },
    getFilterFilms(searchTerm:string){
        return instance.get(`v2.1/films/search-by-keyword?keyword=${searchTerm}&page=1`)
    }
}