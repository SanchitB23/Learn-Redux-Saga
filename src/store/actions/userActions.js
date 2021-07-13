import {ActionTypes} from "../constants/actionTypes";

export const getUsersRequest = () => ({
  type: ActionTypes.GET_USERS_REQUEST
})

export const getUsersSuccess = ({items}) => ({
  type: ActionTypes.GET_USERS_SUCCESS,
  payload: items
})

export const createUserRequest = ({firstName, lastName}) => ({
  type: ActionTypes.CREATE_USERS_REQUEST,
  payload: {
    firstName, lastName
  }
})

export const deleteUserRequest = (userId) => ({
  type: ActionTypes.DELETE_USERS_REQUEST,
  payload: {userId}
})
