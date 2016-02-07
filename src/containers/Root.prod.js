import React, { Component } from 'react'
import { Provider } from 'react-redux'
import CounterApp from './app/CounterApp'

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <CounterApp />
        </div>
      </Provider>
    )
  }
}
