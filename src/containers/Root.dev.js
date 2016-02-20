import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import DevTools from './DevTools'

export default class Root extends Component {
  render() {
    const { store, routes, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            { routes }
          </Router>
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired
}
