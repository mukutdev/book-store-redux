import { addNewBook } from "../action";

const addBook = (formData) =>{

    return async dispatch =>{
        const response = await fetch("http://localhost:9000/books",{
            method : 'POST',
            body : JSON.stringify(formData),
            headers : {
                "content-type" : "application/json"
            }
        });

        const books = await response.json()
        console.log(books)
        dispatch(addNewBook(books)) 
    }
}

export default addBook