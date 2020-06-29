import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'

const App = () => {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {(localStorage.getItem('user')) ? <h1>Home</h1> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route exact path="/login">
            {(localStorage.getItem('user')) ? <Redirect to="/dashboard"></Redirect> : <Login />}
          </Route>
          <Route path="/register">
            {(localStorage.getItem('user')) ? <Redirect to="/dashboard"></Redirect> : <Register />}
          </Route>
          <Route exact path="/Dashboard">
            {(localStorage.getItem('user')) ? <Dashboard /> : <Redirect to="/login"></Redirect>}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
