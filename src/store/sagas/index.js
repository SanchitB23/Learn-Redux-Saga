import __usersSaga from "./usersSaga";
import {all} from "redux-saga/effects";


export default function* rootSaga() {
  yield all([
    ...__usersSaga
  ])
}
