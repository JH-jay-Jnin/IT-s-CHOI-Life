<!-- 앞에서 앞에서 만든 About.vue 를 setup() 함수로 다시 정의하세요-->

<!-- 흐름 정리 :     useRoute()     ->    currentRoute     ->    currentRoute.fullPath
                 (route 객체 받기)      (route 객체 저장)         (fullPath 속성 접근)
      -->

<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ $route.fullPath }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'; // 1. import 하기

export default {
  name: 'About',
  setup() {
    const currentRoute = useRoute(); // 2. useRoute()로 route 객체 받기
    return { currentRoute }; // 3. template에 노출
  },
};
</script>

<style scoped></style>

<!-- 앞에서 만든 About.vue 를 Composion API 로 다시 정의하세요. -->
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

<style scoped></style>-->
