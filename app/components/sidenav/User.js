import React, { Component } from 'react'

export default class User extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={userStyle}>
        <img style={{marginLeft: 40, marginRight: 40, marginTop: 20, marginBottom: 20 }} src='./app/imgs/boy.png' />
      </div>
    )
  }
}

const userStyle = {
  height: 200,
}
