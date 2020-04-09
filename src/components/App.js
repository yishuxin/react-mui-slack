import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { useLocation, Route, useHistory } from 'react-router-dom'

import Login from './auth/Login'
import Register from './auth/Register'
import Home from './Home'
import useAuth from '../hooks/useAuth'
import Navbar from './Navbar'

function App() {
  const user = useAuth()
  const history = useHistory()
  const location = useLocation()
  console.log(user)

  return (
    <>
      <CssBaseline />

      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <Navbar />
      )}
      <Route exact path="/home" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
    </>
  )
}

export default App
