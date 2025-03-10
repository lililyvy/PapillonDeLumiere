<template>
  <div class="hobby-card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <!-- Affichage des films (avec catégories) -->
    <div v-if="categories" class="categories">
      <div v-for="(category, index) in categories" :key="index" class="category">
        <h3 @click="toggleCategory(index)">{{ category.genre }}</h3>
        <transition name="fade">
          <div v-if="isOpen(index)" class="image-grid">
            <img v-for="(movie, idx) in category.movies" :key="idx" :src="movie.src" :alt="movie.alt" />
          </div>
        </transition>
      </div>
    </div>


    <!-- Affichage direct des séries et animes -->
    <div v-if="images" class="image-grid">
      <img v-for="(image, idx) in images" :key="idx" :src="image.src" :alt="image.alt" />
    </div>
  </div>
</template>


<script>
export default {
  props: {
    title: String,
    description: String,
    categories: Array, // Utilisé pour les films
    images: Array // Utilisé pour séries et animes
  },
  data() {
    return {
      openCategories: new Set()
    };
  },
  methods: {
    toggleCategory(index) {
      if (this.openCategories.has(index)) {
        this.openCategories.delete(index);
      } else {
        this.openCategories.add(index);
      }
      this.openCategories = new Set(this.openCategories); // Force Vue à réagir
    },
    isOpen(index) {
      return this.openCategories.has(index);
    }
  }
};
</script>

<style scoped>
.hobby-card {
  background: #f5f0e1;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.hobby-card:hover {
  transform: scale(1.05);
}

h2 {
  color: #ba5a31;
}

p {
  color: #70a9a1;
}

.category {
  margin-top: 15px;
}

h3 {
  color: #e59f71;
  cursor: pointer;
  transition: color 0.3s;
}

h3:hover {
  color: #ba5a31;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  margin-top: 10px;
}

.image-grid img {
  width: 100%;
  border-radius: 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
