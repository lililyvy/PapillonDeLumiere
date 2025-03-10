<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="contact-info">
        <h3>Contactez-moi</h3>
        <ul>
          <li><strong>Nom : </strong>  Olivia FAVARD</li>
          <li> 🕾 +33 7 83 77 58 12</li>
          <li>✉️ olivia.favard@gmail.com</li>
          <li>
            Linkedin →<a href="https://www.linkedin.com/in/olivia-favard-ab64a0254/" target="_blank">
              <img src="@/assets/icons/linkedin.svg" alt="LinkedIn" class="linkedin-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style scoped>
.footer {
  background-color: #70a9a1; /* Fond plus foncé pour un meilleur contraste */
  color: #f5f5f5;  /* Texte plus clair pour contraster avec le fond */
  padding: 30px 20px;
  text-align: center;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info h3 {
  font-size: 1.8em;
  margin-bottom: 15px;
  color: #f5f2ea;  /* Couleur du titre plus lumineuse pour attirer l'attention */
}

.contact-info ul {
  list-style-type: none;
  padding: 0;
}

.contact-info ul li {
  font-size: 1.3em; /* Augmenter la taille du texte pour une meilleure lisibilité */
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-info ul li a {
  color: #f0f8f7; /* Lien clair, contraste fort avec le fond sombre */
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease, transform 0.3s ease;
}

.contact-info ul li a:hover {
  color: #ba5a31; /* Couleur orangée du lien lors du survol */
}

.linkedin-icon {
  width: 24px;
  height: 24px;
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.contact-info ul li a:hover .linkedin-icon {
  transform: scale(1.1); /* L'icône devient plus grande au survol */
}
</style>
