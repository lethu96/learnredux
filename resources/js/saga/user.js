import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {REQUEST_LIST_USER,REQUEST_ADD_USER} from '../config/user';
import {reciveListUser} from '../actions/user.actions';
import {fetchData} from '../api/user.api';

function* getData(action) {
  try {
    const data = yield call(fetchData);
    yield put(reciveListUser(data));
  } catch (e) {
    console.log(e);
  }
}

function* callCreateUser(action) {
  try {
    let user = yield call(createNewUser, action.user);
    yield call(action.router.push, '/products');
  }catch(e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeEvery(REQUEST_LIST_USER, getData);
  yield takeLatest(REQUEST_ADD_USER, callCreateUser);
}


