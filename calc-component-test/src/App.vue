<template>
  <div>
    <Calc />
  </div>
</template>

<script>
import Calc from './components/Calc.vue';

export default {
  name: 'App',
  components: { Calc: Calc },
  data() {
    return {};
  },
  methods: {},
};
</script>
<!-- Calc : Calc는 Calc 하나를 쓰는걸로 코드로 줄일 수 있다. 같은 의미이기 때문에! -->

<style></style>
