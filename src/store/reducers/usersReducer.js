import {ActionTypes} from "../constants/actionTypes";

const INITIAL_STATE = {
  items: []
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.GET_USERS_SUCCESS:
      return {
        items: action.payload.items
      }
    default:
      return state
  }
}
