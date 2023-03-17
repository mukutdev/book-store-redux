import { addNewBook } from "../action";

const addBook = (formData) =>{

    return async dispatch =>{
        try {
            const response = await fetch("http://localhost:9000/books",{
                method : 'POST',
                body : JSON.stringify(formData),
                headers : {
                    "content-type" : "application/json"
                }
            });

            const books = await response.json()
            dispatch(addNewBook(books)) 
        } catch (error) {
            console.log(error);
        }
    }
}

export default addBook
