import React, { Component } from 'react'

export default class MetaMask extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div style={{ width: 500, height: 500, backgroundColor: 'white', borderRadius: 5 }}>
          <img src='./app/imgs/metamask_logo.png' />
        </div>
      </div>
    )
  }
}
