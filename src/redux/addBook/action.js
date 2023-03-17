import { ADD_BOOK, LOADED_BOOKS, REMOVE_BOOK, UPDATE_BOOK } from "./actionType"

export const loadedBook = (books)=>{
    return {
        type : LOADED_BOOKS,
        payload : books,
    }
}
export const addNewBook = (formData)=>{
    return {
        type : ADD_BOOK,
        payload : formData,
    }
}

export const removeBook = (bookId)=>{
    return {
        type : REMOVE_BOOK,
        payload : bookId
    }
}

export const update = (formData)=>{
    return{
        type : UPDATE_BOOK,
        payload : formData
    }
}