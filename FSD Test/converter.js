// converter.js
document.getElementById('converterForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  try {
    const response = await fetch(`https://api.exchange-api.com/v4/latest/${fromCurrency}`);
    if (!response.ok) throw new Error('Failed to fetch exchange rate');

    const data = await response.json();
    const rate = data.rates[toCurrency];

    if (rate) {
      const convertedAmount = (amount * rate).toFixed(2);
      document.getElementById('convertedValue').value = convertedAmount;
      document.getElementById('result').textContent = `Converted Amount: ${convertedAmount} ${toCurrency}`;
    } else {
      document.getElementById('result').textContent = `Conversion rate for ${toCurrency} not available.`;
    }
  } catch (error) {
    document.getElementById('result').textContent = `Error: ${error.message}`;
  }
});