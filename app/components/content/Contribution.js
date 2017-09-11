import React, { Component } from 'react'

export default class Contribution extends Component {
  constructor() {
    super()
    this.state = {
      contributionStyle: {
        width: 400,
        height: 300,
        borderRadius: 5,
        backgroundColor: 'white',
        textAlign: 'center',
        margin: 20,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }
    }
  }

  onMouseEnterHandler(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        contributionStyle: {
          ...prevState.contributionStyle,
          boxShadow: '4px 6px 10px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
      }
    })
  }

  onMouseLeaveHandler(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        contributionStyle: {
          ...prevState.contributionStyle,
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
      }
    })
  }

  render() {
    return (
      <div
        style={this.state.contributionStyle}
        onMouseEnter={this.onMouseEnterHandler.bind(this)}
        onMouseLeave={this.onMouseLeaveHandler.bind(this)}
        >
      </div>
    )
  }
}
