import React, { Component } from 'react'
import Logo from './content/Logo'
import Video from './content/Video'

export default class Content extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{ width: '100%', margin: 10, display: 'flex', flexDirection: 'column' }}>
        <Logo />
        <Video />
      </div>
    )
  }
}
