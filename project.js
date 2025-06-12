 // Static exchange rates (as of now, you can update or fetch from an API)
    const exchangeRates = {
      USD: { USD: 1, INR: 83.5, EUR: 0.92, JPY: 157.5 },
      INR: { USD: 0.012, INR: 1, EUR: 0.011, JPY: 1.88 },
      EUR: { USD: 1.09, INR: 90.8, EUR: 1, JPY: 171.4 },
      JPY: { USD: 0.0064, INR: 0.53, EUR: 0.0058, JPY: 1 }
    };

    function convertCurrency() {
      const amount = parseFloat(document.getElementById("amount").value);
      const from = document.getElementById("fromCurrency").value;
      const to = document.getElementById("toCurrency").value;
      const resultDiv = document.getElementById("result");

      if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Please enter a valid amount.";
        resultDiv.style.color = "red";
        return;
      }

      const rate = exchangeRates[from][to];
      const converted = (amount * rate).toFixed(2);
      resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
      resultDiv.style.color = "green";
    }