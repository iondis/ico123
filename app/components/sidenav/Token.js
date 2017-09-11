import React, { Component } from 'react'

export default class Token extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{ margin: 20, borderRadius: 5, height: 180, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <img style={{marginLeft: 40, marginRight: 40, marginTop: 20, marginBottom: 20 }} src='./app/imgs/logos/veridium_logo.png' />
      </div>
    )
  }
}
