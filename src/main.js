import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.css'; // Fichier CSS global

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faPhone, faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Ajouter les icônes à la bibliothèque
library.add(faUser, faPhone, faEnvelope, faGraduationCap, faLinkedin);

// Création de l'application Vue
const app = createApp(App);

// Installation de Pinia et du router
app.use(createPinia());
app.use(router);

// Enregistrer `font-awesome-icon` comme un composant global
app.component('font-awesome-icon', FontAwesomeIcon);

// Montage de l'application
app.mount('#app');
