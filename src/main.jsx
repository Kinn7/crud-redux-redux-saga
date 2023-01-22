import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './app/features/users/usersSlice'
import userSaga from './app/features/users/usersSaga'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const saga = createSagaMiddleware()
const store = configureStore({
  reducer : {  
      users : usersReducer
    },
    middleware : [saga]
})
saga.run(userSaga)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
  //</React.StrictMode>,
)
