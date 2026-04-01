<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
    <button @click="CalcAdd">계산</button> <br />
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Calc2',
  setup() {
    /* ref()
    - ref는 원시 타입 데이터를 반응형 데이터로 변환해주는 함수 
    - 원시 타입 데이터 (단일 타입 데이터)를 반환하는 것이 아니라 객체를 반환한다.

    - script 태그 내부 : ref는 객체로 반환하기 때문에 .value로 접근해야 한다.
    - template 태그 내부 : Vue가 자동으로 .value로 접근하기 때문에 생략 가능하다.
    */
    const x = ref(10); // {x:10}
    const y = ref(20);
    const result = ref(30);

    const CalcAdd = () => {
      result.value = x.value + y.value;
    };
    return (x, y, result, CalcAdd);
  },
};
</script>
