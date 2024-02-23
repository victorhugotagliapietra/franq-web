<template>
  <div class="data-container">
    <section class="currency-section">
      <h2>Currencies</h2>
      <div v-for="(currency, key) in data.results.currencies" :key="key" class="currency-item">
        <h3>{{ key }} - {{ currency.name }}</h3>
        <p class="buy">Buy: {{ currency.buy }}</p>
        <p class="sell">Sell: {{ currency.sell }}</p>
        <p class="variation">Variation: {{ currency.variation }}%</p>
      </div>
    </section>

    <section class="stock-section">
      <h2>Stocks</h2>
      <div v-for="(stock, key) in data.results.stocks" :key="key" class="stock-item">
        <h3>{{ key }} - {{ stock.name }}</h3>
        <p class="location">Location: {{ stock.location }}</p>
        <p class="points">Points: {{ stock.points }}</p>
        <p class="variation">Variation: {{ stock.variation }}%</p>
      </div>
    </section>
  </div>
</template>

<script>
import QuotesService from '../services/QuotesService';

export default {
  name: 'FinancialInfo',
  data() {
    return {
      data: {
        results: {
          currencies: [],
          stocks: []
        }
      }
    }
  },
  async mounted() {
    this.data  = await QuotesService.fetchData();
  }
}
</script>

<style>
  .data-container {
    font-family: 'Arial', sans-serif;
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }

  .currency-section, .stock-section {
    margin-bottom: 20px;
  }

  h2 {
    color: #333;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
  }

  .currency-item, .stock-item {
    background-color: #f9f9f9;
    border: 1px solid #eee;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .currency-item h3, .stock-item h3 {
    color: #007BFF;
  }

  .buy, .sell, .location, .points {
    margin: 5px 0;
  }

  .buy {
    color: #28a745;
  }

  .sell {
    color: #dc3545;
  }

  .variation {
    font-style: italic;
  }
</style>
