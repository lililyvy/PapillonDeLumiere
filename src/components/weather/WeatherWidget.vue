<template>
  <div class="weather-widget">
    <h3>Météo actuelle</h3>
    <div v-if="loading" class="loading">
      Chargement des données météo...
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else-if="weatherData" class="weather-content">
      <div class="weather-location">
        <p>{{ location }}</p>
      </div>
      <div class="weather-info">
        <div class="weather-icon" v-if="weatherIcon">
          <img :src="weatherIcon" alt="Condition météo" />
        </div>
        <div class="weather-data">
          <p class="temperature">{{ currentTemperature }}°C</p>
          <p class="condition">{{ weatherCondition }}</p>
        </div>
      </div>
      
      <!-- Informations supplémentaires (optionnelles) -->
      <div class="weather-details">
        <div class="detail-item">
          <span class="detail-label">Ressenti</span>
          <span class="detail-value">{{ feelsLike }}°C</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Humidité</span>
          <span class="detail-value">{{ humidity }}%</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Vent</span>
          <span class="detail-value">{{ windSpeed }}</span>
        </div>
      </div>
    </div>
    <div v-else class="no-data">
      <p>Aucune donnée météo disponible</p>
      <button @click="loadWeather" class="refresh-btn">Charger les données</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useWeatherStore } from '@/stores/weatherData';

const weatherStore = useWeatherStore();

const loading = computed(() => weatherStore.loading);
const error = computed(() => weatherStore.error);
const weatherData = computed(() => weatherStore.weatherData);
const location = computed(() => weatherStore.location);
const currentTemperature = computed(() => weatherStore.currentTemperature);
const weatherIcon = computed(() => weatherStore.weatherIcon);
const weatherCondition = computed(() => weatherStore.weatherCondition);
const humidity = computed(() => weatherStore.humidity);
const windSpeed = computed(() => weatherStore.windSpeed);
const feelsLike = computed(() => weatherStore.feelsLike);

async function loadWeather() {
  await weatherStore.fetchWeather('Lyon'); 
}

onMounted(() => {
  loadWeather();
});
</script>

<style scoped>
.weather-widget {
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

h3 {
  color: #70a9a1;
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
}

.loading, .error, .no-data {
  text-align: center;
  padding: 1rem;
  color: #555;
}

.error {
  color: #e74c3c;
}

.weather-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather-location p {
  margin: 0 0 0.5rem 0;
  font-weight: 500;
  color: #333;
}

.weather-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.weather-icon img {
  width: 64px;
  height: 64px;
}

.weather-data {
  text-align: center;
}

.temperature {
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.condition {
  margin: 0;
  color: #555;
}

/* Styles pour les détails supplémentaires */
.weather-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  width: 100%;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}

.detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.detail-label {
  font-size: 0.75rem;
  color: #888;
  margin-bottom: 0.25rem;
}

.detail-value {
  font-weight: 500;
  color: #333;
}

.refresh-btn {
  background-color: #70a9a1;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 0.5rem;
  transition: background-color 0.3s ease;
}

.refresh-btn:hover {
  background-color: #5d8f88;
}

@media (max-width: 480px) {
  .weather-details {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>