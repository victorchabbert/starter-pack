import { createStore, applyMiddleware } from 'redux'
import { syncHistory } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore({ initialState = {}, history }) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
      createSagaMiddleware(rootSaga),
      syncHistory(history)
    )
  )

  return store
}
