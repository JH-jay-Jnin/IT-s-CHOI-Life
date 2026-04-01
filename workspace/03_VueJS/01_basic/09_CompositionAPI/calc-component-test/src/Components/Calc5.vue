<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Calc5',
  setup() {
    const x = ref(0);
    const result = ref(0);
    /* watch()
    - 반응형 데이터의 변화를 감지하여 callback 함수를 실행한다.
    - 첫 번째 인자 : 감시할 대상 (ref, reactive, 또는 getter 함수)
    - 두 번째 인자 : 콜백 함수 (현재 값, 이전 값)
    - 세 번째 인자 : 옵션 객체 

    - immediate : true
       -> 처음 실행될 때 콜백 함수가 실행 (기본값 : false)

    - deep : true
       -> 객체 또는 배열 내부 값 변화까지 감지 (기본값 : false)
    */
    watch(
      x, // 첫 번째 인자
      (current, old) => {
        console.log(`${old} -> ${current}`);
        result.value = current * 2;
      }, // 두 번째 인자
      { immediate: true }, // 세 번째 인자
    );
    // 저장하고 실행해보면 처음부터 실행되는 것을 알 수 있다.
    return { x, result };
  },
};
</script>
