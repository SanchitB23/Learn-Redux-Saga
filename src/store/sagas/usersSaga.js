import {call, fork, put, takeEvery, takeLatest} from "redux-saga/effects";
import * as api from "../api/userApi";
import * as actions from "../actions/userActions";
import {ActionTypes} from "../constants/actionTypes";

function* getUsers() {
  try {
    const result = yield call(api.getUsers)
    yield put(actions.getUsersSuccess({
      items: result.data.data
    }))

  } catch (e) {

  }
}

function* watchGetUsersRequest() {
  yield takeEvery(ActionTypes.GET_USERS_REQUEST, getUsers)
}

function* createUser(action) {
  try {
    yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName})
    yield call(getUsers)
  } catch (e) {

  }
}

function* watchCreateUserRequest() {
  yield takeLatest(ActionTypes.CREATE_USERS_REQUEST, createUser)
}

const userSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest)
]

export default userSagas
