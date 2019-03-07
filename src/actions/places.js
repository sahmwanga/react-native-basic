import React from 'react'
import { ADD_PLACE } from './types'

const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
}

export default { addPlace }