<template>
  <div 
    class="card" 
    :class="{ expanded: isExpanded }" 
    @click="toggleDetails"
    :style="{ backgroundImage: `url(${imageSrc})` }"
  >
    <div class="overlay" :class="{ active: isExpanded }"></div>

    <div class="card-content">
      <h2 class="title">{{ experience.title }}</h2>
      <p class="date">{{ experience.date }} - {{ experience.location }}</p>
      
      <transition name="fade">
        <div v-if="isExpanded" class="details">
          <p class="description">{{ experience.description }}</p>
          <ul class="tasks">
            <li v-for="(task, index) in experience.tasks" :key="index">
              {{ task }}
            </li>
          </ul>
          <!-- Bouton pour télécharger le rapport si disponible -->
          <a v-if="experience.pdf" :href="experience.pdf" target="_blank" class="pdf-button">
            📄 Voir le rapport
          </a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
experience: Object
});

const isExpanded = ref(false);
const toggleDetails = () => {
isExpanded.value = !isExpanded.value;
};

const imageSrc = computed(() => {
return new URL(props.experience.image, import.meta.url).href;
});
</script>

<style scoped>
.card {
position: relative;
width: 100%;
max-width: 800px;
min-height: 200px;
background-size: cover;
background-position: center;
color: white;
padding: 20px;
margin: 20px auto;
border-radius: 10px;
cursor: pointer;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
transition: transform 0.3s ease-in-out;
}

.card:hover {
transform: scale(1.02);
}

.overlay {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.4);
transition: background 0.3s ease-in-out;
}

.card.expanded .overlay {
background: rgba(0, 0, 0, 0.8);
}

.card-content {
position: relative;
text-align: center;
z-index: 2;
}

.title {
font-size: 24px;
font-weight: bold;
}

.date {
font-size: 16px;
margin-top: 5px;
}

.details {
margin-top: 15px;
text-align: left;
}

.tasks {
margin-top: 10px;
padding-left: 20px;
}

.tasks li {
list-style-type: disc;
}

.pdf-button {
display: inline-block;
margin-top: 10px;
padding: 10px 15px;
background-color: #ba5a31;
color: white;
text-decoration: none;
border-radius: 5px;
transition: background 0.3s;
}

.pdf-button:hover {
background-color: #ba5a31;
}

.fade-enter-active, .fade-leave-active {
transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
opacity: 0;
}
</style>
