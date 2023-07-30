// Write your JS code here
import './index.css'

const CryptoCurrencyItem = props => {
  const {CryptoCurrencyDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = CryptoCurrencyDetails

  return (
    <li className="CryptoCurrencyItem">
      <div className="logo-and-title-container">
        <img
          src={currencyLogoUrl}
          className="currency-logo"
          alt={currencyName}
        />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-value-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptoCurrencyItem
