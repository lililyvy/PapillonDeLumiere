<template>
    <div class="project-card">
      <img :src="project.image" :alt="project.title" class="project-image" />
      <div class="project-content">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <button @click="openProject" class="view-button">Voir plus</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    methods: {
      openProject() {
        window.open(this.project.pdf, '_blank');
      }
    }
  };
  </script>
  
  <style scoped>
  .project-card {
    background: #f5f0e1;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s;
  }
  .project-card:hover {
    transform: translateY(-5px);
  }
  .project-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  .project-content {
    padding: 15px;
  }
  .project-title {
    color: #ba5a31;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  .project-description {
    color: #333;
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
  .view-button {
    background: #e59f71;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .view-button:hover {
    background: #ba5a31;
  }
  </style>
  