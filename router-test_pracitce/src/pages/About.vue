<!-- 앞에서 만든 About.vue 를 Composion API 로 다시 정의하세요. -->
<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ $route.fullPath }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  setup() {
    const route = this.$route.fullPath;
  },
};
</script>

<style scoped></style>

<!-- 앞에서 앞에서 만든 About.vue 를 setup() 함수로 다시 정의하세요-->
<!--<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ $route.fullPath }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  setup() {
    const route = this.$route.fullPath;
  },
};
</script>

<style scoped></style>
-->
