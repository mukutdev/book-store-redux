import { ADD_BOOK } from "./actionType";
import initialState from "./initialState";



const nextId = (books)=>{
    const maxId = books.reduce((maxId , book) => Math.max(maxId , book.id) , -1)
    return maxId + 1    
}

const bookReducer = (state = initialState , action)=>{
     switch (action.type) {
        case ADD_BOOK:
            return [
                    ...state,
                    {
                        id : nextId(state), ...action.payload
                    }
            ]
     
        default:
            break;
     }
}

export default bookReducer