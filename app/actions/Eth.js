import fs from 'browserify-fs'

export default class Eth {
  constructor() {
    this.web3
  }

  getWeb3Provider() {
    return dispatch => {
      window.addEventListener('load', () => {
        if (typeof web3 !== 'undefined') {
          dispatch({ type: 'METAMASK_STATUS', payload: true })
          this.web3 = new Web3(web3.currentProvider)
        } else {
          dispatch({ type: 'METAMASK_STATUS', payload: false })
        }
      })
    }
  }

  setupContracts(filename) {
    return dispatch => {
      return new Promise((res, rej) => {
        getContractData(filename)
        .then(data => {
          console.log('data', data)
        }).catch(err => rej(err))
      })
    }
  }

  getContractData(filename) {
    return new Promise((res, rej) => {
      fs.readFile(__dirname + './ElasticToken.sol', (err, data) => {
        if (err) reject(err)
        res(data)
      })
    })
  }
}
