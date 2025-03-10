<template>
  <TheHeader />
  <main>
    <router-view />
  </main>
  <TheFooter />
</template>
<style>
body {
  background-color: #f5f0e1 !important; 
}
</style>
<script>
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue'; 

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter, 
  }
}
</script>
