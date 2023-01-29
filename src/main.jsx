import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// Connect react to a specifec elemt in HTML in our app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
