import {combineReducers} from "redux"
import bookReducer from "./addBook/reducer"


const rootReducer = combineReducers({
    books : bookReducer,
})

export default rootReducer;