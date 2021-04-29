<template>
  <button>
    <slot></slot> 
  </button> 
</template>

<script>
export default {
};
</script>

<style scoped>
button,
a {
  width: 3.6rem; 
  text-decoration: none;
  padding: 0.5rem 0.3rem;
  font: inherit;
  background-color: #1c0376;
  border: 1px solid #3a0061;
  outline: none;
  color: orange;
  cursor: pointer;
  border-radius: 10px;
  display: inline-block;
}

a:active,
button:active {
  background-color: #270041;
  border-color: #270041;
}
</style>
