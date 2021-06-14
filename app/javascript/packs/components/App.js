import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import TodoCreate from './todos/TodoCreate'
import history from '../history'

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/pages/new_todo" exact component={TodoCreate} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
