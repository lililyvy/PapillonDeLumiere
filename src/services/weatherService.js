// Utilisation d'une API météo gratuite (WeatherAPI.com)
const API_KEY = '08a47fb033c67c40cdff75e80f34d772' // Vous devrez obtenir une clé gratuite
const BASE_URL = 'https://api.weatherapi.com/v1'

export async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}&lang=fr`)
    
    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo:', error)
    throw error
  }
}