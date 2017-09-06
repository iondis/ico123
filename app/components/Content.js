import React, { Component } from 'react'
import Presale from './content/Presale'

export default class Content extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{ width: '100%', margin: 10 }}>
        <Presale />
      </div>
    )
  }
}
