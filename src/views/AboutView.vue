<template>
  <div class="about">
    <h1>👋 À propos de moi</h1>
    
    <!-- Introduction -->
    <div class="intro">
      <p>
        Je m'appelle <strong>Olivia Favard</strong>, étudiante en troisième année de Licence Sciences pour la Santé.  
        Passionnée par l'ingénierie biomédicale, mon objectif est d'évoluer dans le domaine des dispositifs médicaux.
      </p>
    </div>

    <!-- Pourquoi cette voie ? -->
    <div class="section">
      <h2>🎯 Pourquoi la santé et l'ingénierie biomédicale ?</h2>
      <p>
        J'ai toujours été fascinée par le lien entre la technologie et la santé. Mon parcours en <strong>Licence Sciences pour la Santé</strong> 
        m’a permis d’explorer divers domaines allant de la <strong>physiopathologie</strong> à l’<strong>intelligence artificielle appliquée à la médecine</strong>.
      </p>
    </div>

    <!-- Passions et loisirs -->
    <div class="section">
      <h2>💡 Mes passions & loisirs</h2>
      <div class="hobbies">
        <div class="hobby-card">
          <img src="@/assets/icons/music2.svg" alt="Musique" />
          <p>Musique</p>
        </div>
        <div class="hobby-card">
          <img src="@/assets/icons/travel.svg" alt="Voyage" />
          <p>Voyages</p>
        </div>
        <div class="hobby-card">
          <img src="@/assets/icons/movies.svg" alt="Cinéma" />
          <p>Cinéma</p>
        </div>
        <div class="hobby-card">
          <img src="@/assets/icons/book1.svg" alt="Lecture" />
          <p>Lecture</p>
        </div>
      </div>
      <router-link to="/hobbies" class="btn">Découvrir mes loisirs</router-link>
    </div>

    <!-- Navigation vers les autres pages -->
    <div class="section">
      <h2>🔗 En savoir plus</h2>
      <div class="buttons">
        <router-link to="/experience" class="btn">Mon expérience</router-link>
        <router-link to="/projects" class="btn">Mes projets</router-link>
        <router-link to="/education" class="btn">Ma formation</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

h1 {
  color: #ba5a31;
  margin-bottom: 20px;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.intro p {
  font-size: 18px;
  color: #333;
}

.section {
  background: #f5f0e1;
  padding: 15px;
  margin-top: 20px;
  border-radius: 8px;
}

.hobbies {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.hobby-card {
  background: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100px;
}

.hobby-card img {
  width: 50px;
  height: 50px;
}

.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #70a9a1;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;
}

.btn:hover {
  background-color: #ba5a31;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}
</style>
