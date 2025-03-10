<template>
  <div class="hobbies-view">
    <h1>Mes Centres d'Intérêt</h1>
    <HobbyCard
      v-for="(hobby, index) in hobbies"
      :key="index"
      :title="hobby.title"
      :description="hobby.description"
      :categories="hobby.categories"
    />
  </div>
</template>

<script>
import HobbyCard from '@/components/hobbies/HobbyCard.vue';
import { useHobbiesStore } from '@/stores/hobbies';
import { computed } from 'vue';

export default {
  components: { HobbyCard },
  setup() {
    const hobbiesStore = useHobbiesStore();
    const hobbies = computed(() => hobbiesStore.hobbies);

    return { hobbies };
  }
};
</script>

<HobbyCard
  v-for="(hobby, index) in hobbies"
  :key="index"
  :title="hobby.title"
  :description="hobby.description"
  :categories="hobby.categories"
  :images="hobby.images"
/>

<style scoped>
.hobbies-view {
  padding: 20px;
  background: #f5f0e1;
}

h1 {
  color: #ba5a31;
  text-align: center;
  margin-bottom: 20px;
}
</style>