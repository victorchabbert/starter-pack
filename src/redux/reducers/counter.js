import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_IF_ODD
} from '../constants/counter'

function addOne(state, type) {
  switch(type) {
    case INCREMENT_COUNTER:
      return state + 1
    default:
      return state
  }
}

export default function counter(state = 0, { type }) {
  switch (type) {
    case INCREMENT_COUNTER:
      return addOne(state, type)
    case DECREMENT_COUNTER:
      return state - 1
    case INCREMENT_IF_ODD:
      return state % 2 ? state + 1 : state
    default:
      return state
  }
}
