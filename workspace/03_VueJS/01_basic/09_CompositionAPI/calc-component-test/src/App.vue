<template>
  <div>
    <Calc />
  </div>
  <br />
  <div>
    <Calc2 />
  </div>
  <br />
  <div>
    <Calc3 />
  </div>
  <br />

  <div>
    <Calc4 />
  </div>
  <br />

  <div>
    <Calc5 />
  </div>
  <br />
</template>

<script>
import Calc from './Components/Calc.vue';
import Calc2 from './Components/Calc2.vue';
import Calc3 from './Components/Calc3.vue';
import Calc4 from './Components/Calc4.vue';
import Calc5 from './Components/Calc5.vue';

export default {
  name: 'App',
  components: { Calc, Calc2, Calc3, Calc4, Calc5 },
};
</script>

<style scoped></style>
