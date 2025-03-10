// skills.js
import { defineStore } from 'pinia';

export const useSkillsStore = defineStore('skills', {
  state: () => ({
    categories: {
      'Techniques': [
        'Analyse de données et documents scientifiques',
        'Lecture de papier scientifiques',
        'Coder en Python/HTML/CSS/R/SQL',
        'Mobilisation de connaissances',
        'Anglais (B2) - TOEIC: 930',
        'Permis de conduire',
        'Rédaction'
      ],
      'Organisationnelles': [
        'Capacité à fixer des priorités',
        'Gestion du temps',
        'Coordination d’équipe',
        'Auto-organisation',
        'Esprit de synthèse'
      ],
      'Relationnelles': [
        'Sociabilité et communication efficace',
        'Travail en équipe',
        'Adaptation du langage',
        'Écoute active',
        'Empathie et compréhension des autres'
      ],
      'D’adaptation': [
        'Réagir en cas d’urgence',
        'Adaptation et versatilité',
        'Capacité à apprendre rapidement',
        'Innovation et créativité'
      ]
    }
  })
});
