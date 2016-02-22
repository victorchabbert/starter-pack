import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    const {
      increment, incrementIfOdd, decrement,
      counter, incrementAsync
    } = this.props
    return (
      <p>Clicked: {counter} times
      {' '}
      <button onClick={increment}>+</button>
      {' '}
      <button onClick={decrement}>-</button>
      {' '}
      <button onClick={incrementIfOdd}>Increment if odd</button>
      {' '}
      <button onClick={incrementAsync}>Increment after 1s</button></p>
    )
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter
