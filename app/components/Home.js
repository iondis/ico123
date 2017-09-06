import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Content from './Content'

class Home extends Component {
  constructor() {
    super()
  }

  componentWillMount() {

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

const mapStoreToProps = store => store.eth

export default connect(Home)(mapStoreToProps)
