<template>
  <div class="container">
    <Header />
    <router-view></router-view>
    <!-- 라우터가 보여주는 페이지 컴포넌트가 들어가는 자리 -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: { Header },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
