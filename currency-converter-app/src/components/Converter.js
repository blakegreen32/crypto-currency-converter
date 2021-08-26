import { useState } from 'react'
import { ConversionService } from './ConversionService'
const Converter = () => {
  const [selection, setSelection] = useState("");
  const [parsedResults, setParsedResults] = useState([]);
  
  const fetchConversions = async (curr) => {
    // fetch currency conversions from coingecko api through ConversionService
    // parse data from api call response
    const json = await ConversionService(curr)
    parseData(json)
  };

  const parseData = (obj) => {
    // parse response and update UI data
    var clonedArray = [...parsedResults]
    const currency = Object.keys(obj)[0]
    const conversions = obj[currency]
    const keys = Object.keys(conversions)

    clonedArray = [];
    keys.forEach(key => {
      clonedArray.push(key + ": " + conversions[key])
    })
    setSelection(currency)
    setParsedResults(clonedArray)
  }

  return(
    <div className="main-container">
      <ul>
        <li onClick={(e) => fetchConversions(e.target.innerText)}>Bitcoin</li>
        <img src="assets/bitcoin.png"/>
        <li onClick={(e) => fetchConversions(e.target.innerText)}>Ethereum</li>
        <img src="assets/ethereum.png"/>
        <li onClick={(e) => fetchConversions(e.target.innerText)}>Litecoin</li>
        <img src="assets/litecoin.png"/>
        <li onClick={(e) => fetchConversions(e.target.innerText)}>Ripple</li>
        <img src="assets/xrp.png"/>
      </ul>

      <div className="conversionBox">
        <div className="selection">{selection.charAt(0).toUpperCase() + selection.slice(1)}</div>
        <div>
          {
            parsedResults.length > 0 ? (parsedResults.map((val, index) => {
              return (<p key={index}>{val}</p>)
            })):<div>Select a currency</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Converter