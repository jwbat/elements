import { ref } from 'vue';
import elements from '../data.js';

export default function useNumber() {
  const page = ref('PageOne');
  const pages = ['PageOne', 'PageTwo'];
  const pageToggler = idx => () => {
    idx = (idx + 1) % pages.length;
    page.value = pages[idx];
  };
  const turnPage = pageToggler(0);

  const classes = [
    'diatomic-nonmetal',
    'polyatomic-nonmetal',
    'noble-gas',
    'alkali-metal',
    'alkaline-earth-metal',
    'metalloid',
    'post-transition-metal',
    'transition-metal',
    'lanthanide',
    'actinide',
    'unknown',
  ];

  const chooseClass = category => {
    switch (category) {
      case 'diatomic nonmetal': return classes[0];
      case 'polyatomic nonmetal': return classes[1];
      case 'noble gas': return classes[2];
      case 'alkali metal': return classes[3];
      case 'alkaline earth metal': return classes[4];
      case 'metalloid': return classes[5];
      case 'post-transition metal': return classes[6];
      case 'transition metal': return classes[7];
      case 'lanthanide': return classes[8];
      case 'actinide': return classes[9];
      default: return classes[10];
    }
  };

  return {
    elements,
    page,
    turnPage,
    chooseClass,
  };
}
