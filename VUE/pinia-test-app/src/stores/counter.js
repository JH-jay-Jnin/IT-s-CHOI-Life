import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  // defineStore 안에 conuter가 만들어 진 것인데, 화살표 함수에다가 넣어준 것이다.
  const count = ref(0); // states ( 상태를 체크할 변수)

  //getters (미리 계산해서 다른 컴포넌트에 제공하고자 하는 경우 사용한다. ==> 없으면 안 써도 그만 )
  const doubleCount = computed(() => count.value * 2);

  //actions (함수, 화살표함수를 권장함.)
  function increment() {
    count.value++;
  }

  const decrement = () => {
    count.value--; // count.value = count.value - 1;
  }; // 내부적으로는 count.value에서 1을 빼고 다시 변수에 넣어주는 화살표함수의 기능이다. + 다른 곳에서도 쓰려면, 아래 return에 추가!

  return { count, doubleCount, increment, decrement }; // 객체 리터럴로 return하여 다른 곳에서 사용할 수 있게 한다.
});
