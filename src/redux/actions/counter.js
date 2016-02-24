import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC
} from '../constants/counter'

export function increment(amount = 1) {
  return {
    type: INCREMENT_COUNTER,
    amount
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}

export function incrementIfOdd() {
  return {
    type: INCREMENT_IF_ODD
  }
}

export function incrementAsync() {
  return {
    type: INCREMENT_ASYNC
  }
}
