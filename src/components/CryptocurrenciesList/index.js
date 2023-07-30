// Write your JS code here
import {Component} from 'react'

import CryptoCurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptoCurrencyList extends Component {
  renderCryptoCurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrenciesView = () => {
    const {CryptoCurrencyData} = this.props
    return (
      <div className="cryptocurrencies-list-container">
        {this.renderCryptoCurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {CryptoCurrencyData.map(eachCryptoCurrency => (
            <CryptoCurrencyItem
              key={eachCryptoCurrency.id}
              CryptoCurrencyDetails={eachCryptoCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        <h1 className="heading">CryptoCurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptoCurrency"
          className="cryptocurrencies-img"
        />
        {this.renderCryptoCurrenciesView()}
      </div>
    )
  }
}

export default CryptoCurrencyList
