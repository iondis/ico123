import React, { Component } from 'react'

export default class Pesale extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Logo />
        <Video />
      </div>
    )
  }
}
