import { createStore, compose, applyMiddleware } from 'redux'
import { persistState } from 'redux-devtools'
import { syncHistory } from 'react-router-redux'

import reducer from '../reducers'
import DevTools from '../../containers/DevTools'

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}

export default function configureStore({ initialState = {}, history }) {
  const routerMiddleware = syncHistory(history)

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(routerMiddleware),
      DevTools.instrument(),
      persistState(getDebugSessionKey())
    )
  )

  routerMiddleware.listenForReplays(store)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
