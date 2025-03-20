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
  font-size: 2.5rem; /* Plus grand pour un effet accrocheur */
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: white;
  background: linear-gradient(135deg, #e59f71, #70a9a1);
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  display: inline-block; /* Pour s'adapter au texte */
  margin: 20px auto;
  text-transform: uppercase;
  letter-spacing: 2px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem; /* Un peu plus petit sur mobile */
    padding: 10px 20px;
  }
}
</style>
