import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Content from './Content'
import { Eth } from '../actions/index'
import MetaMask from './MetaMask'

class Home extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(Eth.getWeb3Provider())
  }

  render() {
    if (this.props.metamask) {
      return (
        <div style={{display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Content />
        </div>
      )
    } else {
      return <MetaMask />
    }
  }
}

const mapStoreToProps = store => store.eth

export default connect(mapStoreToProps)(Home)
