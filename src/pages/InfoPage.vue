<template>
  <div class="container">
    <CloseIcon class="close" @click="toggleInfo"/> 
    <div class="row">
      <div class="legend">
        <ArrowLeft class="icon"/><ArrowRight/>
      </div> 
      <p>move by atomic number</p> 
    </div> 
    <div class="row">
      <div class="legend">
        <ArrowDown class="icon"/><ArrowUp/>
      </div> 
      <p>move within an element's group</p> 
    </div> 
    <div class="row">
      <div class="legend">
        <input 
          disabled
          type="number" 
          min="1"
          max="119"
          placeholder="Nr" 
        /> 
      </div> 
      <p>enter an atomic number 1 - 119</p> 
    </div> 
  </div>
</template>

<script>
import ArrowUp from '../components/icons/ArrowUp.vue';
import ArrowDown from '../components/icons/ArrowDown.vue';
import ArrowRight from '../components/icons/ArrowRight.vue';
import ArrowLeft from '../components/icons/ArrowLeft.vue';
import CloseIcon from '../components/icons/CloseIcon.vue';

export default {
  components: {
    ArrowUp,
    ArrowDown,
    ArrowRight,
    ArrowLeft,
    CloseIcon,
  },
  emits: ['toggle-info'],
  methods: {
    toggleInfo() {
      this.$emit('toggle-info');
    }
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  background: black;
  color: bisque;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close {
  margin-left: auto;
  margin-right: 1rem;
  stroke: #b59e9a;
}

.row {
  margin-top: 10%;
  margin-left: 2%;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.legend {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.icon {
  margin-right: 1rem;
}

p {
  font-size: 1.1rem;
  text-align: center;
}

input {
  background: #180e28;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #6ba6ff;
  font-size: 1.1rem;
  height: 2rem;
  width: 3rem;
  text-align: center;
  min-height: 0;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
/*   margin: 0;*/
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

::placeholder {
  color: #6ba6ff;
}
</style>
