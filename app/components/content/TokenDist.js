import React, { Component } from 'react'

export default class TokenDist extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={TokenDistStyle}>
        <h1>Total Supply: </h1>
          
      </div>
    )
  }
}

const TokenDistStyle = {
  width: 400,
  height: 300,
  borderRadius: 5,
  backgroundColor: 'white',
  textAlign: 'center',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  margin: 20
}
