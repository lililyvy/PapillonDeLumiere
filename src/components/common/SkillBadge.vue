// SkillBadge.vue
<template>
  <span class="skill-badge">{{ label }}</span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.skill-badge {
  display: inline-block;
  background-color: #e59f71;
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}
</style>
