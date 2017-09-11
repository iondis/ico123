import React, { Component } from 'react'
import User from './sidenav/User'
import Token from './sidenav/Token'
import House from './sidenav/House'

export default class Sidenav extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={sideNavStyle}>
        <User />
        <Token />
        <House />
      </div>
    )
  }
}

const sideNavStyle = {
  width: 300,
  height: 640,
  background: 'white',
  borderRadius: 5,
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  margin: 30,
  display: 'flex',
  flexDirection: 'column'
}
