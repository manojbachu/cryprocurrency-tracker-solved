// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = cryptocurrencyDetails

  return (
    <li className="cryptocurrency-item">
      <div className="logo-type-container">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="cryptocurrency-type-container">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
