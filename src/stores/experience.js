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
            image: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774000/medipole_wdgpe9.jpg",
            pdf: "/public/rapports/stage_biomedical.pdf" 
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
            image: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774007/residence_xtppar.jpg"
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
            image: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773998/genetique_fdwddw.png",
            pdf: "/public/rapports/stage_genetique.pdf" 
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
            image: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741774008/soutien_zychwz.png"
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
            image: "https://res.cloudinary.com/dwtatn7tk/image/upload/v1741773998/association_s9ifuw.png"
        }
      ]
    }),

    getters: {
      getExperiences: (state) => state.experiences
    }
});
