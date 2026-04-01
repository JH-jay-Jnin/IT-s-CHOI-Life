<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Calc',
  // setup() : 컴포넌트의 로직을 작성하는 함수
  // 컴포넌트 생명 주기 : beforeCreate 이후 created 이전 단계에서 실행
  // 컴포넌트 템플릿에서 사용할정보를 반환 (return) 해야 한다.

  setup() {
    const x = ref(10);
    const y = ref(20);
    return { x, y };
  },
};
</script>

<style scoped></style>

<!-- 브라우저 -> 개발자 도구 (F12) -> vue 탭 -> 원하는 컴포넌트 클릭 -> X, Y 값 변경 시 
    -> <Calc> 컴포넌트의 setup data 탭에서 x, y 값 확인 가능하다! -->
