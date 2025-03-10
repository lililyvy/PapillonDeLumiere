import { defineStore } from 'pinia';

export const useExperienceStore = defineStore('experience', {
    state: () => ({
      experiences: [
        {
            id: 1,
            title: "Stage biomédical 📡  - Médipôle Lyon-Villeurbanne",
            date: "Avril-Mai 2024",
            location: "Lyon, France",
            description: "Maintenance préventive et curative d’appareils biomédicaux.",
            tasks: [
              "Maintenances préventives et curatives des dispositifs médicaux",
              "Observation d'interventions sur des dispositifs et mise en place de dispositifs par des prestataires",
              "Utilisation et manipulation d'un GMAO (CARL)",
              "Découverte des différents métiers/missions/fonctions dans un service biomédical"
            ],
            image: "/src/assets/images/medipole.jpg",
            pdf: "/rapports/stage_biomedical.pdf" // Ajout du lien vers le rapport
        },
        {
            id: 2,
            title: "Emploi permanent de remplacement d'agent en résidence pour personnes âgées autonomes 👵 - Résidence autonomie Marianne",
            date: "2023-2025",
            location: "Mions",
            description: "Accueil, veille et animation auprès des résidents, gestion des urgences.",
            tasks: [
              "Organisation d'activités pour les résidents",
              "Surveillance et assistance en cas d’urgence",
              "Accueil des familles et gestion des demandes"
            ],
            image: "/src/assets/images/residence.jpg"
        },
        {
            id: 3,
            title: "Stage en génétique 🧬 - HFME de Bron",
            date: "Avril-Mai 2023",
            location: "Bron, France",
            description: "Observation en cytogénétique, en génétique clinique et en CBC (Culture Biologique Cellulaire)",
            tasks: [
              "Observation des techniques de cytogénétique permettant le diagnostic et la recherche en génétique",
              "Observation des activités de l'unité de consultation de génétique clinique ",
              "Observation des techniques de laboratoire de CBC (Culture biologique Cellulaire)"
            ],
            image: "/src/assets/images/genetique.png",
            pdf: "/rapports/stage_genetique.pdf" // Ajout du lien vers le rapport
        },
        {
            id: 4,
            title: "Cours particuliers ✏️ - Soutien scolaire",
            date: "Depuis 2022",
            location: "France",
            description: "Aide aux élèves en collège, lycée et BTS.",
            tasks: [
              "Cours particuliers et aides aux devoirs en mathématiques principalement ainsi qu'en SVT, français, physique chimie, histoire géographie et espagnol",
              "Reformulation des notions difficiles, pédagogie",
              "Préparation aux examens et suivi des progrès"
            ],
            image: "/src/assets/images/soutien.png"
        },
        {
            id: 5,
            title: "Tutorat 🎓 - UCBL",
            date: "Depuis 2023",
            location: "Université Lyon 1",
            description: "Tutrice pour L1 et L2",
            tasks: [
              "Préparation de cours, d'exercices, de sujets blancs et réponses aux questions",
              "Tutrice en: bases en sciences de la vie (biologie cellulaire, biochimie, génétique, Médicament, histologie), physiologie (pour L1 puis L2), Dispositifs médicaux, électricité, électronique, maintenance des dispositifs médicaux et psychologie de la santé et du handicap."
            ],
            image: "/src/assets/images/association.png"
        }
      ]
    }),

    getters: {
      getExperiences: (state) => state.experiences
    }
});
