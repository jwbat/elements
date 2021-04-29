<template>
  <div>
    <h2 class="number">{{ nr }}</h2> 
    <h1 class="symbol">{{ symbol }}</h1> 
    <h3 class="name">{{ name }}</h3>
    <h4 class="mass">{{ mass }}</h4>
  </div> 
</template>

<script>
export default {
  props: ['el'],
  computed: {
    name() { return this.el.name },
    symbol() { return this.el.symbol },
    nr() { return this.el.number },
    mass() { return this.el.atomic_mass },
  }
};
</script>


<style scoped>
div {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.number {
  margin-top: 1rem;
  font-size: 2rem;
  flex-grow: 1;
}

.symbol {
  font-size: 3rem;
  flex-grow: 1;
  text-shadow: 1px 1px 1px white;
}
 
.name {
  margin-top: 1rem; 
  font-size: 1.8rem;
  flex-grow: 1;
}
 
.mass {
  margin: 1rem auto;
  font-size: 1.5rem;
  flex-grow: 1;
}
</style>

