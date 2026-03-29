<template>
  <div>
    x:
    <input
      type="text"
      v-model.number="state.x"
      style="background-color: violet"
    />
    <br />
    y:
    <input
      type="text"
      v-model.number="state.y"
      style="background-color: violet"
    />
    <br />
    <button @click="CalcAdd2" class="btn btn-primary" style="width: 780px">
      계산
    </button>
    <div class="alert alert-warning">결과 : {{ state.result }}</div>
  </div>
  <hr style="color: red" />
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  name: 'Calc',
  setup() {
    const x = ref(0);
    const y = ref(0);
    // const imsi = 100 ; --> ref, reactive 함수가 설정되어 있지 않은 변수는 v-model, v-bind를 연결해서 쓸 수 없음. (반응을 체크할 수 없음!)
    const result = ref(0);
    const CalcAdd = () => {
      result.value = x.value + y.value;
    };

    //2. reactive
    const state = reactive({ x: 0, y: 0, result: 0 });

    const CalcAdd2 = () => {
      state.result = state.x + state.y;
    };
    // 리턴은 setup( ) 맨끝에 위치해야함.
    return { x, y, result, CalcAdd }; // {변수명, 변수명, 함수명} 등등을 리턴해줘야한다.
  },
};
</script>

<style></style>
