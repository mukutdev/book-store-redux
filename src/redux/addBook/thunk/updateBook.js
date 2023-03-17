
import { update } from "../action";

const updateBook = (formData) =>{

    return async dispatch =>{
        try {
            const response = await fetch(`http://localhost:9000/books/${formData.id}`,{
            method : 'PATCH',
            body : JSON.stringify(formData),
            headers : {
                "content-type" : "application/json"
            }
        });

        const books = await response.json()
        dispatch(update(books)) 
        } catch (error) {
            console.log(error)
        }
    }
}

export default updateBook;