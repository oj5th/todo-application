import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import history from '../history'

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
