import React from 'react'
import { AppRegistry } from 'react-native';
import { createStore } from 'redux'
import App from './App';
import { name as appName } from './app.json';
import rootReducer from './src/store'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Application);
