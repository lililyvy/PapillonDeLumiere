<template> 
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-left">
          <img src="@/assets/images/profile-placeholder.jpg" alt="Olivia Favard" class="profile-pic" />
        </div>
        <div class="hero-right">
          <h1>Olivia Favard</h1>
          <h2>Étudiante en Sciences pour la Santé 🫁</h2>
          
          <!-- Boutons CV avec liens directs -->
          <div class="cv-buttons">
            <a href="/rapports/cv_of.pdf" target="_blank" class="btn primary">
              <span class="btn-icon">📄</span> CV Français
            </a>
            <a href="/rapports/cv_of_english.pdf" target="_blank" class="btn secondary">
              <span class="btn-icon">📄</span> CV Anglais
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Présentation rapide -->
    <section class="about">
      <div class="about-text">
        <h2>À propos de moi 👋</h2>
        <p>J'aime connaître le corps humain, comprendre son fonctionnement et le fonctionnement des technologies de la santé et travailler à trouver des solutions à ses possibles problématiques. </p>
        <p>C'est pourquoi travailler dans la santé, la recherche et dans le biomédical est ce qui m'anime ! 🔬 </p>
      </div>
    </section>

    <!-- Infos principales en cartes -->
    <section class="highlights">
      <router-link to="/education" class="card">
        <h3>📚 Formation</h3>
        <p>Venez découvrir en quoi consiste ma Licence !</p>
      </router-link>
      <router-link to="/experience" class="card">
        <h3>🏥 Expérience</h3>
        <p>Quelles sont les expériences qui m'ont façonnée ?</p>
      </router-link>
      <router-link to="/skills" class="card">
        <h3>🧠 Compétences</h3>
        <p>Tous mes atouts fards !</p>
      </router-link>
      <router-link to="/projects" class="card">
        <h3>🤝 Projets</h3>
        <p>Quelques projets auxquels j'ai participé</p>
      </router-link>
    </section>

    <!-- Passions & loisirs -->
    <section class="hobbies">
      <h2>💡 Mes passions</h2>
      <div class="hobby-list">
        <span>🎵 Musique</span>
        <span>✈️ Voyages</span>
        <span>🎬 Cinéma</span>
        <span>📖 Lecture</span>
      </div>
      <router-link to="/hobbies" class="btn primary">En savoir plus</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView"
};
</script>

<style scoped>
.home-container {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-color: #f5f2ea;
  min-height: 100vh;
}

/* Hero Section */
.hero {
  background: #70a9a1;
  color: white;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-content {
  display: flex;
  align-items: center;
  gap: 20px;
}
.hero-left .profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
}
.hero-right h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}
.hero-right h2 {
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 10px;
}

/* Boutons de CV */
.cv-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}
.btn-icon {
  margin-right: 5px;
}

/* À propos */
.about {
  padding: 40px;
  background: white;
}

/* Points forts */
.highlights {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 40px;
}
.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: 0.3s;
}
.card:hover {
  transform: scale(1.05);
}

/* Hobbies */
.hobbies {
  padding: 40px;
}
.hobby-list {
  display: flex;
  justify-content: center;
  gap: 15px;
}
.hobby-list span {
  background: #ba5a31;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

/* Boutons */
.btn {
  display: inline-block;
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}
.primary {
  background-color: #70a9a1;
  color: white;
}
.primary:hover {
  background-color: #5d8f88;
}
.secondary {
  background-color: white;
  color: #70a9a1;
  border: 1px solid #70a9a1;
}
.secondary:hover {
  background-color: #f0f8f7;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  .highlights {
    flex-direction: column;
  }
  .cv-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>