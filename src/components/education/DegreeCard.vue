<template>
    <div class="degree-card">
      <div class="header" @click="toggleDetails">
        <h3>{{ title }}</h3>
        <span v-if="isExpandable" class="toggle-icon">
          {{ isOpen ? "▲" : "▼" }}
        </span>
      </div>
      <p class="year">{{ year }}</p>
      <p class="school">{{ school }}</p>
      <p class="mention" v-if="mention">Mention : {{ mention }}</p>
  
      <div v-if="isOpen" class="details">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    props: {
      title: String,
      year: String,
      school: String,
      mention: String,
      isExpandable: Boolean,
    },
    setup(props) {
      const isOpen = ref(false);
  
      function toggleDetails() {
        if (props.isExpandable) {
          isOpen.value = !isOpen.value;
        }
      }
  
      return { isOpen, toggleDetails };
    },
  };
  </script>
  
  <style scoped>
  .degree-card {
    background: #fff;
    border-left: 5px solid #70a9a1;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    transition: 0.3s;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  
  .toggle-icon {
    font-size: 18px;
    color: #ba5a31;
  }
  
  .year, .school {
    font-weight: bold;
    color: #333;
  }
  
  .details {
    background: #f5f0e1;
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
  }
  </style>
  