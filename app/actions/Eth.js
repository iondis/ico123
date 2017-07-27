export default class Eth {
  constructor() {
    this.web3
  }

  getWeb3Provider() {
    return (dispatch) => {
      window.addEventListener('load', () => {
        if (typeof web3 !== 'undefined') {
          console.log('web3', web3)
          this.web3 = new Web3(web3.currentProvider)
        }
      })
    }
  }
}
