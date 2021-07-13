import {ActionTypes} from "../constants/actionTypes";

const INITIAL_STATE = {
  items: [],
  error: ''
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.GET_USERS_SUCCESS:
      return {
        items: action.payload
      }
    case ActionTypes.USERS_ERROR:
      console.log(action.payload.error)
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}
