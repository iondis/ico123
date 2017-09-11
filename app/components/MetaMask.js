import React, { Component } from 'react'

export default class MetaMask extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style ={mmContStyle}>
        <div style={mmPanelStyle}>
          <img src='./app/imgs/metamask_logo.png' />
          <h1>download Metamask!</h1>
        </div>
      </div>
    )
  }
}


const mmContStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'roboto',
  color: '#696969'
}

const mmPanelStyle = {
  width: 600,
  height: 500,
  backgroundColor: 'white',
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}
