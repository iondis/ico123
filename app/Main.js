import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home'

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ backgroundColor: '#F5F5F5', width: '100%', height: '100%', borderRadius: 5}} >
          <Home />
        </div>
      </Provider>
    )
  }
}
