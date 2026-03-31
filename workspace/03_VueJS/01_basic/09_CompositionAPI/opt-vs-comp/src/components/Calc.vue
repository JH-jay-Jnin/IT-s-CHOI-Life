<template>
  <div>
    <h3>다른 컴포넌트</h3>

    <div>
      X: <input type="text" v-model.number="x" /><br />
      Y: <input type="text" v-model.number="y" /><br />
      <button @click="calculateSum(x, y, 1)">X + Y</button>
      <p>X + Y = 더한 값 : {{ sum1 }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCalc } from './Composition.vue';

const { x, y, sum1, calculateSum } = useCalc();
// useCalc()의 return된 객체에서 필요한 속성만 가져오면 된다. *순서 상관없다! *
</script>

<!-- -------------위는 setup을 더 간단하게 쓴 버전. 아래는 그냥 setup 버전------------------------------- -->

<!-- <script>
import { useCalc } from './Composition.vue';
export default {
  setup() {
    const { x, y, sum1, calculateSum } = useCalc();

    return { x, y, sum1, calculateSum };
  },
};
</script> -->
