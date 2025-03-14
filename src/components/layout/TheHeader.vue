<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">
  <router-link to="/">
    <img src="@/assets/images/logoUCBL.png" alt="Logo UCBL" class="logo-img" />
  </router-link>
</div>

      
      <nav class="navigation">
        <ul>
          <li><router-link to="/" class="nav-link">Accueil</router-link></li>
          <li><router-link to="/education" class="nav-link">Formation</router-link></li>
          <li><router-link to="/experience" class="nav-link">Expériences</router-link></li>
          <li><router-link to="/skills" class="nav-link">Compétences</router-link></li>
          <li><router-link to="/projects" class="nav-link">Projets</router-link></li>
          <li><router-link to="/hobbies" class="nav-link">Mes centres d'intérêt</router-link></li>
          <li><router-link to="/weather" class="nav-link">La météo du moment</router-link></li>
        </ul>
      </nav>
      
      <div class="contact-info">
        <a href="mailto:olivia.favard@gmail.com" class="contact-link">
          <i class="fas fa-envelope"></i> <!-- Vous aurez besoin de FontAwesome ou d'une autre bibliothèque d'icônes -->
        </a>
        <a href="tel:+33783775812" class="contact-link">
          <i class="fas fa-phone"></i>
        </a>
      </div>
      
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div class="mobile-menu" :class="{ 'active': mobileMenuOpen }">
        <ul>
          <li><router-link to="/" @click="closeMobileMenu">Accueil</router-link></li>
          <li><router-link to="/experience" @click="closeMobileMenu">Expériences</router-link></li>
          <li><router-link to="/education" @click="closeMobileMenu">Formation</router-link></li>
          <li><router-link to="/skills" @click="closeMobileMenu">Compétences</router-link></li>
          <li><router-link to="/projects" @click="closeMobileMenu">Projets</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Ajouté pour le positionnement du menu mobile */
  flex-wrap: wrap; /* Permet au menu mobile de s'étendre correctement */
}

.logo-img {
  width: 90px;  /* Ajuste la taille selon ton besoin */
  height: 90px;
  object-fit: contain; /* Permet de garder les proportions */
}


.navigation ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

.nav-link {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #70a9a1;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #70a9a1;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.router-link-active::after {
  width: 100%;
}

.router-link-active {
  color: #70a9a1;
}

.contact-info {
  display: flex;
  gap: 1rem;
}

.contact-link {
  color: #555;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #70a9a1;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.mobile-menu-btn span {
  width: 100%;
  height: 2px;
  background-color: #555;
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
  background-color: #f5f2ea;
  width: 100%; /* Utilise toute la largeur disponible */
  overflow: hidden;
  max-height: 0; /* Masqué par défaut */
  transition: max-height 0.3s ease;
  margin-top: 1rem; /* Ajoute un peu d'espace en haut */
  box-shadow:none; /* Supprime l'ombre interne */
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu li {
  margin: 1rem 0;
}

.mobile-menu a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  display: block;
  padding: 0.5rem 0;
}

.mobile-menu a:hover {
  color: #70a9a1;
}

@media (max-width: 768px) {
  .navigation {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .mobile-menu {
    display: block;
    order: 3; /* Place le menu après les autres éléments */
    flex-basis: 100%; /* Prend toute la largeur */
  }
  
  .mobile-menu.active {
    max-height: 400px;
    padding: 1rem 0; /* Ajoute du padding uniquement quand actif */
  }
  
}
</style>