<template>
  <div class="container">
    <div class="heading">
      <h2>{{ name }}</h2> 
    </div> 
    <div class="item">
      <h4 class="category">{{ category }}</h4> 
    </div> 
    <div class="item period">
      <h4 class="label">group</h4> 
      <h4>{{ group }}</h4> 
      <h4 class="label">period</h4> 
      <h4>{{ period }}</h4> 
    </div> 
    <div v-if="nr >= 119" class="item disc">
      <h4 class="data disc">hypothetical</h4> 
    </div> 
    <div v-else class="item disc">
      <h4 class="label disc">discovered by</h4> 
      <h4 class="data disc">{{ discoverer }}</h4> 
    </div> 
  </div>
</template>

<script>
export default {
  props: ['el'],
  computed: {
    name() { return this.el.name },
    category() { return this.el.category },
    period() { return this.el.period },
    group() { return this.el.xpos },
    discoverer() { return this.el.discovered_by },
    nr() { return this.el.number },
  }
};
</script>

<style scoped>
.container {
  height: 99%;
  width: 99%;
  padding-top: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.heading {
  font-size: 1.2rem;
  color: inherit;
/*   flex-grow: 1;*/
}

.item {
  width: 95%;
  align-items: center;
  text-align: center;
/*   flex-grow: 1;*/
}

.label {
  display: inline-block;
  color: #a9a9a8; 
  font-size: 1rem;
  margin: 0 0.5rem;
  text-align: center;
}

.data {
  display: inline-block;
  color: #ffd489; 
  font-size: 1.8rem;
}

.category {
  display: inline-block;
  color: inherit;
  font-size: 1.7rem;
}

.period {
  display: flex;
  justify-content: center;
  align-items: center;
/*   flex-grow: 1;*/
}

.period h4 {
  font-size: 1.7rem;
}

.period .label {
  color: #a9a9a8; 
  font-size: 1.1rem;
  margin-left: 1rem;
  padding: 0.5rem;
}

.item.disc {
  height: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 auto 0;
  margin-bottom: 2rem;
  text-align: center;
}

.label.disc {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.data.disc {
  font-size: 1.3rem;
}
</style>
