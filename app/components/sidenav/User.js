import React, { Component } from 'react'

export default class User extends Component {
  constructor() {
    super()
    this.state = {
      userStyle: {
        height: 180,
        margin: 20,
        borderRadius: 5,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }
    }
  }

  onMouseEnterHandler(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        userStyle: {
          ...prevState.userStyle,
          boxShadow: '4px 6px 10px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
      }
    })
  }

  onMouseLeaveHandler(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        userStyle: {
          ...prevState.userStyle,
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
      }
    })
  }

  render() {
    return (
      <div
        style={this.state.userStyle}
        onMouseEnter={this.onMouseEnterHandler.bind(this)}
        onMouseLeave={this.onMouseLeaveHandler.bind(this)}
        >
        <img style={{marginLeft: 40, marginRight: 40, marginTop: 20, marginBottom: 20 }} src='./app/imgs/boy.png' />
      </div>
    )
  }
}
