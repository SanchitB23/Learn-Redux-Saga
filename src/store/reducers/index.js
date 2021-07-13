import __usersReducer from "./usersReducer";
import {combineReducers} from "redux";

export default combineReducers({
  users: __usersReducer
})
