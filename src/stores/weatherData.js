import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useWeatherStore = defineStore('weatherData', () => {
  // État
  const weatherData = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const apiKey = ref('7effec432386e5ad99749b1fddb9ac76'); // Remplacez par votre clé API

  // Getters sous forme de computed
  const location = computed(() => 
    weatherData.value ? `${weatherData.value.location.name}, ${weatherData.value.location.country}` : ''
  );
  
  const currentTemperature = computed(() => 
    weatherData.value ? weatherData.value.current.temperature : null
  );
  
  const weatherIcon = computed(() => 
    weatherData.value && weatherData.value.current.weather_icons ? 
    weatherData.value.current.weather_icons[0] : null
  );
  
  const weatherCondition = computed(() => 
    weatherData.value && weatherData.value.current.weather_descriptions ? 
    weatherData.value.current.weather_descriptions[0] : ''
  );

  const humidity = computed(() => 
    weatherData.value ? weatherData.value.current.humidity : null
  );

  const windSpeed = computed(() => 
    weatherData.value ? `${weatherData.value.current.wind_speed} km/h ${weatherData.value.current.wind_dir}` : null
  );

  const feelsLike = computed(() => 
    weatherData.value ? weatherData.value.current.feelslike : null
  );

  // Actions
  async function fetchWeather(city = 'Lyon') {
    loading.value = true;
    error.value = null;
    
    try {
      const url = `http://api.weatherstack.com/current?access_key=${apiKey.value}&query=${city}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(`Erreur API: ${data.error.info}`);
      }
      
      weatherData.value = data;
    } catch (err) {
      error.value = `Impossible de charger les données météo: ${err.message}`;
      console.error('Erreur météo:', err);
    } finally {
      loading.value = false;
    }
  }

  function setApiKey(key) {
    apiKey.value = key;
  }

  return {
    // État
    weatherData,
    loading,
    error,
    
    // Getters
    location,
    currentTemperature,
    weatherIcon,
    weatherCondition,
    humidity,
    windSpeed,
    feelsLike,
    
    // Actions
    fetchWeather,
    setApiKey
  };
});