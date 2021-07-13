import {call, fork, put, takeEvery} from "redux-saga/effects";
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

const userSagas = [
  fork(watchGetUsersRequest)
]

export default userSagas
