import React from 'react'
import { createStore, combineReducers } from 'redux'
import placeReducer from './reducers/placeReducer'


const rootReducer = combineReducers({
  places: placeReducer
})

export default rootReducer