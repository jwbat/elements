<template>
  <section :class="colorClass">
    <transition name="fade" mode="out-in">
      <component :is="page" :el="element"></component> 
    </transition> 
    <control-panel
      :el="element"
      @turn-page="turn"
      @set-number="setNumber"
      @increment-number="incrementNumber"
      @decrement-number="decrementNumber"
      @next-in-group="nextInGroup"
      @prev-in-group="prevInGroup"
    ></control-panel> 
  </section> 
</template>

<script>
import { ref, computed } from 'vue';

import useNumber from './composables/number.js';
import useSize from './composables/sizeWindow.js';

import PageOne from './pages/PageOne.vue';
import PageTwo from './pages/PageTwo.vue';

export default {
  components: { PageOne, PageTwo },
  setup() {
    const { elements, page, turnPage, chooseClass } = useNumber();
    useSize();

    const nr = ref(1);  // atomic number
    const setNumber = n => { nr.value = n };
    const incrementNumber = () => { nr.value = (nr.value % 119) + 1 };
    const decrementNumber = () => { nr.value = nr.value - 1 || 119 };

    const element = computed(() => elements[nr.value - 1]);

    // nav group ---------------------------------------------------------------
    const groupArr = () => elements.filter(el => el.xpos === element.value.xpos);
    const idx = () => groupArr().findIndex(el => el.number === element.value.number);

    const nextInGroup = () => { 
      const nextIdx = () => (idx() + 1) % groupArr().length;
      const n = groupArr()[nextIdx()].number;
      setNumber(n);
    };
    const prevInGroup = () => {
      const prevIdx = () => !(idx()) ? groupArr().length - 1 : idx() - 1;
      const n = groupArr()[prevIdx()].number;
      setNumber(n);
    };
    // -------------------------------------------------------------------------

    const colorClass = computed(() => chooseClass(element.value.category));
    const turn = () => { turnPage() };

    return {
      element,
      page,
      turn,
      setNumber,
      incrementNumber,
      decrementNumber,
      colorClass,
      nextInGroup,
      prevInGroup,
    };
  },
};
</script>

<style>
@import './components/ui/colors.css';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: Palatino;
  height: 100vh;
  height: calc(var(--vh) * 100);
}

body {
  height: 100%;
  min-height: 100%;
  background: #180e28;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section {
  height: 98%;
  height: calc(var(--vh) * 98);
  max-height: 50rem;
  background: black;
  padding: 1rem 0 0.5rem 0;
  width: 95vw;
  max-width: 25rem;
  border: 1px solid;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease-in;
}

.fade-leave-to {
  opacity: 0;
}
</style>
