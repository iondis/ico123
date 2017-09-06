export default class Eth {
  constructor() {
    this.web3
  }

  getWeb3Provider() {
    return (dispatch) => {
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
}
