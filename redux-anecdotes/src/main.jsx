import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
  reducer: {
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notification: notificationReducer
  }
})

/*
const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer
})
const store = createStore(reducer)
*/

/**
 * await toimii ainoastaan async-funktioiden sisällä, ja main.jsx:ssä oleva koodi ei
 * ole funktiossa, joten yksinkertaisuuden vuoksi ei käytetä async:iä.
 */


console.log('main', store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)