import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1> whats up world</h1>
      </Provider>
    )
  }
}
