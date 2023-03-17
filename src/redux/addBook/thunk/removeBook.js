import { removeBook } from "../action";

const deleteBook = (id)=>{
    return async dispatch =>{
     try {
        await fetch(`http://localhost:9000/books/${id}`,{
            method : 'DELETE',
        });

        dispatch(removeBook(id)) 
     } catch (error) {
      console.log(error)  
     }
    }
}

export default deleteBook;