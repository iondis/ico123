import React, { Component } from 'react'

export default class Logo extends Component {
  constructor() {
    super()
    this.state = {
      logoStyle: {
        width: 400,
        height: 300,
        borderRadius: 5,
        backgroundColor: 'white',
        textAlign: 'center',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        margin: 20
      }
    }
  }

  onMouseEnterHandler(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        logoStyle: {
          ...prevState.logoStyle,
          boxShadow: '4px 6px 10px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
      }
    })
  }

  onMouseLeaveHandler(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        logoStyle: {
          ...prevState.logoStyle,
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
      }
    })
  }
  
  render() {
    return (
      <div
        style={this.state.logoStyle}
        onMouseEnter={this.onMouseEnterHandler.bind(this)}
        onMouseLeave={this.onMouseLeaveHandler.bind(this)}
        >
        <h1>VERIDIUM (VRD)</h1>
        <img src='./app/imgs/banners/veridium_banner.png' />
      </div>
    )
  }
}
