import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import delay from '../../utils/delay'
import {
  INCREMENT_ASYNC
} from '../constants/counter'

import {
  increment
} from '../actions/counter'

export function* incrementAsyncSaga() {
  yield call(delay, 1000)
  yield put(increment())
}

export function* watchIncrementAsync() {
  yield* takeEvery(INCREMENT_ASYNC, incrementAsyncSaga)
}
