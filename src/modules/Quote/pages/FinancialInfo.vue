<template>
  <div class="data-container">
    <header class="page-header">
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </div>
      <div class="logout-button-container">
        <button @click="logout" class="logout-button">Logout</button>
      </div>
    </header>
    <section class="currency-section">
      <h2>Moedas</h2>
      <div
        v-for="(currency, key) in data.results.currencies"
        :key="key"
        :class="{
          positive: currency.variation > 0,
          negative: currency.variation < 0
        }"
        class="currency-item"
      >
        <h3>{{ key }} - {{ currency.name }}</h3>
        <p class="buy">Buy: {{ currency.buy }}</p>
        <p class="sell">Sell: {{ currency.sell }}</p>
        <p class="variation">Variation: {{ currency.variation }}%</p>
      </div>
    </section>

    <section class="stock-section">
      <h2>Ações</h2>
      <div
        v-for="(stock, key) in data.results.stocks"
        :key="key"
        :class="{
          positive: stock.variation > 0,
          negative: stock.variation < 0
        }"
        class="stock-item"
      >
        <h3>{{ key }} - {{ stock.name }}</h3>
        <p class="location">Location: {{ stock.location }}</p>
        <p class="points">Points: {{ stock.points }}</p>
        <p class="variation">Variation: {{ stock.variation }}%</p>
      </div>
    </section>
  </div>
</template>

<script>
import QuotesService from '../services/QuotesService'

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
  methods: {
    logout() {
      localStorage.removeItem('userToken')
      this.$router.push('/login')
    }
  },
  async mounted() {
    this.data = await QuotesService.fetchData()
  }
}
</script>

<style>
:root {
  --primary-color: #657be9;
  --secondary-color: #131b24;
  --positive-color: #66db99;
  --negative-color: #a13232;
  --background-color: #f9f9f9;
  --text-color: #000000;
  --border-color: #eee;
  --button-bg-color: #dc3545;
  --button-hover-bg-color: #c82333;
}

body,
html {
  font-family: 'Roboto', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
}

.data-container {
  position: relative;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  padding-top: 140px;
}

.page-header {
  margin: 10px;
}

.logo-container {
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
}

.logo {
  height: 100px;
  width: auto;
  border-radius: 5px;
}

.currency-item,
.stock-item {
  border: 1px solid var(--border-color);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: var(--background-color);
}

.positive {
  background-color: var(--positive-color);
}

.negative {
  background-color: var(--negative-color);
}

.logout-button-container {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
}

.logout-button {
  padding: 5px 15px;
  background-color: var(--button-bg-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: var(--button-hover-bg-color);
}

.currency-section,
.stock-section {
  margin-bottom: 20px;
}

h2 {
  color: var(--secondary-color);
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 10px;
}

.buy,
.sell,
.location,
.points {
  margin: 5px 0;
}

.buy,
.sell {
  color: var(--secondary-color);
}

.variation {
  font-style: italic;
}
</style>
