export const getAllFilms=(state)=>{
    return state.pageAllFilms.allFilms
}
export const getDetails=(state)=>{
    return state.pageAllFilms.details
}
export const getTotalPages=(state)=>{
    return state.pageAllFilms.totalPages
}
export const getTotalCount=(state)=>{
    return state.pageAllFilms.totalCount
}
export const getCurrentPage=(state)=>{
    return state.pageAllFilms.currentPage
}
export const getIsFetching=(state)=>{
    return state.pageAllFilms.isFetching
}
export const getFilter=(state)=>{
    return state.pageAllFilms.filter
}
