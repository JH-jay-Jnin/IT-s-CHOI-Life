<template>
  <div>
    <Calc />

    <hr />
    <Composition />

    <hr />
    <Options />
    <!-- 3번 -->
  </div>
</template>

<script>
// 1번
import Options from './components/Options.vue';
import Composition from './components/Composition.vue';
import Calc from './components/Calc.vue';

export default {
  name: 'App', // 2번
  components: { Options, Composition },
};
</script>
<!-- components 입력이 4번-->

<style scoped></style>
