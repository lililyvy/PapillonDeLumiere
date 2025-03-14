// stores/hobbies.js
import { defineStore } from 'pinia';


export const useHobbiesStore = defineStore('hobbies', {
  state: () => ({
    hobbies: [
      {
        id: 'films',
        title: '🎬 Films',
        description: "Mon père est un cinéphile et a su me transmettre sa passion tout au long des années en me montrant ses films fétiches et en m‘emmenant régulièrement au cinéma.",
        categories: [
          {
            genre: 'Comédies',
            movies: [
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773999/le-prenom_hrfoe1.png', alt: 'Le Prénom' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774008/shrek_iynpcl.png', alt: 'Shrek' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773996/bridget-jones_sdahp1.png', alt: 'Bridget Jones' }
            ]
          },
          {
            genre: 'Romances',
            movies: [
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773999/lalaland_dowdgd.png', alt: 'La La Land' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774001/noublie-jamais_yedjlw.png', alt: 'N’oublie jamais' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773996/10-bonnes-raisons_b1fjr5.png', alt: '10 bonnes raisons de te larguer' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773998/500-jours_bpypif.png', alt: '500 jours ensemble' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774001/orgueil-prejuges_pihdyg.png', alt: 'Orgueil et préjugés' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773999/la-boum_ehstwy.png', alt: 'La Boum' }
            ]
          },
          {
            genre: 'Drames/Thrillers',
            movies: [
              { src: 'images/fight-club.png', alt: 'Fight Club' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774008/silence-agneaux_kvq21f.png', alt: 'Le Silence des Agneaux' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774007/poetes-disparus_df0ok8.png', alt: 'Le Cercle des Poètes Disparus' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773998/benjamin-button_drtq3j.png', alt: 'L’Étrange Histoire de Benjamin Button' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774000/ligne-verte_puws9q.png', alt: 'La Ligne Verte' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774008/whiplash_u5znqn.png', alt: 'Whiplash' }
            ]
          },
          {
            genre: 'Science-fiction',
            movies: [
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774008/star-wars_xchun5.png', alt: 'Star Wars' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774000/marvels_ndcixy.png', alt: 'Marvel' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774001/men-in-black_jmjej8.png', alt: 'Men In Black' }
            ]
          },
          {
            genre: 'Aventure',
            movies: [
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774008/seigneur-anneaux_lwwcr6.png', alt: 'Le Seigneur des Anneaux' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774007/pirates-caraibes_xukaud.png', alt: 'Pirates des Caraïbes' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773999/harry-potter_oelavc.png', alt: 'Harry Potter' }
            ]
          },
          {
            genre: 'Action',
            movies: [
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773996/bullet-train_wityus.pngg', alt: 'Bullet Train' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773999/james-bond_j8cnt7.png', alt: 'James Bond' },
              { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774000/madmax_wypfxm.png', alt: 'Mad Max' }
            ]
          }
        ]
      },
      {
        id: 'series',
        title: '📺 Séries',
        description: "Quelques séries que j'aime regarder.",
        images: [
          { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774008/the-office_c2e3hc.png', alt: 'The Office' },
          { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773999/greys-anatomy_xpi7ri.png', alt: 'Grey’s Anatomy' },
          { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774007/prison-break_iqaneb.png', alt: 'Prison Break' }
        ]
      },
      {
        id: 'animes',
        title: '🎥 Animes',
        description: "Quelques animes marquants.",
        images: [
          { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773997/attaque-titans_mrsdju.png', alt: 'L’Attaque des Titans' },
          { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774001/naruto_nvdu1w.png', alt: 'Naruto' },
          { src: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774013/your-lie-in-april_duakfv.png', alt: 'Your Lie in April' }
        ]
      }
    ]
  }),
  getters: {
    getHobbies: (state) => state.hobbies
  }
});
