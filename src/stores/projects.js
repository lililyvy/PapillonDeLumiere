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
        image: '/src/assets/images/data_viz.png'
      },
      {
        id: 2,
        title: "Site Web - Le Pavé d'Or",
        description: 'Création d’un site WordPress pour une boulangerie, avec gestion de projet et arborescence.',
        category: 'informatique',
        pdf: '/rapports/le_pave_dor.pdf',
        image: '/src/assets/images/boulangerie.png'
      },
      {
        id: 3,
        title: 'Portfolio Personnel',
        description: 'Développement de mon site web personnel en Vue.js et GitHub Pages.',
        category: 'informatique',
        pdf: '',
        image: '/src/assets/images/portfolio.png'
      },
      
      // Projets d’analyse et innovation
      {
        id: 4,
        title: "Outil d'évaluation pour la Myopathie de Duchenne",
        description: 'Développement d’un outil interactif pour accompagner les patients.',
        category: 'Projets d’analyse et innovation',
        pdf: '/rapports/myopathie_duchenne.pdf',
        image: '/src/assets/images/myopathie.png'
      },
      {
        id: 5,
        title: 'Article Scientifique en anglais sur l’Immunothérapie',
        description: 'Rédaction d’un article sur les avancées en immunothérapie et IA.',
        category: 'Projets d’analyse et innovation',
        pdf: '/rapports/immunotherapy.pdf',
        image: '/src/assets/images/immuno.png'
      },
      {
        id: 6,
        title: 'Analyse ALARM d’un événement hospitalier',
        description: 'Analyse systémique pour identifier les causes d’un événement indésirable.',
        category: 'Projets d’analyse et innovation',
        pdf: '/rapports/analyse_alarm.pdf',
        image: '/src/assets/images/alarm.png'
      },
      {
        id: 7,
        title: 'Séance d’E-ETP pour collégiens allergiques',
        description: 'Création d’un serious game pour apprendre à réagir à un choc anaphylactique.',
        category: 'Projets d’analyse et innovation',
        pdf: '/rapports/seance_eetp.pdf',
        image: '/src/assets/images/eetp.png'
      },
      {
        id: 8,
        title: 'Plaquette parcours patient pédiatrique',
        description: 'Conception d’une plaquette expliquant les recommandations de la SFAR et ADARPEF.',
        category: 'Projets d’analyse et innovation',
        pdf: '/rapports/parcours_patient_pediatrique.pdf',
        image: '/src/assets/images/parcours_patient.png'
      },
      
      // Stages
      {
        id: 9,
        title: 'Stage en Génétique - HFME Lyon',
        description: 'Rapport de stage sur l’analyse génétique et les diagnostics.',
        category: 'stages',
        link: '/experiences',
        pdf: '/rapports/stage_genetique.pdf',
        image: '/src/assets/images/stage_genetique.png'
      },
      {
        id: 10,
        title: 'Stage Biomédical - Médipôle Lyon-Villeurbanne',
        description: 'Maintenance de dispositifs médicaux et gestion des équipements.',
        category: 'stages',
        link: '/experiences',
        pdf: '/rapports/stage_biomedical.pdf',
        image: '/src/assets/images/biomedical.png'
      }
    ]
  })
});