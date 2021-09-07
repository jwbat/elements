<template>
  <base-card class="card">
    <base-button 
      @click="toggleInfo"
      class="btn"><info-icon></info-icon> 
    </base-button> 
    <input 
      @keydown.enter="receiveInput"
      type="number" 
      min="1"
      max="119"
      placeholder="Nr" 
    /> 
    <base-button 
      v-if="isPlaying" 
      @click="togglePlay"
      class="btn play-pause"><PauseIcon/>
    </base-button> 
    <base-button 
      v-else 
      @click="togglePlay"
      class="btn play-pause"><PlayIcon/>
    </base-button> 
  </base-card>
  <base-card class="card">
    <base-button 
      class="btn" 
      @click="nextInGroup"><ArrowDown/>
    </base-button> 
    <base-button 
      class="btn" 
      @click="prevInGroup"><ArrowUp/>
    </base-button> 
    <base-button 
      class="btn" 
      @click="decrementNumber"><ArrowLeft/>
    </base-button> 
    <base-button 
      class="btn" 
      @click="incrementNumber"><ArrowRight/>
    </base-button> 
    <base-button 
      class="btn" 
      @click="turnPage"><MoreIcon/>
    </base-button> 
  </base-card> 
</template>

<script>
import { ref } from 'vue';

import InfoIcon from '../icons/InfoIcon.vue';
import MoreIcon from '../icons/MoreIcon.vue';
import PlayIcon from '../icons/PlayIcon.vue';
import PauseIcon from '../icons/PauseIcon.vue';
import ArrowUp from '../icons/ArrowUp.vue';
import ArrowDown from '../icons/ArrowDown.vue';
import ArrowRight from '../icons/ArrowRight.vue';
import ArrowLeft from '../icons/ArrowLeft.vue';

export default {
  props: ['el'],
  components: {
    InfoIcon,
    PlayIcon,
    PauseIcon,
    MoreIcon,
    ArrowUp,
    ArrowDown,
    ArrowRight,
    ArrowLeft,
  },
  emits: [
    'toggle-info',
    'turn-page',
    'set-number',
    'increment-number',
    'decrement-number',
    'next-in-group',
    'prev-in-group',
  ],
  setup(_, context) {
    window.addEventListener('keydown', e => {
      if (e.keyCode == 32) { togglePlay() }
    });
    const turnPage = () => context.emit('turn-page');
    const toggleInfo = () => context.emit('toggle-info');

    function receiveInput() {
      const n = event.target.value;
      if (n < 120 && n > 0) {
        context.emit('set-number', n);
      }
      event.target.value = null;
    }

    const isPlaying = ref(false);
    let interval;
    const togglePlay = () => {
      if (!isPlaying.value) {
        interval = setInterval(() => {
          context.emit('increment-number');
        }, 2000);
      }
      else if (isPlaying.value) {
        clearInterval(interval);
      } 
      isPlaying.value = !isPlaying.value;
    };

    const incrementNumber = () => { context.emit('increment-number') };
    const decrementNumber = () => { context.emit('decrement-number') };
    const nextInGroup = () => { context.emit('next-in-group') };
    const prevInGroup = () => { context.emit('prev-in-group') };

    return {
      toggleInfo,
      isPlaying,
      togglePlay,
      receiveInput,
      turnPage,
      incrementNumber,
      decrementNumber,
      nextInGroup,
      prevInGroup,
    };
  },
};
</script>

<style scoped>
.card {
  background: #0a0808;
  margin-top: auto;
  padding: 0;
  display: flex;
  wrap: no-wrap;
  justify-content: space-around;
  align-items: center;
}

.nr-label {
  display: none;
}

input {
  background: #180e28;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #6ba6ff;
  font-size: 1.4rem;
  height: 3rem;
  width: 4rem;
  text-align: center;
  min-height: 0;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

::placeholder {
  color: #6ba6ff;
}

.btn {
  padding: 0;
  background: none;
  outline: none;
  border: none;
  width: 4rem;
  height: 4rem;
  min-height: 0;
}

svg {
  stroke: #6ba6ff;
  stroke-width: 2;
  width: 30px;
  height: 30px;
}
</style>
