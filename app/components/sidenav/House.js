import React, { Component } from 'react'

export default class House extends Component {
  constructor() {
    super()
    this.state = {
      houseStyle: {
        height: 180,
        margin: 20,
        borderRadius: 5,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }
    }
  }

  onMouseEnterHandler(e) {
    e.preventDefault()
    // houseStyle.boxShadow = 'boxShadow: 4 8px 12px 4 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    this.setState(prevState => {
      return {
        houseStyle: {
          ...prevState.houseStyle,
          boxShadow: '4px 6px 10px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
      }
    })
  }

  onMouseLeaveHandler(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        houseStyle: {
          ...prevState.houseStyle,
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
      }
    })
  }

  render() {
    return (
      <div
        style={this.state.houseStyle}
        onMouseEnter={this.onMouseEnterHandler.bind(this)}
        onMouseLeave={this.onMouseLeaveHandler.bind(this)}
        >
        <img style={{marginLeft: 40, marginRight: 40, marginTop: 20, marginBottom: 20 }} src='./app/imgs/house.png' />
      </div>
    )
  }
}
