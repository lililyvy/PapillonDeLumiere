<template>
  <div class="example">
    <img :src="example.img" :alt="example.name" />
    <span>{{ example.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    example: Object
  }
};
</script>

<style scoped>
.example {
  text-align: center;
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.example:hover {
  transform: scale(1.05);
}
.example span {
  display: block; /* Toujours affiché */
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
  white-space: nowrap; /* Empêche le texte de passer à la ligne */
  overflow: hidden; /* Coupe le texte s'il est trop long */
  text-overflow: ellipsis; /* Ajoute "..." si le texte est trop long */
}
.example img {
  width: 130px;
  height: 170px;
  border-radius: 10px;
  display: block;
  margin: 5px auto;
}
</style>
