import React from 'react'
import { render } from 'react-dom'

import Root from './containers/Root'
import configureStore from './redux/store/configureStore'

const initialState = window.initialState

const store = configureStore(initialState)

render(
  <Root store={store} />,
  document.getElementById('app')
)
