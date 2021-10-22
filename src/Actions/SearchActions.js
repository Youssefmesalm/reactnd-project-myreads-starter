import * as BooksAPI from "../BooksAPI";

export const UPDATE_QUERY="UPDATE_QUERY"
export const SEARCH_BOOK="SEARCH_BOOK"
export const FREE_RESULT="FREE_RESULT"
export function Update_query(value){
    return{
        type:UPDATE_QUERY,
        payload:value
    };
}
export function Search_Book(result){
    return{
        type:SEARCH_BOOK,
        payload:result
    }
}

 function Free_Book(){
    return{
        type:FREE_RESULT,
        
    }
}
export default function HandleSearch(query){
    return(dispatch)=>{
        dispatch(Update_query(query))
        return(
            query!==""?
        BooksAPI.search(query)
        .then((data) => {
          dispatch(Search_Book(data))
        })
        .catch((err) => console.error(err.error))
        :dispatch(Free_Book())
        )}
}