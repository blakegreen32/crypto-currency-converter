export const ConversionService = async (value) => {
  // using coingecko api convert selected currency to other currencies in the list and return json
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${value}&vs_currencies=btc,eth,ltc,xrp`)
    const json = await response.json()
    return json
  } catch (err) {
    throw new Error("ConversionService Error: " + err)
  }
};