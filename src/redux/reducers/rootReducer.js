import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import postReducer from "./postReducer";

const rootRedcer = combineReducers({
    blogs: postReducer,
    filters: filterReducer,
})

export default rootRedcer;