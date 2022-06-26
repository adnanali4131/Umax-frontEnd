import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.min.css'
import { Provider } from 'react-redux'
import store from './redux/store'

import './index.css'
import Urls from './routes/index'
import reportWebVitals from './reportWebVitals'
import { GlobalStyle } from './utils/global.styles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Urls />
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()
