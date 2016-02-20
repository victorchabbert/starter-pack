import React from 'react'
import { render } from 'react-dom'

import { browserHistory } from 'react-router'
import configureStore from './redux/store/configureStore'

import Root from './containers/Root'
import makeRoutes from './routes/index'

const initialState = window.initialState

const store = configureStore({ initialState, history: browserHistory })

const routes = makeRoutes(store)

render(
  <Root store={store} routes={routes} history={browserHistory} />,
  document.getElementById('app')
)
