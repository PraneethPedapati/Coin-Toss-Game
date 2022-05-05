import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHeads: true, headsCount: 0, tailsCount: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHeads: true,
        headsCount: prevState.headsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHeads: false,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {isHeads, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {isHeads ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="toss-image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="toss-image"
            />
          )}
          <button type="button" className="toss-button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {totalCount}</p>
            <p className="result">Heads: {headsCount}</p>
            <p className="result">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
