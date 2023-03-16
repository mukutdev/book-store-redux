import { ADD_BOOK, LOADED_BOOKS } from "./actionType";
import initialState from "./initialState";



// const nextId = (books)=>{
//     const maxId = books.reduce((maxId , book) => Math.max(maxId , book.id) , -1)
//     return maxId + 1    
// }

const bookReducer = (state = initialState , action)=>{
     switch (action.type) {
        case LOADED_BOOKS:
            return action.payload
     
        case ADD_BOOK:
            return [
                    ...state,
                    {
                     ...action.payload
                    }
            ]
     
        default:
            return state;
     }
}

export default bookReducer;