import test from 'ava'

import * as actions from '../actions/counter'
import counterReducer from './counter'

test('Counter reducer test', t => {
  t.is(
    counterReducer(0, actions.increment()),
    1,
    'Reducer must increment counter by one on increment action'
  )

  t.is(
    counterReducer(0, actions.decrement()),
    -1,
    'Reducer must decrement counter by one on decrement action'
  )

  t.is(
    counterReducer(0, actions.incrementIfOdd()),
    0,
    `Reducer must not increment counter on incrementIfOdd action
    when the state is even`
  )

  t.is(
    counterReducer(1, actions.increment()),
    2,
    'Reducer must increment counter by one on increment action'
  )

  t.is(
    counterReducer(0, {}),
    0,
    'Reducer must return the same state if not action type matches'
  )
})
