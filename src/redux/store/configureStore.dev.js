import { createStore, compose } from 'redux'
import { persistState } from 'redux-devtools'
import reducer from '../reducers'
import DevTools from '../../containers/DevTools'

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(
      DevTools.instrument(),
      persistState(getDebugSessionKey())
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
