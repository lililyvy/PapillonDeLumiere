// stores/hobbies.js
import { defineStore } from 'pinia';

export const useHobbiesStore = defineStore('hobbies', {
  state: () => ({
    hobbies: [
      {
        id: 'films',
        title: '🎬 Films',
        description: "Mes films préférés par genre.",
        categories: [
          {
            genre: 'Comédies',
            movies: [
              { src: 'images/le-prenom.png', alt: 'Le Prénom' },
              { src: 'images/shrek.png', alt: 'Shrek' },
              { src: 'images/bridget-jones.png', alt: 'Bridget Jones' }
            ]
          },
          {
            genre: 'Romances',
            movies: [
              { src: 'images/lalaland.png', alt: 'La La Land' },
              { src: 'images/noublie-jamais.png', alt: 'N’oublie jamais' },
              { src: 'images/10-bonnes-raisons.png', alt: '10 bonnes raisons de te larguer' },
              { src: 'images/500-jours.png', alt: '500 jours ensemble' },
              { src: 'images/orgueil-prejuges.png', alt: 'Orgueil et préjugés' },
              { src: 'images/la-boum.png', alt: 'La Boum' }
            ]
          },
          {
            genre: 'Drames/Thrillers',
            movies: [
              { src: 'images/fight-club.png', alt: 'Fight Club' },
              { src: 'images/silence-agneaux.png', alt: 'Le Silence des Agneaux' },
              { src: 'images/poetes-disparus.png', alt: 'Le Cercle des Poètes Disparus' },
              { src: 'images/benjamin-button.png', alt: 'L’Étrange Histoire de Benjamin Button' },
              { src: 'images/ligne-verte.png', alt: 'La Ligne Verte' },
              { src: 'images/whiplash.png', alt: 'Whiplash' }
            ]
          },
          {
            genre: 'Science-fiction',
            movies: [
              { src: 'images/star-wars.png', alt: 'Star Wars' },
              { src: 'images/marvel.png', alt: 'Marvel' },
              { src: 'images/men-in-black.png', alt: 'Men In Black' }
            ]
          },
          {
            genre: 'Aventure',
            movies: [
              { src: 'images/seigneur-anneaux.png', alt: 'Le Seigneur des Anneaux' },
              { src: 'images/pirates-caraibes.png', alt: 'Pirates des Caraïbes' },
              { src: 'images/harry-potter.png', alt: 'Harry Potter' }
            ]
          },
          {
            genre: 'Action',
            movies: [
              { src: 'images/bullet-train.png', alt: 'Bullet Train' },
              { src: 'images/james-bond.png', alt: 'James Bond' },
              { src: '/assets/images/madmax.png', alt: 'Mad Max' }
            ]
          }
        ]
      },
      {
        id: 'series',
        title: '📺 Séries',
        description: "Quelques séries que j'aime regarder.",
        images: [
          { src: 'images/the-office.png', alt: 'The Office' },
          { src: 'images/greys-anatomy.png', alt: 'Grey’s Anatomy' },
          { src: 'images/prison-break.png', alt: 'Prison Break' }
        ]
      },
      {
        id: 'animes',
        title: '🎥 Animes',
        description: "Quelques animes marquants.",
        images: [
          { src: 'images/attaque-titans.png', alt: 'L’Attaque des Titans' },
          { src: 'images/naruto.png', alt: 'Naruto' },
          { src: 'images/your-lie-in-april.png', alt: 'Your Lie in April' }
        ]
      }
    ]
  }),
  getters: {
    getHobbies: (state) => state.hobbies
  }
});