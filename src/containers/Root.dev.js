import React, { Component } from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import CounterApp from './app/CounterApp'

export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <CounterApp />
          <DevTools />
        </div>
      </Provider>
    )
  }
}
