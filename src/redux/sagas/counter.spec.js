import test from 'ava'

import { put, call } from 'redux-saga/effects'
import delay from '../../utils/delay'
import { incrementAsyncSaga } from './counter'
import {
  increment
} from '../actions/counter'

test('incrementAsyncSaga test', t => {
  const gen = incrementAsyncSaga()

  t.same(
    gen.next().value,
    call(delay, 1000),
    'incrementAsyncSaga must call delay(1000)'
  )

  t.same(
    gen.next().value,
    put(increment()),
    'incrementAsyncSaga must dispatch an INCREMENT action'
  )

  t.same(
    gen.next(),
    { done: true, value: undefined },
    'incrementAsyncSaga must be done'
  )
})
