<template>
  <div class="experience-view">
    <h1>Mes Expériences</h1>
    <div class="experience-list">
      <ProfessionalCard 
        v-for="experience in experiences" 
        :key="experience.id" 
        :experience="experience"
      />
    </div>
  </div>
</template>

<script setup>
import { useExperienceStore } from '@/stores/experience';
import { storeToRefs } from 'pinia';
import ProfessionalCard from '@/components/experience/ProfessionalCard.vue';

// Récupération du store des expériences
const experienceStore = useExperienceStore();
const { experiences } = storeToRefs(experienceStore);
</script>

<style scoped>
.experience-view {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
