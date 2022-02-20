import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('countStore', () => {
  const counter = ref(0);
  return {
    count: counter,
    upperCount: () => (counter.value = counter.value + 1),
    lowerCount: () => (counter.value = counter.value + 1),
    setCount: (v) => {
      console.log("vvv", v)
      counter.value = v
    },
  };
});
