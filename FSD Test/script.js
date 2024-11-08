document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (username.length === 0) {
    alert('Username is required.');
    return;
  }

  if (password.length === 0 || password.length > 10 || /[^a-zA-Z0-9]/.test(password)) {
    alert('Password must be between 1 and 10 characters and should contain special characters.');
    return;
  }

  // Redirect to currency converter page
  window.location.href = 'currency-converter.html';
});

document.querySelector('button[type="reset"]').addEventListener('click', function() {
  window.location.href = 'index.html';
});

// document.getElementById('converterForm')?.addEventListener('submit', async function(event) {
//   event.preventDefault();

//   const amount = document.getElementById('amount').value;
//   const fromCurrency = document.getElementById('fromCurrency').value;
//   const toCurrency = document.getElementById('toCurrency').value;

//   try {
//     const response = await fetch(`https://api.exchange-api.com/v4/latest/${fromCurrency}`);
//     if (!response.ok) throw new Error('Failed to fetch exchange rate');

//     const data = await response.json();
//     const rate = data.rates[toCurrency];

//     if (rate) {
//       document.getElementById('result').textContent = `Converted Amount: ${(amount * rate).toFixed(2)} ${toCurrency}`;
//     } else {
//       document.getElementById('result').textContent = `Conversion rate for ${toCurrency} not available.`;
//     }
//   } catch (error) {
//     document.getElementById('result').textContent = `Error: ${error.message}`;
//   }
// });
