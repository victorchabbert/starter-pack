import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import CoreLayout from '../components/CoreLayout'
import HomeView from '../components/HomeView'
import CounterApp from '../containers/app/CounterApp'
import NotFound from '../components/NotFound'

const Routes = (store) => (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path="/counter" component={CounterApp} />
    <Route path="/404" component={NotFound} />
    <Redirect from="*" to="/404" />
  </Route>
)

export default Routes
