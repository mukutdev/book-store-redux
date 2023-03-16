import { removeBook } from "../action";

const deleteBook = (id)=>{
    return async dispatch =>{
     await fetch(`http://localhost:9000/books/${id}`,{
            method : 'DELETE',
        });

        dispatch(removeBook(id)) 
    }
}

export default deleteBook;