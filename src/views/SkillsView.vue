// SkillsView.vue
<template>
  <div class="skills-container">
    <h1>Mes Compétences</h1>
    <div v-for="(skills, category) in skillsStore.categories" :key="category" class="skill-section">
      <h2 @click="toggleCategory(category)" class="category-title">
        <span class="icon">{{ categoryIcons[category] }}</span>
        {{ category }}
        <span class="arrow">{{ expandedCategories.includes(category) ? "▲" : "▼" }}</span>
      </h2>
      <transition name="fade">
        <ul v-if="expandedCategories.includes(category)" class="skills-list">
          <li v-for="skill in skills" :key="skill" class="skill-item">
            <SkillBadge :label="skill" />
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useSkillsStore } from '@/stores/skills';
import SkillBadge from '@/components/common/SkillBadge.vue';

export default {
  components: { SkillBadge },
  setup() {
    const skillsStore = useSkillsStore();
    const expandedCategories = ref([]);

    const categoryIcons = {
      'Techniques': '🖥️',
      'Organisationnelles': '📅',
      'Relationnelles': '🤝',
      'D’adaptation': '🔄'
    };

    const toggleCategory = (category) => {
      if (expandedCategories.value.includes(category)) {
        expandedCategories.value = expandedCategories.value.filter(cat => cat !== category);
      } else {
        expandedCategories.value.push(category);
      }
    };

    return { skillsStore, expandedCategories, toggleCategory, categoryIcons };
  }
};
</script>

<style scoped>
.skills-container {
  padding: 40px;
  max-width: 800px;
  margin: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.category-title {
  cursor: pointer;
  background-color: #70a9a1;
  padding: 15px;
  color: white;
  border-radius: 8px;
  margin: 10px 0;
  font-size: 18px;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category-title:hover {
  background-color: #e59f71;
}

.icon {
  margin-right: 10px;
}

.arrow {
  margin-left: 10px;
}

.skills-list {
  padding: 15px;
  background-color: #f5f0e1;
  border-radius: 8px;
  margin-top: 10px;
  list-style-type: none;
  padding-left: 20px;
}

.skill-item {
  margin: 8px 0;
  display: flex;
  align-items: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
