<template>
  <div class="example">
    <img :src="example.img" :alt="example.name" />
    <span class="name">{{ example.name }}</span>
    <p class="description">{{ example.description }}</p>
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
.name {
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description {
  font-size: 12px;
  color: #f40909;
  margin-top: 3px;
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.example img {
  width: 130px;
  height: 170px;
  border-radius: 10px;
  display: block;
  margin: 5px auto;
}
</style>
