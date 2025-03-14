import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: [
      // Projets informatiques
      {
        id: 1,
        title: 'Data Visualisation - Sciences pour la Santé',
        description: 'Analyse des raisons du déséquilibre filles/garçons en Licence Sciences pour la Santé.',
        category: 'informatique',
        pdf: '/rapports/data_visualisation.pdf',
        image: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773998/data_viz_w7bmjx.png'
      },
      {
        id: 2,
        title: "Site Web - Le Pavé d'Or",
        description: 'Création d’un site WordPress pour une boulangerie, avec gestion de projet et arborescence.',
        category: 'informatique',
        pdf: '/rapports/le_pave_dor.pdf',
        image: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773996/boulangerie_p1nuyj.png'
      },
      {
        id: 3,
        title: 'Portfolio Personnel',
        description: 'Développement de mon site web personnel en Vue.js et GitHub Pages.',
        category: 'informatique',
        pdf: '',
        image: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774007/portfolio_qqofga.png'
      },
      
      // Projets d’analyse et innovation
      {
        id: 4,
        title: "Outil d'évaluation pour la Myopathie de Duchenne",
        description: 'Développement d’un outil interactif pour accompagner les patients atteint de la dystrophie de Duchenne.',
        category: 'Projets d’analyse et innovation',
        pdf: '/rapports/myopathie_duchenne.pdf',
        image: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774001/myopathie_ibqqmz.png'
      },
      {
        id: 5,
        title: 'Article Scientifique en anglais sur l’Immunothérapie',
        description: "Rédaction d’un article sur les avancées en immunothérapie et l'IA.",
        category: 'Projets d’analyse et innovation',
        pdf: '/rapports/immunotherapy.pdf',
        image: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773999/immuno_yaq8mk.png'
      },
      {
        id: 6,
        title: 'Analyse ALARM d’un événement hospitalier',
        description: 'Analyse systémique pour identifier les causes d’un événement indésirable.',
        category: 'Projets d’analyse et innovation',
        pdf: '/rapports/analyse_alarm.pdf',
        image: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773996/alarm_fa9jfu.png'
      },
      {
        id: 7,
        title: 'Séance d’E-ETP pour collégiens allergiques',
        description: 'Création d’un serious game pour apprendre à réagir à un choc anaphylactique.',
        category: 'Projets d’analyse et innovation',
        pdf: '/rapports/seance_eetp.pdf',
        image: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773998/eetp_ejwghk.png'
      },
      {
        id: 8,
        title: "Plaquette matérialisation parcours patient pédiatrique avec l'entreprise Dubourdon Production",
        description: 'Conception d’une plaquette à destination des établissements de santé afin de matérialiser le parcours patient pédiatrique.',
        category: 'Projets d’analyse et innovation',
        pdf: '/rapports/parcours_patient_pediatrique.pdf',
        image: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774001/parcours_patient_ukwign.png'
      },
      
      // Stages
      {
        id: 9,
        title: 'Stage en Génétique - HFME Lyon',
        description: 'Rapport de stage sur l’analyse génétique et les diagnostics.',
        category: 'stages',
        link: '/experiences',
        pdf: '/rapports/stage_genetique.pdf',
        image: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774008/stage_genetique_gnj30w.png'
      },
      {
        id: 10,
        title: 'Stage Biomédical - Médipôle Lyon-Villeurbanne',
        description: 'Maintenance de dispositifs médicaux et gestion des équipements.',
        category: 'stages',
        link: '/experiences',
        pdf: '/rapports/stage_biomedical.pdf',
        image: 'https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773997/biomedical_tqbbcp.png'
      }
    ]
  })
});