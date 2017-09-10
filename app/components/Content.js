import React, { Component } from 'react'
import Logo from './content/Logo'
import Video from './content/Video'
import TokenDist from './content/TokenDist'

export default class Content extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{ width: '100%', margin: 10, display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column'}}>
          <Logo />
          <Video />
        </div>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column'}}>
          <TokenDist />
        </div>
      </div>
    )
  }
}
