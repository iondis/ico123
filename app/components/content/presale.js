import React, { Component } from 'react'
import Logo from './presale/Logo'
import Video from './presale/Video'

export default class Pesale extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
        <Logo />
        <Video />
      </div>
    )
  }
}
