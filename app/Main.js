import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div style={{ wdith: '100%', height: 800, display: 'flex' }}>
            <h3>INVEST</h3>
            <div style={{ width: 500 }}>
              <h3>Price</h3>
              <h3></h3>
              <h3></h3>
            </div>
            <div style={{ width: 500 }}>
              <h3>Total Supply</h3>
              <h3></h3>
              <h3>Sold</h3>
            </div>
          </div>
          <div style={{ wdith: '100%', height: 800 }}>
            <h3>INFO</h3>
            <div style={{ widtth: 500}}></div>
          </div>
        </div>
      </Provider>
    )
  }
}
