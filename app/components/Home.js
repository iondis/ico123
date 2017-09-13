import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidenav from './Sidenav'
import Content from './Content'
import { Eth } from '../actions/index'
import MetaMask from './MetaMask'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ChooseToken from './token/ChooseToken'

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
        <Router>
          <div style={homeStyle}>
            <Sidenav />
            <Route to="/" component={Content} />
            <Route to="/token" component={ChooseToken} />
          </div>
        </Router>
      )
    } else {
      return <MetaMask />
    }
  }
}

const homeStyle = {
  display: 'flex',
  flexDirection: 'row',
  fontFamily: 'roboto',
  fontWeight: 300,
  color: '#696969'
}

const mapStoreToProps = store => store.eth

export default connect(mapStoreToProps)(Home)
