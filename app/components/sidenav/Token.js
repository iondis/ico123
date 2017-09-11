import React, { Component } from 'react'

export default class Token extends Component {
  constructor() {
    super()
    this.state = {
      tokenStyle: {
        margin: 20,
        borderRadius: 5,
        height: 180,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }
    }
  }

  onMouseEnterHandler(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        tokenStyle: {
          ...prevState.tokenStyle,
          boxShadow: '4px 6px 10px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
      }
    })
  }

  onMouseLeaveHandler(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        tokenStyle: {
          ...prevState.tokenStyle,
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
      }
    })
  }

  render() {
    return (
      <div
        style={this.state.tokenStyle}
        onMouseEnter={this.onMouseEnterHandler.bind(this)}
        onMouseLeave={this.onMouseLeaveHandler.bind(this)}
        >
        <img style={{marginLeft: 40, marginRight: 40, marginTop: 20, marginBottom: 20 }} src='./app/imgs/logos/veridium_logo.png' />
      </div>
    )
  }
}
