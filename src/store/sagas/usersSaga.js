import {call, fork, put, take, takeEvery, takeLatest} from "redux-saga/effects";
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
    yield put(actions.usersError({
      error: 'An error Occurred'
    }))
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
    yield put(actions.usersError({
      error: 'An error Occurred'
    }))
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(ActionTypes.CREATE_USERS_REQUEST, createUser)
}

function* deleteUser({userId}) {
  try {
    yield call(api.deleteUser, userId)
    yield call(getUsers)
  } catch (e) {
    yield put(actions.usersError({
      error: 'An error Occurred'
    }))
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(ActionTypes.DELETE_USERS_REQUEST)
    yield call(deleteUser, {
      userId: action.payload.userId
    })
  }
}

const userSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest)
]

export default userSagas
