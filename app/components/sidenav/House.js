import React, { Component } from 'react'

export default class House extends Component {
  constructor() {
    super()
  }

  onMouseEnterHandler(e) {
    console.log('e', e)
  }

  render() {
    return (
      <div style={houseStyle} onMouseEnter={this.onMouseEnterHandler}>
        <img style={{marginLeft: 40, marginRight: 40, marginTop: 20, marginBottom: 20 }} src='./app/imgs/house.png' />
      </div>
    )
  }
}

const houseStyle = {
  height: 180,
  margin: 20,
  borderRadius: 5,
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}
