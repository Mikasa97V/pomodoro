import './index.module.css'
import { Provider } from 'react-redux'
import store, { persistor } from 'store'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import { createRoot } from 'react-dom/client'
import React from 'react'
const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
