// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currenciesList: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({currenciesList: updatedData, isLoading: false})
  }

  renderCryptocurrenciesList = () => {
    const {currenciesList} = this.state

    return (
      <div className="crypto-currencies-list-container">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <ul className="cryptocurrencies-list">
          <li className="titles-container">
            <p className="heading">Coin Type</p>
            <div className="currency-type-heading-container">
              <p className="heading usd">USD</p>
              <p className="heading">EURO</p>
            </div>
          </li>
          {currenciesList.map(eachItem => (
            <CryptocurrencyItem
              cryptocurrencyDetails={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptocurrenciesList()
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
