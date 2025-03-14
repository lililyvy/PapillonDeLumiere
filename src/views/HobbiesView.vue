<template>
  <div>
    <h1>Mes Hobbies</h1>
    <HobbiesGallery />
  </div>
</template>

<script>
import HobbiesGallery from '@/components/hobbies/HobbiesGallery.vue';

export default {
  components: {
    HobbiesGallery
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: #ba5a31;
}
</style>
