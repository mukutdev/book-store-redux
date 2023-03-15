import { ADD_BOOK } from "./actionType"

export const addNewBook = (formData)=>{
    return {
        type : ADD_BOOK,
        payload : formData,
    }
}