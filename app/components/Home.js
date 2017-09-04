import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'

export default class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Content />
      </div>
    )
  }
}
