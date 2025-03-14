<template>
  <div class="hobby-details">
    <button @click="$emit('closeDetails')" class="close-btn">✖</button>
    <h2>{{ hobby.title }}</h2>
    <p>{{ hobby.description }}</p>

    <div v-if="hobby.type === 'films'">
      <h3>Films préférés :</h3>
      <div class="grid">
        <div v-for="(list, genre) in hobby.movies" :key="genre">
          <h4>{{ genre }}</h4>
          <div class="movie-list">
            <img v-for="movie in list" :key="movie" :src="getImage(movie)" :alt="movie" />
          </div>
        </div>
      </div>
      <h4>Disney & Pixar :</h4>
      <p>{{ hobby.disney }}</p>
    </div>

    <div v-if="hobby.type === 'lecture'">
      <h3>Mes sagas préférées :</h3>
      <div class="grid">
        <div v-for="book in hobby.books" :key="book">
          <img :src="getImage(book)" :alt="book" />
        </div>
      </div>
      <h4>Auteurs favoris :</h4>
      <p>{{ hobby.authors.join(", ") }}</p>
    </div>

    <div v-if="hobby.type === 'musique'">
      <h3>Mes artistes préférés :</h3>
      <ul>
        <li v-for="artist in hobby.artists" :key="artist">{{ artist }}</li>
      </ul>
    </div>

    <div v-if="hobby.type === 'voyage'">
      <h3>Destinations :</h3>
      <iframe :src="hobby.mapUrl" width="100%" height="400"></iframe>
      <ul>
        <li v-for="destination in hobby.destinations" :key="destination">{{ destination }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hobby: Object,
  },
  methods: {
    getImage(name) {
      return `/assets/images/${name.replace(/\s+/g, "-").toLowerCase()}.jpg`;
    },
  },
};
</script>

<style scoped>
.hobby-details {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
}
.movie-list img {
  width: 100px;
  border-radius: 8px;
}
.close-btn {
  float: right;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
