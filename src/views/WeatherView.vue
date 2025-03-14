<template>
    <div class="weather-page">
      <h1>🌤️ Météo à Lyon</h1>
      <WeatherWidget />
    </div>
  </template>
  
  <script setup>
  import WeatherWidget from '@/components/weather/WeatherWidget.vue';
  </script>
  
  <style scoped>
  /* 🌟 Structure de la page */
  .weather-page {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    animation: fadeIn 0.6s ease-in-out;
    background: none; 
  }
  
  /* 🌟 Titre */
  h1 {
    color: #70a9a1;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  
  /* 🌟 Animation au chargement */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* 🌟 Responsive */
  @media (max-width: 768px) {
    .weather-page {
      padding: 1.5rem;
    }
  
    h1 {
      font-size: 1.8rem;
    }
  }
  
  @media (max-width: 480px) {
    .weather-page {
      padding: 1rem;
    }
  
    h1 {
      font-size: 1.6rem;
    }
  }
  </style>
  