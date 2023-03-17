import { ADD_BOOK, LOADED_BOOKS, REMOVE_BOOK, UPDATE_BOOK } from "./actionType";
import initialState from "./initialState";



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

        case UPDATE_BOOK:
            return state.map(item => item.id === action.payload.id ? {...action.payload} : item)    
            
        case REMOVE_BOOK:
            return state.filter(item => item.id !== action.payload)   
        default:
            return state;
     }
}

export default bookReducer;