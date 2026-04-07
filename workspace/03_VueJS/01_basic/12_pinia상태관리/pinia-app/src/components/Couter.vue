<template>
  <div>
    <h2>Counter</h2>
    <h3>반응형으로 값 꺼내기 : {{ counter.count }}</h3>
    <h3>값만 꺼내기 : {{ count }}</h3>
    <button @click="increment">1씩 증가</button>
    <button @click="reset">0으로 초기화</button>
    <button @click="selfIncrement">자체적으로 1 증가</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/01_basic/counter';
const counter = useCounterStore(); // like.js 에서 return한 세 개의 값을 반환 (객체로) 해준다.
const { count, increment, reset } = useCounterStore();
// count가 상태값 자체를 가져올 때 반응형이 깨지기 때문에
// 객체 자체를 가져와서 꺼내 쓰는 것이 권장됨.

// 권장하지 않는 1씩 증가하는 방식 ==> 값 추적도 어렵고 유지보수도 어렵다. ex) 오류가 나면 컴포넌트에서 전부 찾아야함
const selfIncrement = () => {
  counter.count++;
};
</script>
