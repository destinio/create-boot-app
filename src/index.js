import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import AppContextProvider from './contexts/AppContext'

ReactDOM.render(
  <AppContextProvider>
    <Router>
      <App />
    </Router>
  </AppContextProvider>,
  document.getElementById('root'),
)
