<template>
    <div class="projects-view">
      <h1 class="title">Mes Projets</h1>
      
      <!-- Filtres -->
      <div class="filters">
        <button 
          v-for="category in categories" 
          :key="category.value" 
          :class="{ active: activeCategory === category.value }" 
          @click="activeCategory = category.value">
          {{ category.label }}
        </button>
      </div>
      
      <!-- Grille des projets -->
      <div class="projects-grid">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id" 
          :project="project" 
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import ProjectCard from '@/components/projects/ProjectCard.vue';
  import { useProjectStore } from '@/stores/projects';
  
  export default {
    components: { ProjectCard },
    setup() {
      const projectStore = useProjectStore();
      const activeCategory = ref('all');
  
      const categories = [
        { label: 'Tous', value: 'all' },
        { label: 'Informatique', value: 'informatique' },
        { label: 'Projets d’analyse et innovation', value: 'Projets d’analyse et innovation' },
        { label: 'Stages', value: 'stages' }
      ];
  
      const filteredProjects = computed(() => {
        if (activeCategory.value === 'all') return projectStore.projects;
        return projectStore.projects.filter(p => p.category === activeCategory.value);
      });
  
      return {
        activeCategory,
        categories,
        filteredProjects
      };
    }
  };
  </script>
  
  <style scoped>
  .projects-view {
    padding: 20px;
    text-align: center;
  }
  .title {
    font-size: 2rem;
    color: #ba5a31;
    margin-bottom: 20px;
  }
  .filters {
    margin-bottom: 20px;
  }
  .filters button {
    margin: 5px;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    background: #e59f71;
    color: white;
    border-radius: 5px;
  }
  .filters .active {
    background: #ba5a31;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  </style>
  