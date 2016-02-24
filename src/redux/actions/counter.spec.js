import test from 'ava'

import {
  increment, decrement,
  incrementIfOdd, incrementAsync
} from './counter'

test('increment action test', t => {
  t.same(increment(), {
    type: 'INCREMENT_COUNTER',
    amount: 1
  })

  t.same(increment(5), {
    type: 'INCREMENT_COUNTER',
    amount: 5
  })
})

test('decrement action test', t => {
  t.same(decrement(), { type: 'DECREMENT_COUNTER' })
})

test('incrementIfOdd action test', t => {
  t.same(incrementIfOdd(), { type: 'INCREMENT_IF_ODD' })
})

test('incrementAsync action test', t => {
  t.same(incrementAsync(), { type: 'INCREMENT_ASYNC' })
})
