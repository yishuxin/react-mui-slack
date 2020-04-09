import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

const Root = withRouter(App)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
