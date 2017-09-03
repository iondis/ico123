import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>ico'in it</h1>
        </div>
      </Provider>
    )
  }
}
