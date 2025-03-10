<template>
  <div class="education">
    <h1>🎓 Ma Formation Académique</h1>

    <DegreeCard
      title="Baccalauréat Mathématiques - SVT option Maths Expertes 🎓"
      year="2019-2022"
      school="Lycée Condorcet - Saint-Priest"
      mention="Très Bien"
      :isExpandable="false"
    />

    <DegreeCard
      title="Licence Sciences pour la Santé 🫀"
      year="2022-2025"
      school="Université Claude Bernard Lyon 1"
      :isExpandable="true"
    >
      <h3>🔬 Sciences Fondamentales</h3>
      <ul>
        <li>Physiologie et pathologie des grandes fonctions</li>
        <li>Neurosciences et cognition</li>
        <li>Biologie :
          <ul>
            <li>Biologie Cellulaire, Biochimie, Génétique, Histologie, Pharmacologie</li>
            <li>Biologie appliquée : Hématologie, Immunologie, Virologie, Bactériologie, Parasitologie, Mycologie</li>
          </ul>
        </li>
      </ul>

      <h3>⚙️ Technologies et Ingénierie Biomédicale</h3>
      <ul>
        <li>Instrumentation biomédicale</li>
        <li>Dispositifs médicaux</li>
        <li>Électronique et électricité</li>
      </ul>

      <h3>📊 Informatique et Analyse de Données</h3>
      <ul>
        <li>Data Science :
          <ul>
            <li>Dataviz, moteur de recherche</li>
            <li>Catégorisation de texte et d’image avec CNN et RNN</li>
            <li>TensorFlow, Intelligence Artificielle, Réseaux de neurones</li>
          </ul>
        </li>
        <li>Informatique :
          <ul>
            <li>Python, SQL, HTML, CSS, R, Vue.js, Vite, GitHub  
              <router-link to="/projects">(Voir mes projets)</router-link>
            </li>
          </ul>
        </li>
        <li>Mathématiques et Statistiques</li>
      </ul>

      <h3>📑 Gestion et Qualité en Santé</h3>
      <ul>
        <li>Méthodologie de l’évaluation et contrôle qualité :
          <ul>
            <li>Métrologie, Norme ISO, Qualité</li>
          </ul>
        </li>
        <li>Gestion de projet  
          <router-link to="/projects">(Voir mes projets)</router-link>
        </li>
      </ul>

      <h3>🏥 Santé et Société</h3>
      <ul>
        <li>Éducation thérapeutique du patient (ETP)  
          <router-link to="/projects">(Voir mes projets)</router-link>
        </li>
        <li>Santé publique :
          <ul>
            <li>Promotion et prévention</li>
            <li>Connaissance du secteur social et médico-social</li>
            <li>Politiques publiques</li>
          </ul>
        </li>
        <li>Droit et éthique en santé</li>
        <li>Conséquences juridiques des innovations en santé</li>
        <li>Sociologie et Anthropologie de la santé et du handicap</li>
        <li>Sciences Humaines et Sociales</li>
      </ul>
    </DegreeCard>

    <!-- Nouvelle section Certifications -->
    <div class="certifications">
      <h2>🏅 Certifications</h2>
      <ul>
        <li>PSC1 (Prévention et Secours Civiques de niveau 1) - 2023</li>
        <li> <strong> TOEIC </strong> - Niveau B2 -  Score : 930/990 - 10/01/2025 </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DegreeCard from "@/components/education/DegreeCard.vue";

export default {
components: { DegreeCard },
};
</script>

<style scoped>
.education {
max-width: 800px;
margin: auto;
padding: 20px;
background: #f5f0e1; /* Fond général */
border-radius: 10px;
}

h1 {
color: #ba5a31; /* Rouge brique */
text-align: center;
margin-bottom: 20px;
}

h2 {
color: #000000;
margin-top: 30px;
text-align: center;
}

h3 {
color: #70a9a1; /* Bleu-vert */
margin-top: 15px;
}

ul {
list-style-type: none;
padding-left: 0;
}

ul li {
background: #e59f71; /* Orange doux */
color: #fff;
margin: 5px 0;
padding: 8px;
border-radius: 5px;
}

.certifications {
margin-top: 40px;
padding: 20px;
background: #e59f71; /* Orange doux */
color: #fff;
border-radius: 10px;
text-align: center;
}

.certifications ul li {
background:#fff ; /* Bleu-vert */
color: #70a9a1;
}

router-link {
color: #ba5a31;
font-weight: bold;
text-decoration: none;
}

router-link:hover {
text-decoration: underline;
}
</style>
