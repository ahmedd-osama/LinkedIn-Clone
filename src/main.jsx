import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
// import '../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import RouterWrapper from './RouterWrapper.jsx'
import store from './redux/app/store.js'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterWrapper>
      <App />
    </RouterWrapper>
    </Provider>
  </React.StrictMode>
)