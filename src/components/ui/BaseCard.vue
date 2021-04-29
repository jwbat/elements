<template>
  <div class="card">
    <slot></slot> 
  </div> 
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.76);
  padding: 0.5rem;
  margin: 0rem auto;
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
</style>
